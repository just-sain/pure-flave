import axios from 'axios';
import { withLayout } from '../../layout/Layout';
// interfaces
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IProduct } from '../../interface';
// components
import { ProductDetail } from '../../components/page';
import Head from 'next/head';

const Product: NextPage<IProductDetailProps> = ({ product }) => {
	return (
		<>
			<Head>
				<title>Product {product.name} | Pure flave | by just.sain</title>
			</Head>
			<ProductDetail product={product} />
		</>
	);
};

export default withLayout(Product);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await axios.get<IProduct[]>('http://localhost:3000/api/products');
	const paths = data.map(p => {
		return {
			params: {
				productId: `${p.id}`
			}
		};
	});

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<IProductDetailProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	const { data: products } = await axios.get<IProduct[]>('http://localhost:3000/api/products');

	if (!params) return { notFound: true };
	const productId = products.find(p => p.id === Number(params.productId as string))?.id;
	if (!productId) return { notFound: true };

	try {
		const { data } = await axios.get<IProduct>(`http://localhost:3000/api/products/${productId}`);

		return {
			props: {
				product: data
			}
		};
	} catch {
		return { notFound: true };
	}
};

interface IProductDetailProps extends Record<string, unknown> {
	product: IProduct;
}
