import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../interface';

export interface IProductDetailProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProduct;
}
