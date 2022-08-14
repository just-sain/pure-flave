import Head from 'next/head';
import { Error } from '../components/page';
import { withLayout } from '../layout/Layout';

export const Error404 = () => (
	<>
		<Head>
			<title>404 Not Found | pure flave | by just.sain</title>
		</Head>
		<Error ErrorNumber={404}>Not Found</Error>
	</>
);

export default withLayout(Error404);