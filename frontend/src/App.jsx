import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global-app.css';
import ShopWrapper from './ShopWrapper';
import AdminWrapper from './AdminWrapper';
import { ErrorMessage } from './components/layouts/ErrorMessage';
import Login from './components/login/Login';
import useAuthenticate from './hooks/useAuthenticate';
import { VerifyingUser } from './components/layouts/VerifyingUser';
import { REFRESH_TOKEN_INTERVAL } from './app/constants';

const App = () => {
	const { authenticated, refreshToken } = useAuthenticate();

	useEffect(() => {
		const verifyToken = setInterval(() => {
			if (authenticated) refreshToken();
		}, REFRESH_TOKEN_INTERVAL);
		return () => clearInterval(verifyToken);
	}, [authenticated, refreshToken]);

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
