import React, { FC, PropsWithChildren, SyntheticEvent } from 'react';
import style from './Button.module.scss';

export interface IButtonProps extends PropsWithChildren {
	onClick?: (e: SyntheticEvent) => void;
}

const Button: FC<IButtonProps> = ({children, onClick}) => {
	return (
		<button onClick={onClick} className={style.button} role="button">
			{children}
		</button>
	);
};

export default Button;
