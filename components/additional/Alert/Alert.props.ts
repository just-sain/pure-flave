import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IAlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	position: 'center' | 'right';
	color: 'red' | 'black' | 'bg' | 'primary';
	onClose: () => void;
}
