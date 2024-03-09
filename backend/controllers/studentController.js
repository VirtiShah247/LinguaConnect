const { gql, request } = require("graphql-request");
const dotenv = require("dotenv");
dotenv.config();

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;
const customGraphToken = process.env.HYGRAPH_TOKEN;
console.log(graphqlAPI, customGraphToken);

const registerStudent = async (req, res) => {
  const { name, password, email } = req.body;
  console.log({ name, password, email });
  if (!name || !password || !email) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const mutation = gql`
    mutation MyMutation($name: String!, $email: String!, $password: String!) {
      createStudent(data: { name: $name, email: $email, password: $password }) {
        id
      }
    }
  `;

  const publishmutation = gql`
    mutation MyMutation($id: ID!) {
      publishStudent(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;
  try {
    const response = await request(
      graphqlAPI,
      mutation,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${customGraphToken}`,
        },
      }
    );
    await request(
      graphqlAPI,
      publishmutation,
      {
        id: response.createStudent.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${customGraphToken}`,
        },
      }
    );
    console.log(response);
    return res.status(201).json({ message: "Student Created Successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registerStudent };
