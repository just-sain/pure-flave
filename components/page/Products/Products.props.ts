import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../interface/interfaces';

export interface IShopProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products: IProduct[];
}
