import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers/resolvers.js';
import typeDefs from './schema/schema.js';
import connectDB from './utils/connectDB.js';
import authUser from './middleware/authUser.js';
import validateEnv from './utils/validateEnv.js';
import cors from 'cors';

dotenv.config();
validateEnv();

const corsOptions = {
	origin: ['http://localhost:3000', 'http://localhost'],
};

const app = express();
connectDB();

app.use(cors(corsOptions));

app.get('/', (_req, res) => {
	res.send('GraphQL API is alive!');
});

const init = async () => {
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: async ({ req, res }) => ({ req, res, authUser }),
	});

	await apolloServer.start();
	apolloServer.applyMiddleware({ app, path: '/api' });

	app.use((_req, res, next) => {
		res.status(404).send('not found');
	});

	app.listen(process.env.PORT || 4000, () => console.log('Server on port', process.env.PORT || 4000));
};

init();
