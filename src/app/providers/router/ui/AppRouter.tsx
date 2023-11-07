import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={'Loading...'}>
			<Routes>
				{
					Object.values(routerConfig).map(
						({element, path}) => <Route key={path} path={path} element={element}></Route>
					)
				}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
