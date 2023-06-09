import { gql } from '@apollo/client';

/////////////////Usuario////////////////////

export const QUERY_USER_PROFILE = gql`
	{
		getMe {
			status
			user {
				name
				email
				photo
				role
			}
		}
	}
`;

export const QUERY_LOGOUT = gql`
	{
		logoutUser
	}
`;

export const QUERY_REFRESH_TOKEN = gql`
	{
		refreshAccessToken {
			access_token
		}
	}
`;

/////////////////Productos////////////////////

export const QUERY_GET_ALL_PRODUCTS = gql`
	query products {
		products: getAllProducts {
			id
			name
			description
			category
			price
			images {
				url
				alt
				primary
			}
			items {
				size
				stock
				color
			}
		}
	}
`;
