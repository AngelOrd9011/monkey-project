import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import { ErrorMessage } from './components/layouts/ErrorMessage';

const authenticated = false;

const router = createBrowserRouter([
	{
		path: '*',
		element: <ErrorMessage notFound />,
	},
	{
		path: '/',
		element: <Shop />,
	},
	{
		path: 'admin-console',
		element: authenticated ? <Admin /> : <h1>No Login</h1>,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
