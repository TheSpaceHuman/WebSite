import React from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Header } from 'widgets';
import { AppRouter } from 'app/providers/router';

const App = () => {
	const {theme} = useTheme();
	return (
		<div className="app" data-theme={theme}>
			<Header />
			<AppRouter />
		</div>
	);
};

export default App;
