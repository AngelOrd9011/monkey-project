import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import { ErrorMessage } from './components/layouts/ErrorMessage';
import Login from './components/login/Login';
import useAuthenticate from './hooks/useAuthenticate';
import { Loading } from './components/layouts/Loading';

const App = () => {
	const { authenticated } = useAuthenticate();

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
			path: '/:token',
			element: <Loading verifying />,
		},
		{
			path: 'admin-console',
			element: authenticated ? <Admin /> : <Login />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
