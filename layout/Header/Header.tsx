// components
import { Logo } from '../../components/additional';
import CartIcon from './icons/cart.svg';
import UserIcon from './icons/user.svg';
import DarkModeIcon from './icons/dark.svg';
import LightModeIcon from './icons/light.svg';
// statement
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectThemeMode } from '../../store/slice/appSlice';
// styles
import cn from 'classnames';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useActions } from '../../hooks/useActions';

export const Header = ({ alertMessage }: IHeaderProps) => {
	const themeMode = useAppSelector(selectThemeMode);
	const { setThemeMode } = useActions();

	return (
		<header className={styles.header}>
			{alertMessage && <div className={styles.alert}>
				{alertMessage}
			</div>}
			<div className={styles.navContainer}>
				<nav className={cn(styles.navBlock, '_container')}>
					<Logo title='user account' />
					<ul className={styles.nav}>
						<li className={styles.navItem}><Link href={'/shop'}><a>Shop</a></Link></li>
						<li className={styles.navItem}><Link href={'/subscribe'}><a>Subscription</a></Link></li>
						<li className={styles.navItem}><Link href={'/about-us'}><a>About us</a></Link></li>
						<li className={styles.navItem}><Link href={'/contact'}><a>Contact</a></Link></li>
					</ul>
					<div className={styles.userBlock}>
						<div className={styles.themeMode} title='theme mode' onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>{themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</div>
						<div className={styles.logIn} title='user account'><UserIcon /></div>
						<div className={styles.cart} title='cart'><CartIcon /></div>
					</div>
				</nav>
			</div>
		</header>
	);
};

interface IHeaderProps {
	alertMessage: string
}