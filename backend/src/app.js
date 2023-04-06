import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import resolvers from './resolvers/resolvers.js';
import typeDefs from './schema/schema.js';
import connectDB from './utils/connectDB.js';
import authUser from './middleware/authUser.js';
import validateEnv from './utils/validateEnv.js';
import cors from 'cors';

dotenv.config();
validateEnv();

const corsOptions = {
	origin: ['http://localhost:3000', 'http://localhost', 'https://studio.apollographql.com'],
};

const init = async () => {
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: async ({ req, res }) => ({ req, res, authUser }),
		uploads: false,
		persistedQueries: false,
		cache: new InMemoryLRUCache({
			maxSize: Math.pow(2, 20) * 100,
			ttl: 300_000,
		}),
	});

	await apolloServer.start();

	const app = express();

	app.use(cors(corsOptions));

	app.use(graphqlUploadExpress());

	connectDB();

	apolloServer.applyMiddleware({ app, path: '/api' });

	app.get('/', (_req, res) => {
		res.send('GraphQL API is alive!');
	});

	app.use((_req, res, next) => {
		res.status(404).send('not found');
	});

	app.listen(process.env.PORT, () => console.log('Server on port', process.env.PORT));
};

init();
