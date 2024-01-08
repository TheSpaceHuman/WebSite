import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'app/providers/router/config/routes';

export interface MenuProps {
	className?: string;
}

const Menu: FC<MenuProps> = (props) => {
	const {className} = props;
	return (
		<nav className={className}>
			{
				routes.map(({ path, name }) => <Link to={path} key={name}>{name}</Link>)
			}
		</nav>
	);
};

export default Menu;
