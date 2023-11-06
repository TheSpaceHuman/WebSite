import React from 'react';
import './styles/index.scss';
import cn from 'classnames';
import { useTheme } from "app/providers/ThemeProvider";
import { Header } from "shared/ui";
import AppRouter from "app/providers/router/ui/AppRouter";

const App = () => {
	const {theme} = useTheme();
	return (
		<div className={cn('app', `theme--${theme}`)}>
			<Header />
			<AppRouter />
		</div>
	);
};

export default App;
