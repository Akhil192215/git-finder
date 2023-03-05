const UserType = require('./typeDfs/userType')
const axios = require("axios");
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
  } = require('graphql');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      searchUsers: {
        type: new GraphQLList(UserType),
        args: {
          query: { type: GraphQLString },
          type: { type: GraphQLString },
        },
        resolve: async (_, { query, type }) => {
          if(query==='') return null
          const response = await axios.get(`https://api.github.com/search/users?q=${query}+in:${type}`);
          return response.data.items;
        },
      },
    },
  });
  

  module.exports  = new GraphQLSchema({ query: RootQuery });