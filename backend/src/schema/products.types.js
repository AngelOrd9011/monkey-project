const { gql } = require('apollo-server-express');

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
		primary: String
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
		images: String
		category: String
		price: Float
	}

	input ProductImageInput {
		primary: String
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
		getProduct(id: ID): Product
	}

	# Mutations
	extend type Mutation {
		addProduct(product: ProductInput): Product
		deleteProduct(id: ID): String
		updateProduct(id: ID, product: ProductInput): Product
	}
`;

module.exports = {
	productsTypeDefs,
};
