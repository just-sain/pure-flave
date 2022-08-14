import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IInfoProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	infoTitle: string;
	initialIsOpen?: boolean;
}
