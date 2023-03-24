const { productsController } = require('../controllers/products.controller');

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

module.exports = {
	productsResolvers,
};
