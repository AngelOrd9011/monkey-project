import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ShopWrapper from './ShopWrapper';
import AdminWrapper from './AdminWrapper';
import { ErrorMessage } from './components/layouts/ErrorMessage';
import Login from './components/login/Login';
import useAuthenticate from './hooks/useAuthenticate';
import { VerifyingUser } from './components/layouts/VerifyingUser';

const App = () => {
	const { authenticated } = useAuthenticate();

	const router = createBrowserRouter([
		{
			path: '*',
			element: <ErrorMessage notFound />,
		},
		{
			path: '/',
			element: <ShopWrapper />,
		},
		{
			path: '/:token',
			element: <VerifyingUser />,
		},
		{
			path: 'admin-console',
			element: authenticated ? <AdminWrapper /> : <Login />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
