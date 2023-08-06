import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import resolvers from './resolvers/resolvers.js';
import typeDefs from './schema/schema.js';
import connectDB from './config/database/connectDB.js';
import authUser from './middleware/authUser.js';
import validateEnv from './utils/validateEnv.js';
import { transporter } from './config/smtp/SMTPtransporter.js';

dotenv.config();
validateEnv();

const corsOptions = {
	origin: [process.env.FRONTEND_URL, 'https://studio.apollographql.com'],
	credentials: true,
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

	app.use(graphqlUploadExpress());

	apolloServer.applyMiddleware({ app, path: '/v1/api', cors: corsOptions });

	app.get('/', (_req, res) => {
		res.send('GraphQL API is alive!');
	});

	app.use((_req, res, next) => {
		res.status(404).send('not found');
	});

	app.listen(process.env.PORT, () => console.log('Server on port', process.env.PORT));

	connectDB();

	transporter.verify(function (error) {
		if (error) {
			console.log(error);
		} else {
			console.log('SMTP transporter is ready: ' + process.env.SMTP_USER);
		}
	});
};

init();
