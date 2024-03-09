const { gql } = require("graphql-request");
const { default: client } = require("../lib/client");

const registerStudent = async (req, res) => {
  const { name, password, email } = req.body;
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

  const response = await client.request(mutation, { name, email, password });
  console.log(response);

  return res.status(201).json({ message: "Student registered" });
};

module.exports = { registerStudent };
