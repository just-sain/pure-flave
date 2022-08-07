import Link from 'next/link';
import cn from 'classnames';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.infoContainer}>
				<div className={cn('_container', styles.info)}>
					<ul className={styles.list}>
						<li className={styles.listItem}><Link href={'/terms-and-conditions'}><a>Terms & Conditions</a></Link></li>
						<li className={styles.listItem}><Link href={'/privacy-policy'}><a>Privacy Policy</a></Link></li>
						<li className={styles.listItem}><Link href={'/shipping-policy'}><a>Shipping Policy</a></Link></li>
						<li className={styles.listItem}><Link href={'refund-policy'}><a>Refund Policy</a></Link></li>
					</ul>
					<ul className={styles.list}>
						<li className={styles.listItem}><Link href={'/cookie-policy'}><a>Cookie Policy</a></Link></li>
						<li className={styles.listItem}><Link href={'/faq'}><a>FAQ</a></Link></li>
						<li className={styles.listItem}><Link href={'/payment-methods'}><a>Payment Methods</a></Link></li>
					</ul>
					<ul className={styles.list}>
						<li className={cn(styles.listItem, styles.title)}>Address:</li>
						<li className={styles.listItem}>500 Terry Francois St.</li>
						<li className={styles.listItem}>San Francisco, CA 94158</li>
					</ul>
					<ul className={styles.list}>
						<li className={cn(styles.listItem, styles.title)}>Contact:</li>
						<li className={styles.listItem}>info@mysite.com</li>
						<li className={styles.listItem}>123-456-7890</li>
					</ul>
				</div>
			</div>
			<div className={styles.createdBy}>
				© 2023 by Pure Flave. Proudly created by <Link href={'https://github.com/just-sain'}><a>just.sain</a></Link>
			</div>
		</footer>
	);
};