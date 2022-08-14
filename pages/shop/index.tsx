import type { GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../layout/Layout';
// interface
import { IProduct } from '../../interface/interfaces';
// components
import Head from 'next/head';
import { Products } from '../../components/page';
import axios from 'axios';

const Shop: NextPage<IShopProps> = ({ products }) => {
	return (
		<>
			<Head>
				<title>shop | pure flave | by just.sain</title>
			</Head>
			<Products products={products} />
		</>
	);
};

export default withLayout(Shop);

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
	const { data } = await axios.get('http://localhost:3000/api/products');

	return {
		props: {
			products: data
		}
	};
};

interface IShopProps extends Record<string, unknown> {
	products: IProduct[]
}
