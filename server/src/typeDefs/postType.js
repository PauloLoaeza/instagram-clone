import { gql } from 'apollo-server-express';

const postType = gql`
  type Post {
    id: ID!
    desc: String!
    photo: String!
    likedBy: [User]!
    comments: [User]!
    createdAt: String!
    by: User
  }

  input iPost {
    desc: String!
    photo: String
  }

  type Query {
    allPosts: [Post]!
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(post: iPost): Post
  }
`;

export default postType;
