const { ApolloError } = require('apollo-server-core');

const handleCastError = (error) => {
	const message = `${error.path}: ${error.value}`;
	throw new ApolloError(message, 'GRAPHQL_VALIDATION_FAILED');
};

const handleValidationError = (error) => {
	const message = Object.values(error.errors).map((el) => el.message);
	throw new ApolloError(`${message.join(', ')}`, 'GRAPHQL_VALIDATION_FAILED');
};

const errorHandler = (err) => {
	if (err.name === 'CastError') handleCastError(err);
	if (err.name === 'ValidationError') handleValidationError(err);
	if (err.name === 'InvalidRole') throw new ApolloError('Invalid role', 'GRAPHQL_VALIDATION_FAILED');
	throw err;
};

module.exports = { errorHandler };
