import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../interface/interfaces';

export interface IProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products: IProduct[];
}
