import { gql } from 'apollo-server-express';

const postType = gql`
  type Post {
    id: ID!
    desc: String!
    photo: String!
    likedBy: [UserShort]!
    comments: [UserShort]!
    createdAt: String!
    by: UserShort
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
