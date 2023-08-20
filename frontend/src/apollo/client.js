import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const connectToDevTools = process.env.NODE_ENV !== 'production';

const credentials = process.env.NODE_ENV !== 'production' ? 'include' : 'same-origin';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createUploadLink({
		uri: process.env.REACT_APP_GRAPHQL_URI,
		fetch,
		fetchOptions: {
			withCredentials: true,
			credentials,
		},
		connectToDevTools,
	}),
});

export default client;
