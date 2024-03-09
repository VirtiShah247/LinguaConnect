import { GraphQLClient, gql } from "graphql-request";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { GetUserByEmail } from "@/services";

const { NEXT_PUBLIC_GRAPHCMS_ENDPOINT, NEXT_PUBLIC_HYGRAPH_TOKEN } =
  process.env;
const client = new GraphQLClient(NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string, {
  headers: {
    Authorization: `Bearer ${NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

const CreateNextUserMutation = gql`
  mutation createStudent($userData: StudentCreateInput!) {
    createStudent(data: $userData) {
      id
    }
  }
`;

const CreateNextTutorMutation = gql`
  mutation createTutor($userData: TutorCreateInput!) {
    createTutor(data: $userData) {
      id
    }
  }
`;

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password, name, isTutor }: any = await req.json();
  console.log({ email, password, name, isTutor });
  if (!email || !password || !name) {
    return NextResponse.json({
      message: "Please fill all the fields",
      success: false,
    });
  }

  const exixstingUser = await GetUserByEmail(email);
  if (exixstingUser.user?.email === email) {
    return NextResponse.json({
      message: "Account Already Exists!",
      status: 400,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const userData = {
    email,
    password: hashedPassword,
    name,
  };

  if (isTutor) {
    const response: any = await client.request(CreateNextTutorMutation, {
      userData,
    });
  } else {
    const response: any = await client.request(CreateNextUserMutation, {
      userData,
    });
  }
  return NextResponse.json({
    message: "User Created Successfully!",
    status: 200,
  });
}
