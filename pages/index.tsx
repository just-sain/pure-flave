import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { withLayout } from '../layout/Layout';
// interfaces
import { INewsData } from '../data/news';
// components
import Head from 'next/head';
import { News } from '../components/page';

const Home: NextPage<IHomeProps> = ({ news }) => {
	return (
		<>
			<Head>
				<title>pure flave | by just.sain</title>
			</Head>
			<News news={news} />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
	const { data: newsData } = await axios.get('http://localhost:3000/api/news');
	return {
		props: {
			news: newsData
		}
	};
};

interface IHomeProps extends Record<string, unknown> {
	news: INewsData;
}
