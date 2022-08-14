import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IAddressData, IEnquiriesData, IPartnershipsData } from '../../../interface';

export interface IContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	address: IAddressData;
	enquires: IEnquiriesData;
	partnerships: IPartnershipsData;
}
