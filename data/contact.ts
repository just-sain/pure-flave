import { IAddressData, IContactData, IEnquiriesData, IPartnershipsData } from '../interface';

export const enquiriesData: IEnquiriesData = {
	email: 'info@mysite.com'
};

export const partnershipsData: IPartnershipsData = {
	email: 'info@mysite.com'
};

export const addressData: IAddressData = {
	street: '500 Terry Francois St.',
	city: 'San Francisco',
	house: 'CA 94158'
};

export const contactData: IContactData = {
	address: addressData,
	enquiries: enquiriesData,
	partnerships: partnershipsData
};
