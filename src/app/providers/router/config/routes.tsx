import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';

export type TPage = RouteProps & {
	name: string;
	path: string;
}

export const routes: Array<TPage> = [
	{
		name: 'Home',
		path: '/',
		element: <HomePage />
	},
	{
		name: 'About',
		path: '/about',
		element: <AboutPage />
	}
];
