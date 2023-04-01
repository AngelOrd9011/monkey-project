import productsController from '../controllers/products.controller.js';

const productsResolvers = {
	Query: {
		getAllProducts: productsController.getProducts,
		getProduct: productsController.getProducts,
	},
	Mutation: {
		addProduct: productsController.addProduct,

		deleteProduct: productsController.deleteProduct,

		updateProduct: productsController.updateProduct,
	},
};

export default productsResolvers;
