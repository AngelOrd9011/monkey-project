import { gql } from 'apollo-server-express';

const productsTypeDefs = gql`
	# Types
	type Product {
		id: ID
		name: String
		description: String
		category: String
		price: Float
		images: [ProductImage]
		items: [ProductItem]
	}

	type ProductImage {
		primary: Boolean
		url: String
		alt: String
	}

	type ProductItem {
		id: ID
		stock: Int
		color: String
		size: String
	}

	# Inputs
	input ProductInput {
		name: String
		description: String
		images: [ProductImageInput]
		category: String
		price: Float
	}

	input ProductImageInput {
		primary: Boolean
		url: String
		alt: String
	}

	input ProductItemInput {
		stock: Int
		color: String
		size: String
	}

	# Queries
	extend type Query {
		getAllProducts: [Product]
		getProductsByCategory(category: String!): [Product]
		getProduct(id: ID!): Product
		getNewProducts(newProducts: Boolean!): [Product]
	}

	# Mutations
	extend type Mutation {
		addProduct(product: ProductInput): Product
		deleteProduct(id: ID): String
		updateProduct(id: ID, product: ProductInput): Product
	}
`;

export default productsTypeDefs;
