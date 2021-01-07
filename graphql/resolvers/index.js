const postsResolvers = require("./posts");
const usesResolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usesResolvers.Mutation,
    ...postsResolvers.Mutation,
  },
};
