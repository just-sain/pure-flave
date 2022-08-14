import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: ReactNode;
	tag: 'h1' | 'h2' | 'h3' | 'h4';
	color?: 'primary' | 'black';
}
