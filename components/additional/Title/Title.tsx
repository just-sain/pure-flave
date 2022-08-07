import styles from './Title.module.scss';
import cn from 'classnames';
import { ITitleProps } from './Title.props';

export const Title = ({ className, children, tag, color = 'black', ...props }: ITitleProps) => {
	if (tag === 'h1') {
		return <h1 className={cn(className, styles.title, styles._h1, {
			[styles.black]: color === 'black',
			[styles.primary]: color === 'primary'
		})} {...props}>{children}</h1>;
	} else if (tag === 'h2') {
		return <h2 className={cn(className, styles.title, styles._h2, {
			[styles.black]: color === 'black',
			[styles.primary]: color === 'primary'
		})} {...props}>{children}</h2>;
	} else {
		console.warn('you don\' select tag type!!!');
		return <></>;
	}
};