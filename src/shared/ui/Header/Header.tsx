import React, {FC} from 'react';
import style from './Header.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {Link} from "react-router-dom";
import {Button} from "shared/ui";

const Header: FC = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <header className={style.header}>
            <nav className={style.header__menu}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </nav>
            <div>
                <Button onClick={toggleTheme}>Toggle theme: {theme}</Button>
            </div>
        </header>
    );
};

export default Header;
