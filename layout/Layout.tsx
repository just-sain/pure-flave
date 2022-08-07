import Head from 'next/head';
import { FunctionComponent, ReactNode, useEffect } from 'react';
// state
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';
import { ThemeModeType } from '../interface/interfaces';
import { selectThemeMode } from '../store/slice/appSlice';
// components
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
// styles
import cn from 'classnames';
import styles from './Layout.module.scss';

const Layout = ({ children }: ILayoutProps) => {
	const themeMode = useAppSelector(selectThemeMode);
	const { setThemeMode } = useActions();

	useEffect(() => {
		const storageThemeMode = localStorage.getItem('themeMode') as ThemeModeType | null;
		if (storageThemeMode === 'dark') setThemeMode('dark');
		else setThemeMode('light');
	}, []);

	return (
		<>
			<Head>
				<link key={'themeMode'} rel="stylesheet" href={themeMode === 'dark' ? '/mode/dark.css' : '../mode/light.css'} />
			</Head>
			<div className={styles.wrapper}>
				<Header alertMessage={'FREE SHIPPING ON ORDERS OVER $75'} />
				<div>
					<main className={cn(styles.main, '_container')}>
						{children}
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): ((props: T) => JSX.Element) => {
	return (props: T): JSX.Element => (
		<Layout>
			<Component {...props} />
		</Layout>
	);
};

export interface ILayoutProps {
	children: ReactNode;
}