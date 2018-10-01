const resolvers = {
  Query: {
    allUsers: (_, __, { models: { User } }) => User.find({}),
    getUser: (_, { id }, { models: { User } }) => User.findById(id)
  },
  Mutation: {
    createUser: async (_, args, { models: { User } }) => {
      try {
        return await User.create(args);
      } catch (ex) {
        return null;
      }
    }
  }
};

export default resolvers;
