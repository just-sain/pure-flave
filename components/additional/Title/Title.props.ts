import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: ReactNode;
	tag: 'h1' | 'h2';
	color?: 'primary' | 'black';
}
