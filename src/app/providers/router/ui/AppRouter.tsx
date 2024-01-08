import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'app/providers/router';

const AppRouter = () => {
	return (
		<Suspense fallback={'Loading page...'}>
			<Routes>
				{
					routes.map(
						({element, path}) => <Route key={path} path={path} element={element}></Route>
					)
				}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
