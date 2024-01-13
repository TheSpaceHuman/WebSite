import React, { FC, PropsWithChildren, SyntheticEvent } from 'react';
import style from './Button.module.scss';
import cn from 'classnames';


export enum EButtonType {
	Primary = 'primary',
	Secondary = 'secondary',
	Icon = 'icon'
}

export interface IButtonProps extends PropsWithChildren {
	onClick?: (e: SyntheticEvent) => void;
	type?: EButtonType;
}

const Button: FC<IButtonProps> = ({children, onClick, type = EButtonType.Primary}) => {
	function typeCls(): string {
		switch (type) {
			case EButtonType.Primary: return style['type--primary'];
			case EButtonType.Secondary: return style['type--secondary'];
			case EButtonType.Icon: return style['type--icon'];
			default: return '';
		}
	}

	return (
		<button onClick={onClick} className={cn(style.button, typeCls()) } role="button">
			{children}
		</button>
	);
};

export default Button;
