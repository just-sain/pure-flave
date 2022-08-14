import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'primary' | 'black' | 'bg';
}
