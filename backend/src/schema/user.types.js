const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
	extend type Query {
		# Auth
		refreshAccessToken: TokenResponse!
		logoutUser: Boolean!

		# User
		getMe: UserResponse!
	}

	extend type Mutation {
		# Auth
		loginUser(input: LoginInput!): TokenResponse!
		signupUser(input: SignUpInput!): UserResponse!
	}

	input SignUpInput {
		name: String!
		email: String!
		password: String!
		passwordConfirm: String!
		photo: String
	}

	input LoginInput {
		email: String!
		password: String!
	}

	type TokenResponse {
		status: String!
		access_token: String!
	}

	type UserResponse {
		status: String!
		user: UserData!
	}

	type UserData {
		id: ID!
		name: String!
		email: String!
		photo: String!
		role: String!
		createdAt: DateTime
		updatedAt: DateTime
	}
`;

module.exports = {
	userTypeDefs,
};
