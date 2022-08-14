// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// interface
import { IProduct } from '../../../interface';
// data
import { products } from '../../../data';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct | string>) {
	const { productId } = req.query;
	const product = products.find(p => p.id === parseInt(productId as string));
	if (product) {
		res.status(200).json(product);
	} else {
		res.status(400).json('Bad request');
	}
}
