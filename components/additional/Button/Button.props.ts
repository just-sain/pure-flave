import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	color: 'primary' | 'black' | 'bg' | 'red';
	size: 'l' | 'm' | 's';
	href?: string;
	fullSize?: boolean;
}
