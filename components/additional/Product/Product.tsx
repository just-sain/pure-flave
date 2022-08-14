import { ForwardedRef, forwardRef } from 'react';
import { IProductProps } from './Product.props';
import Image from 'next/image';
// styles
import cn from 'classnames';
import styles from './Product.module.scss';

export const Product = forwardRef(({ className, product, ...props }: IProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.product)} ref={ref} {...props}>
			<div className={styles.poster}>
				{/* <img src={product.img} alt='product image' /> */}
				<Image src={product.img} layout='responsive' width={'100%'} height={'135%'} objectFit='cover' />
			</div>
			<div className={styles.name}>{product.name}</div>
			<div className={styles.price}>$ {parseFloat(String(product.price)).toFixed(2)}</div>
			{product.isNew && <div className={styles.new}>New</div>}
		</div>
	);
});