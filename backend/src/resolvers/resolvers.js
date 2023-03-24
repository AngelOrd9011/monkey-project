const { GraphQLDateTime } = require('graphql-iso-date');
const { productsResolvers } = require('./products.resolver');
const { usersResolvers } = require('./user.resolver');

const Date = { DateTime: GraphQLDateTime };

const resolvers = [Date, productsResolvers, usersResolvers];

module.exports = { resolvers };
