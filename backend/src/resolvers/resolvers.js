import datePkg from 'graphql-iso-date';
const { GraphQLDateTime } = datePkg;
import { GraphQLUpload } from 'graphql-upload';
import productsResolvers from './products.resolver.js';
import usersResolvers from './user.resolver.js';

const Date = { DateTime: GraphQLDateTime };

const Upload = { Upload: GraphQLUpload };

const resolvers = [Date, Upload, productsResolvers, usersResolvers];

export default resolvers;
