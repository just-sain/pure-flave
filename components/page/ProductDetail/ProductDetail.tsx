import { FormEvent, useState } from 'react';
import { IProductDetailProps } from './ProductDetail.props';
// components
import { Alert, Button, Divider, Info, Input, Title } from '../../additional';
// styles
import cn from 'classnames';
import styles from './ProductDetail.module.scss';
import Image from 'next/image';

export const ProductDetail = ({ className, product, ...props }: IProductDetailProps) => {
	const [quantity, setQuantity] = useState<number>(1);
	const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);

	const onQuantityChange = (e: FormEvent<HTMLInputElement>) => {
		setQuantity(Number(e.currentTarget.value));
	};

	const onAddToCart = () => {
		setIsOpenAlert(true);
	};

	return (
		<section className={cn(className, styles.product)} {...props}>
			<div className={styles.leftSide}>
				<Image src={product.img} alt={`Product photo of ${product.name}`} layout='responsive' width='100%' height='100%' objectFit='contain' />
			</div>
			<div className={styles.rightSide}>
				<div className={styles.description}>
					<Title tag='h2' color='primary'>
						{product.name}
					</Title>
					<span className={styles.sku}>SKU: {product.id}</span>
					<span className={styles.price}>{`$${product.price}.00`}</span>
					<Input onChange={onQuantityChange} label='Quantity' min={1} max={50} type='number' value={quantity} />
					<Button onClick={onAddToCart} style={{ marginTop: '3rem' }} fullSize color='primary' size='m'>
						Add to Cart
					</Button>
				</div>
				<div className={styles.info}>
					<Info infoTitle='product info' initialIsOpen>
						I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning
						instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
					</Info>
					<Divider color='primary' className={styles.divider} />
					<Info infoTitle='product info'>
						I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their
						purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can
						buy with confidence.
					</Info>
					<Divider color='primary' className={styles.divider} />
					<Info infoTitle='product info'>
						I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing
						straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy
						from you with confidence.
					</Info>
				</div>
			</div>
			{isOpenAlert && (
				<Alert onClose={() => setIsOpenAlert(false)} color='primary' position='center'>
					{quantity} {quantity > 1 ? 'products' : 'product'} ({product.name}) {quantity > 1 ? 'were' : 'was'} added to your cart
				</Alert>
			)}
		</section>
	);
};
