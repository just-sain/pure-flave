import Image from 'next/image';
import { Button, Paragraph, Title } from '../../additional';
// styles
import cn from 'classnames';
import styles from './News.module.scss';
import { INewsProps } from './News.props';

export const News = ({ className, news, ...props }: INewsProps) => {
	return (
		<section className={cn(className, styles.news)} {...props}>
			<div className={styles.text}>
				<Title tag='h1' color='primary'>{news.title}</Title>
				<Paragraph size='l' color='black'>{news.description}</Paragraph>
				<Button color='primary' size='l'>Shop</Button>
			</div>
			<div>
				<Image width={'100%'} height={'100%'} objectFit='cover' src={news.img} alt='new product' layout='responsive' />
			</div>
		</section>
	);
};