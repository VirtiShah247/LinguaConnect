import { GraphQLClient } from "graphql-request";

const { NEXT_PUBLIC_GRAPHCMS_ENDPOINT, NEXT_PUBLIC_HYGRAPH_TOKEN } =
  process.env;
const client = new GraphQLClient(NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string, {
  headers: {
    Authorization: `Bearer ${NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

export default client;
