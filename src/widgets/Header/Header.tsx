import React, { FC } from 'react';
import style from './Header.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui';
import { Menu } from 'widgets';

const Header: FC = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<header className={style.header}>
			<Menu className={style.header__menu} />
			<div>
				<Button onClick={toggleTheme}>Toggle theme: {theme}</Button>
			</div>
		</header>
	);
};

export default Header;
