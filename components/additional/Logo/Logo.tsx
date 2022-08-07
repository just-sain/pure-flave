import { ILogoProps } from './Logo.props';
import Link from 'next/link';
import LogoIcon from './logo.svg';
// styles
import cn from 'classnames';
import styles from './Logo.module.scss';

export const Logo = ({ className, ...props }: ILogoProps) => {
	return (
		<div className={cn(className, styles.logo)} {...props}>
			<Link href={'/'}>
				<a>
					<LogoIcon className={styles.icon} />
					pure flave
				</a>
			</Link>
		</div>
	);
};