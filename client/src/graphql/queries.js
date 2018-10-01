import gpl from 'graphql-tag';

export default {
  query: {},
  mutation: {
    createUser: gpl`
        mutation($username: String!, $password: String!, $email: String!, $fullname: String!) {
          createUser(
            username: $username
            password: $password
            email: $email
            fullname: $fullname
          ) {
            id
            username
            password
            fullname
          }
        }
        `
  }
};
