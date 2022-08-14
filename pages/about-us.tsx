import axios from 'axios';
import { withLayout } from '../layout/Layout';
// interfaces
import type { GetStaticProps, NextPage } from 'next';
import { INewsData } from '../data/news';
// components
import Head from 'next/head';
import { News } from '../components/page';

const AboutUs: NextPage<IAboutUsProps> = ({ news }) => {
	return (
		<>
			<Head>
				<title>about us | pure flave | by just.sain</title>
			</Head>
			<News news={news} />
		</>
	);
};

export default withLayout(AboutUs);

export const getStaticProps: GetStaticProps<IAboutUsProps> = async () => {
	const { data } = await axios.get('http://localhost:3000/api/about-us');
	return {
		props: {
			news: data
		}
	};
};

interface IAboutUsProps extends Record<string, unknown> {
	news: INewsData
}