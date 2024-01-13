import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui';
import { ETheme } from 'app/providers/ThemeProvider/types/theme.interface';
import LightSvg from 'shared/assets/icons/sun.svg';
import DarkSvg from 'shared/assets/icons/moon.svg';
import { EButtonType } from 'shared/ui/Button/Button';

const ThemeSwitcher = () => {
	const {theme, toggleTheme} = useTheme();
	console.debug(theme);

	return (
		<Button type={EButtonType.Icon} onClick={toggleTheme}>
			{ theme === ETheme.LIGHT ? <LightSvg width={30} height={30} /> : <DarkSvg width={30} height={30} /> }
		</Button>
	);
};

export default ThemeSwitcher;
