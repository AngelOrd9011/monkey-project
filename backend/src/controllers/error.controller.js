import { ApolloError } from 'apollo-server-core';

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
	if (err.name === 'InvalidRole') throw new ApolloError('El usuario no esta autorizado para realizar esta acción', 'GRAPHQL_VALIDATION_FAILED');
	throw err;
};

export default errorHandler;
