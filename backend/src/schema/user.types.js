import { gql } from 'apollo-server-express';

const userTypeDefs = gql`
	############################## Queries ##############################

	extend type Query {
		# Auth
		refreshAccessToken: TokenResponse!
		logoutUser: Boolean!

		# User
		getMe: UserResponse!
	}

	############################## Mutations ##############################

	extend type Mutation {
		# Auth
		loginUser(input: LoginInput!): TokenResponse!
		signupUser(input: SignUpInput!): UserResponse!
		verifyUser(token: String!): UserResponse!
		#User
		updateUser(email: String!, input: UserInput!): UserResponse!
	}

	############################## Inputs ##############################

	input SignUpInput {
		name: String!
		email: String!
		password: String!
		passwordConfirm: String!
	}

	input UserInput {
		name: String
		email: String
		photo: String
		upload: UploadInput
	}

	input LoginInput {
		email: String!
		password: String!
	}

	############################## Types ##############################

	type TokenResponse {
		status: String!
		access_token: String!
	}

	type UserResponse {
		status: String!
		user: UserData
		uploaded: UploadResponse
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

export default userTypeDefs;
