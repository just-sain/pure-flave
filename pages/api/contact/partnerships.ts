import type { NextApiRequest, NextApiResponse } from 'next';
import { partnershipsData } from '../../../data';
import { IPartnershipsData } from '../../../interface';

export default function handler(req: NextApiRequest, res: NextApiResponse<IPartnershipsData>) {
	res.status(200).json(partnershipsData);
}
