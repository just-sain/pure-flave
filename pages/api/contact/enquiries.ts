import type { NextApiRequest, NextApiResponse } from 'next';
import { enquiriesData } from '../../../data';
import { IEnquiriesData } from '../../../interface';

export default function handler(req: NextApiRequest, res: NextApiResponse<IEnquiriesData>) {
	res.status(200).json(enquiriesData);
}
