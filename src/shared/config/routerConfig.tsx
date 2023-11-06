import { RouteProps } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

export enum EPages {
	HOME = 'home',
	ABOUT = 'about'
}

export const routerConfig: Record<EPages, RouteProps> = {
	[EPages.HOME]: {
		path: '/',
		element: <HomePage />
	},
	[EPages.ABOUT]: {
		path: '/about',
		element: <AboutPage />
	}
}
