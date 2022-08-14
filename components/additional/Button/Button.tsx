import { ForwardedRef, forwardRef } from 'react';
import Link from 'next/link';
import { IButtonProps } from './Button.props';
// styles
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = forwardRef(
	({ className, children, color, size, href, fullSize = false, ...props }: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
		if (href) {
			return (
				<Link href={href} passHref>
					<button
						className={cn(className, styles.button, {
							[styles.l]: size === 'l',
							[styles.m]: size === 'm',
							[styles.s]: size === 's',
							[styles.primary]: color === 'primary',
							[styles.black]: color === 'black',
							[styles.bg]: color === 'bg',
							[styles.red]: color === 'red',
							[styles.fullSize]: fullSize
						})}
						{...props}
						ref={ref}>
						<a>{children}</a>
					</button>
				</Link>
			);
		}
		return (
			<button
				className={cn(className, styles.button, {
					[styles.l]: size === 'l',
					[styles.m]: size === 'm',
					[styles.s]: size === 's',
					[styles.primary]: color === 'primary',
					[styles.black]: color === 'black',
					[styles.bg]: color === 'bg',
					[styles.red]: color === 'red',
					[styles.fullSize]: fullSize
				})}
				{...props}
				ref={ref}>
				{children}
			</button>
		);
	}
);
