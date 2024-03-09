import client from "@/app/lib/client";
import { GetUserByEmail } from "@/services";
import { gql } from "graphql-request";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data: any = await req.formData();
  const session = await getServerSession();
  console.log(session)
  const slot = {
    endTime: data.get("endTime"),
    startTime: data.get("startTime"),
    id: session?.user?.email,
  };
  const mutation = gql`
    mutation MyMutation($data: { endTime: String, startTime: String, tutor: { connect: { id: String } } }) {
      createClass(
        data: { endTime: $endTime, startTime: $startTime, tutor: { connect: { id: $id } } }
      )
    }
  `;

  const response = await client.request(mutation, slot);
  console.log(response);
  return NextResponse.json({ message: "Slot Created Successfully!" });
}
