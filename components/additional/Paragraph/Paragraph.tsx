import { IParagraphProps } from './Paragraph.props';
// styles
import cn from 'classnames';
import styles from './Paragraph.module.scss';

export const Paragraph = ({ className, children, size, color = 'black', ...props }: IParagraphProps): JSX.Element => {
	return (
		<p className={cn(className, styles.paragraph, {
			[styles.l]: size === 'l',
			[styles.m]: size === 'm',
			[styles.s]: size === 's',
			[styles.black]: color === 'black',
			[styles.primary]: color === 'primary'
		})} {...props}>
			{children}
		</p>
	);
};