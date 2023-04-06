import datePkg from 'graphql-iso-date';
const { GraphQLDateTime } = datePkg;
import productsResolvers from './products.resolver.js';
import usersResolvers from './user.resolver.js';
import { GraphQLUpload } from 'graphql-upload';

const Date = { DateTime: GraphQLDateTime };

const Upload = { Upload: GraphQLUpload };

const resolvers = [Date, Upload, productsResolvers, usersResolvers];

export default resolvers;
