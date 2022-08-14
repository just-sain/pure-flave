// interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../../../interface/interfaces';
// data
import { subscriptionProducts } from '../../../../data/subscriptionProducts';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
	res.status(200).json(subscriptionProducts);
}
