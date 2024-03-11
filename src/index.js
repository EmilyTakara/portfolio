import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Home from './routes/home';
import './styles/reset.css';
import './styles/containers.css';
import Grid from './routes/grid';
import Image from './routes/image';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'desenhos',
				element: <Grid />,
			},
			{
				path: 'rascunhos',
				element: <Grid />,
			},
			{
				path: 'tatuagens',
				element: <Grid />,
			},
			{
				path: 'outros',
				element: <Grid />,
			},
			{
				path: 'imagem/:imagemID',
				element: <Image />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<RouterProvider router={router} />,
	// </React.StrictMode>,
);

