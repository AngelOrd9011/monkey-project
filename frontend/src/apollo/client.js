import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

// const client = new ApolloClient({
// 	uri: process.env.REACT_APP_GRAPHQL_URI,
// 	cache: new InMemoryCache(),
// });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createUploadLink({
		uri: process.env.REACT_APP_GRAPHQL_URI,
	}),
});

export default client;
