require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./resolvers/resolvers');
const { typeDefs } = require('./schema/schema');
const { connectDB } = require('./utils/connectDB');
const { authUser } = require('./middleware/authUser');
const { validateEnv } = require('./utils/validateEnv');

validateEnv();

const app = express();
connectDB();

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
