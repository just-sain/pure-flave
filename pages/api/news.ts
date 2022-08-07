import type { NextApiRequest, NextApiResponse } from 'next';
import { INewsData, newsData } from '../../data/news';

export default function handler(req: NextApiRequest, res: NextApiResponse<INewsData>) {
	res.status(200).json(newsData);
}
