import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
	mutation ($input: LoginInput!) {
		loginUser(input: $input) {
			access_token
			status
		}
	}
`;
