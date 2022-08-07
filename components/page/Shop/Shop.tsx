import { IShopProps } from './Shop.props';
// components
import { Paragraph, Title } from '../../additional';
// styles
import cn from 'classnames';
import styles from './Shop.module.scss';
import { Products } from '../Products/Products';

export const Shop = ({ className, products }: IShopProps) => {
	return (
		<section className={cn(className, styles.shop)}>
			<Title tag='h2'>Shop Flaves</Title>
			<Paragraph size='m'>Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.</Paragraph>
			<Products products={products} />
		</section>
	);
};

