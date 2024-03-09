import { authOptions } from "@/app/lib/auth";
import client from "@/app/lib/client";
import { GetUserByEmail } from "@/services";
import { gql } from "graphql-request";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data: any = await req.formData();
  console.log(data.get("email"));
  const { user } = await GetUserByEmail(data.get("email") as string);
  console.log(user);
  const slot = {
    endTime: data.get("endTime"),
    startTime: data.get("startTime"),
    id: user?.id,
  };
  const mutation = gql`
    mutation MyMutation($endTime: DateTime, $startTime: DateTime, $id: ID) {
      createClass(
        data: {
          endTime: $endTime
          startTime: $startTime
          tutor: { connect: { id: $id } }
        }
      ){
        id
      }
    }
  `;

  const convertedSlot = {
    ...slot,
    endTime: new Date(slot.endTime).toISOString(),
    startTime: new Date(slot.startTime).toISOString(),
  };

  const response = await client.request(mutation, convertedSlot);
  console.log(response);
  return NextResponse.json({ message: "Slot Created Successfully!" });
}
