import type { GetStaticProps, NextPage } from 'next';
import { withLayout } from '../../../layout/Layout';
// interface
import { IProduct } from '../../../interface/interfaces';
// components
import Head from 'next/head';
import { Products } from '../../../components/page';
import axios from 'axios';

const Subscription: NextPage<IShopProps> = ({ products }) => {
	return (
		<>
			<Head>
				<title>shop | pure flave | by just.sain</title>
			</Head>
			<Products products={products} />
		</>
	);
};

export default withLayout(Subscription);

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
	const { data } = await axios.get<IProduct[]>('http://localhost:3000/api/products/subscription');

	return {
		props: {
			products: data
		}
	};
};

interface IShopProps extends Record<string, unknown> {
	products: IProduct[];
}
