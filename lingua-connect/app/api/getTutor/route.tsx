import { GraphQLClient, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";
const { NEXT_PUBLIC_GRAPHCMS_ENDPOINT, NEXT_PUBLIC_HYGRAPH_TOKEN } =
  process.env;
const client = new GraphQLClient(NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string, {
  headers: {
    Authorization: `Bearer ${NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  }
});

export async function GET() {
  const query = gql`
    query MyQuery {
      classesConnection {
        edges {
          node {
            tutor {
              name
              id
              language
            }
            endTime
            startTime
          }
        }
      }
    }
  `;

  const response: any = await client.request(query);
  console.log(response.classesConnection.edges);
    return NextResponse.json({ tutors: response.classesConnection.edges });
}