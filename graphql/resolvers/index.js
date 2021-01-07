const postsResolvers = require("./posts");
const usesResolvers = require("./users");
const commentsResolvers = require("./comments");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usesResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};
