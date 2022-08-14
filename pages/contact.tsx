import axios from 'axios';
import { withLayout } from '../layout/Layout';
// interfaces
import { GetStaticProps, NextPage } from 'next';
import { IAddressData, IContactData, IEnquiriesData, IPartnershipsData } from '../interface';
// components
import Head from 'next/head';
import { Contact } from '../components/page';

const contact: NextPage<IContactProps> = ({ address, enquires, partnerships }) => {
	return (
		<>
			<Head>
				<title>contact | pure flave | by just.sain</title>
			</Head>
			<Contact address={address} enquires={enquires} partnerships={partnerships} />
		</>
	);
};

export default withLayout(contact);

export const getStaticProps: GetStaticProps<IContactProps> = async () => {
	const { data } = await axios.get<IContactData>('http://localhost:3000/api/contact');

	return {
		props: {
			address: data.address,
			enquires: data.enquiries,
			partnerships: data.partnerships
		}
	};
};

interface IContactProps extends Record<string, unknown> {
	address: IAddressData,
	enquires: IEnquiriesData,
	partnerships: IPartnershipsData
}