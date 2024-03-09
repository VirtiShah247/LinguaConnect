import { GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;
const customGraphToken = process.env.HYGRAPH_TOKEN;

const client = new GraphQLClient(graphqlAPI, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${customGraphToken}`,
  },
});

export default client;
