import { gql } from "graphql-request";
import client from "./client";

const GetUserByEmail = async (email: string) => {
  console.log(email);
  const getUserByEmailQuery = gql`
    query getUserByEmailQuery($email: String!) {
      tutor(where: { email: $email }) {
        id
        email
        password
        name
      }
    }
  `;

  const getUserResponse: any = await client.request(getUserByEmailQuery, {
    email,
  });
  return { user: getUserResponse.authors[0] };
};

export default GetUserByEmail;
