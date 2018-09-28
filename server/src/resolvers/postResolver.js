const resolvers = {
  Query: {
    allPosts: (_, __, { models: { Post } }) => Post.find({}),
    getPost: (_, { id }, { models: { Post } }) => Post.findById(id)
  },
  Mutation: {
    createPost: (_, { post }, { models: { Post }, user }) => {
      return Post.create({ ...post, by: user });
    }
  }
};

export default resolvers;
