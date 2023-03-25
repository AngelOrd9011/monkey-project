import { gql } from '@apollo/client';

/////////////////Usuario////////////////////

export const QUERY_LOGOUT = gql`
	{
		logoutUser
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
