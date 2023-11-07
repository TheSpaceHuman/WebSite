import React, { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { ETheme } from '../types/theme.interface';

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const defaultTheme: ETheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme ?? ETheme.LIGHT;
	const [theme, setTheme] = useState<ETheme>(defaultTheme);

	const props = useMemo(() => ({theme, setTheme}), [theme]);
	return (
		<ThemeContext.Provider value={props}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
