export interface IEnquiriesData {
	email: string;
}

export interface IPartnershipsData {
	email: string;
}

export interface IAddressData {
	city: string;
	street: string;
	house: string;
}

export interface IContactData {
	enquiries: IEnquiriesData;
	partnerships: IPartnershipsData;
	address: IAddressData;
}
