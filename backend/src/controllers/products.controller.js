import errorHandler from './error.controller.js';
import checkIsLoggedIn from '../middleware/checkIsLoggedIn.js';
import Product from '../models/Product.js';

const getProducts = async (_, { id }) => {
	try {
		if (id) {
			let product = await Product.findById(id);
			return product;
		}
		let products = await Product.find();
		return products;
	} catch (error) {
		errorHandler(error);
	}
};

const addProduct = async (_, { product }, { req, authUser }) => {
	try {
		const role = await checkIsLoggedIn(req, authUser);
		if (role === 'admin') {
			const { name, description, category, price, images } = product;
			const newProduct = new Product({ name, description, category, price, images });
			await newProduct.save();
			return newProduct;
		} else {
			let error = { name: 'InvalidRole' };
			errorHandler(error);
		}
	} catch (error) {
		errorHandler(error);
	}
};

const updateProduct = async (_, { id, product }, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);
		const { name, description, category, price, images } = product;
		const newProduct = await Product.findByIdAndUpdate(
			id,
			{
				$set: {
					name,
					description,
					category,
					price,
					images,
				},
			},
			{
				new: true,
			}
		);
		return newProduct;
	} catch (error) {
		errorHandler(error);
	}
};

const deleteProduct = async (_, { id }, { req, authUser }) => {
	try {
		await checkIsLoggedIn(req, authUser);
		await Product.findByIdAndDelete(id);
		return 'Product Deleted';
	} catch (error) {
		errorHandler(error);
	}
};

const productsController = { getProducts, addProduct, updateProduct, deleteProduct };

export default productsController;
