import { IButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';
import { ForwardedRef, forwardRef } from 'react';

export const Button = forwardRef(({ className, children, color, size, ...props }: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	return (
		<button className={cn(className, styles.button, {
			[styles.l]: size === 'l',
			[styles.m]: size === 'm',
			[styles.s]: size === 's',
			[styles.primary]: color === 'primary',
			[styles.black]: color === 'black',
			[styles.bg]: color === 'bg'
		})} {...props} ref={ref}>
			{children}
		</button>
	);
});

