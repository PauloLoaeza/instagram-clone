const resolvers = {
  Query: {
    allUsers: (_, __, { models: { User } }) => User.find({}),
    getUser: (_, { id }, { models: { User } }) => User.findById(id)
  },
  Mutation: {
    createUser: (_, { username, password }, { models: { User } }) =>
      User.create({ username, password })
  }
};

export default resolvers;
