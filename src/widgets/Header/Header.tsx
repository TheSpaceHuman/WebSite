import React, { FC } from 'react';
import style from './Header.module.scss';
import { Menu } from 'widgets';
import { ThemeSwitcher } from 'features';

const Header: FC = () => {
	return (
		<header className={style.header}>
			<Menu className={style.header__menu} />
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
