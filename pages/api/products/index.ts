import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../../interface/interfaces';
import { products } from '../../../data';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
	res.status(200).json(products);
}
