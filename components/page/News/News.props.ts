import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { INewsData } from '../../../data/news';

export interface INewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	news: INewsData;
}
