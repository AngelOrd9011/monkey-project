import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const connectToDevTools = process.env.NODE_ENV !== 'production';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createUploadLink({
		uri: process.env.REACT_APP_GRAPHQL_URI,
		fetch,
		fetchOptions: {
			withCredentials: true,
			credentials: 'include',
		},
		connectToDevTools,
	}),
});

export default client;
