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
				{news?.tag && (
					<Title tag='h2' color='primary' className={styles.tag}>{news.tag}</Title>
				)}
				<Title tag='h1' color='primary'>{news.title}</Title>
				<Paragraph size='m' color='black'>{news.description}</Paragraph>
				<Button href='/shop' color='primary' size='l'>Shop</Button>
			</div>
			<div className={styles.imageBlock}>
				{news.img.map(i => (
					<div className={styles.photo}><Image key={i} width={'100%'} height={'100%'} objectFit='cover' src={i} alt='new product' layout='responsive' /></div>
				))}
			</div>
		</section>
	);
};