import type { NextApiRequest, NextApiResponse } from 'next';
import { contactData } from '../../../data';
import { IContactData } from '../../../interface';

export default function handler(req: NextApiRequest, res: NextApiResponse<IContactData>) {
	res.status(200).json(contactData);
}
