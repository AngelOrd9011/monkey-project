import { gql } from '@apollo/client';

//////////////Usuario///////////////////

export const MUTATION_LOGIN = gql`
	mutation ($input: LoginInput!) {
		loginUser(input: $input) {
			access_token
			status
		}
	}
`;

export const MUTATION_SINGUP = gql`
	mutation ($input: SignUpInput!) {
		signupUser(input: $input) {
			status
		}
	}
`;
