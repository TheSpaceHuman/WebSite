import React, {FC, ReactNode} from 'react';
import style from './Button.module.scss';
2
const Button: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <button className={style.button}>
            {children}
        </button>
    );
};

export default Button;
