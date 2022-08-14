import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../interface/interfaces';

export interface IProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProduct;
}
