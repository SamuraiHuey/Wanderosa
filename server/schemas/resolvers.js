const { AuthenticationError } = require('apollo-server-express');
const { User, Itinerary } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('itinerary');
        

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('itinerary')
    },
   
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('itinerary')

    },
    itinerary: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Itinerary.find(params);
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addDay: async (parent, args, context) => {
      if (context.user) {
        const itinerary = await Itinerary.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { itinerary: itinerary._id } },
          { new: true }
        );

        return itinerary;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

  }
}

module.exports = resolvers;