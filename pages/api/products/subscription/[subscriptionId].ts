// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// interface
import { IProduct } from '../../../../interface';
// data
import { subscriptionProducts } from '../../../../data';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct | string>) {
	const { subscriptionId } = req.query;
	const subscription = subscriptionProducts.find(p => p.id === Number(subscriptionId as string));
	if (subscription) {
		res.status(200).json(subscription);
	} else {
		res.status(400).json('Bad request');
	}
}
