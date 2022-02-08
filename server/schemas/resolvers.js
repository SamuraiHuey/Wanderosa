const { AuthenticationError } = require('apollo-server-express');
const { User, Itenerary } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
   
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addDay: async (parent, args, context) => {
      if (context.user) {
        const itenerary = await Itenerary.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { inteneraries: itenerary._id } },
          { new: true }
        );

        return itenerary;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

  }
}

module.exports = resolvers;