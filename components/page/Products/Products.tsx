import { IShopProps } from './Products.props';
// components
import { Paragraph, Product, Title } from '../../additional';
// styles
import cn from 'classnames';
import styles from './Products.module.scss';
import { useRouter } from 'next/router';

export const Products = ({ className, products }: IShopProps) => {
	const router = useRouter();
	const goToProductPage = (id: number) => {
		router.push(`/${router.route}/${id}`);
	};

	return (
		<section className={cn(className, styles.shop)}>
			<Title color='primary' tag='h2' className={styles.title}>
				Shop Flaves
			</Title>
			<Paragraph size='m' className={styles.rareWord}>
				Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.
			</Paragraph>
			<div className={styles.products}>
				{products.map(p => (
					<Product onClick={() => goToProductPage(p.id)} key={p.id} className={styles.product} product={p} />
				))}
			</div>
		</section>
	);
};
