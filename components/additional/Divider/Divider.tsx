import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Divider.module.scss';
import { IDividerProps } from './Divider.props';

export const Divider = forwardRef(({ className, color = 'black', ...props }: IDividerProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div
			ref={ref}
			className={cn(className, styles.divider, {
				[styles.primary]: color === 'primary',
				[styles.black]: color === 'black',
				[styles.bg]: color === 'bg'
			})}
			{...props}></div>
	);
});