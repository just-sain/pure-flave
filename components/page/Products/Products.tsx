import { IProductsProps } from './Products.props';
// styles
import cn from 'classnames';
import styles from './Products.module.scss';

export const Products = ({ className, products }: IProductsProps) => {
	return (
		<div className={cn(className, styles.products)}>

		</div>
	);
};