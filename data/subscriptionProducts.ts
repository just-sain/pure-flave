import { IProduct } from '../interface/interfaces';

export const subscriptionProducts: IProduct[] = [
	{
		img: 'https://static.wixstatic.com/media/c837a6_e39fc912437f43fe91138ee505f45f5e~mv2.jpg/v1/fill/w_306,h_408,al_c,q_80,usm_0.66_1.00_0.01/c837a6_e39fc912437f43fe91138ee505f45f5e~mv2.webp',
		id: 1,
		isNew: false,
		name: 'Total Care',
		price: 50.0
	},
	{
		img: 'https://static.wixstatic.com/media/c837a6_28a2c00d7db14ac2adbc25191001eb27~mv2.jpg/v1/fill/w_306,h_408,al_c,q_80,usm_0.66_1.00_0.01/c837a6_28a2c00d7db14ac2adbc25191001eb27~mv2.webp',
		id: 2,
		isNew: false,
		name: 'Detox Plan',
		price: 30.0
	},
	{
		img: 'https://static.wixstatic.com/media/c837a6_a958119840164742ba7eb2332769bf31~mv2.jpg/v1/fill/w_306,h_408,al_c,q_80,usm_0.66_1.00_0.01/c837a6_a958119840164742ba7eb2332769bf31~mv2.webp',
		id: 3,
		isNew: true,
		name: 'Full-Day Cleanses',
		price: 30.0
	}
];
