import type { NextApiRequest, NextApiResponse } from 'next';
import { addressData } from '../../../data';
import { IAddressData } from '../../../interface';

export default function handler(req: NextApiRequest, res: NextApiResponse<IAddressData>) {
	res.status(200).json(addressData);
}
