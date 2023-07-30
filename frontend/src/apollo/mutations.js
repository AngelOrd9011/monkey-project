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

export const MUTATION_UPDATE_USER = gql`
	mutation ($email: String!, $input: UserInput!) {
		updateUser(email: $email, input: $input) {
			status
			user {
				name
				email
				photo
				role
			}
			uploaded {
				Location
			}
		}
	}
`;

export const MUTATION_VERIFY_USER = gql`
	mutation ($token: String!) {
		verifyUser(token: $token) {
			status
		}
	}
`;
