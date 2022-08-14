import type { NextApiRequest, NextApiResponse } from 'next';
import { aboutUsData } from '../../data';
import { INewsData } from '../../data/news';

export default function handler(req: NextApiRequest, res: NextApiResponse<INewsData>) {
	res.status(200).json(aboutUsData);
}
