import { Title } from '../../additional';
import { IErrorProps } from './Error.props';
// styles
import cn from 'classnames';
import styles from './Error.module.scss';

export const Error = ({ className, children, ErrorNumber, ...props }: IErrorProps) => {
	return (
		<section className={cn(className, styles.wrapper)} {...props}>
			<Title tag='h1' color='primary'>{ErrorNumber}</Title>
			<Title tag='h2'>{children}</Title>
		</section>
	);
};