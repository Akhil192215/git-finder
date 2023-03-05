const { GraphQLObjectType, GraphQLString } = require("graphql");
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    login: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar_url: { type: GraphQLString },
    html_url: { type: GraphQLString },
    bio: { type: GraphQLString },
  }),
});

module.exports = UserType;

