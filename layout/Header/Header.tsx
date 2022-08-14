import { useState } from 'react';
import { IHeaderProps } from './Header.props';
// components
import Link from 'next/link';
import { Alert, Logo } from '../../components/additional';
import CartIcon from './icons/cart.svg';
import UserIcon from './icons/user.svg';
import DarkModeIcon from './icons/dark.svg';
import LightModeIcon from './icons/light.svg';
// statement
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectThemeMode } from '../../store/slice/appSlice';
// styles
import cn from 'classnames';
import styles from './Header.module.scss';

export const Header = ({ className, alertMessage, ...props }: IHeaderProps) => {
	const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
	const themeMode = useAppSelector(selectThemeMode);
	const { setThemeMode } = useActions();

	return (
		<>
			<header className={cn(className, styles.header)} {...props}>
				{alertMessage && <div className={styles.alert}>{alertMessage}</div>}
				<nav className={styles.navBlock}>
					<Logo title='user account' />
					<ul className={styles.nav}>
						<li className={styles.navItem}>
							<Link href={'/shop'}>
								<a>Shop</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href={'/shop/subscription'}>
								<a>Subscription</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href={'/about-us'}>
								<a>About us</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href={'/contact'}>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
					<div className={styles.userBlock}>
						<div className={styles.themeMode} title='theme mode' onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
							{themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
						</div>
						<div className={styles.logIn} title='user account' onClick={() => setIsOpenAlert(true)}>
							<UserIcon /> Log In
						</div>
						<div className={styles.cart} title='cart' onClick={() => setIsOpenAlert(true)}>
							<CartIcon />
						</div>
					</div>
				</nav>
			</header>
			{isOpenAlert && (
				<Alert color='red' onClose={() => setIsOpenAlert(false)} position='center'>
					Demo Mode.
				</Alert>
			)}
		</>
	);
};
