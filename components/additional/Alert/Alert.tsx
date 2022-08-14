import { IAlertProps } from './Alert.props';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
// styles
import cn from 'classnames';
import styles from './Alert.module.scss';

export const Alert = ({ className, children, position, color, onClose, ...props }: IAlertProps) => {
	return (
		<div
			role='alert'
			className={cn(className, styles.wrapper, { [styles.right]: position === 'right', [styles.center]: position === 'center' })}
			{...props}>
			<motion.div
				layout
				animate={'visible'}
				variants={variants}
				initial={'hidden'}
				className={cn(styles.alert, {
					[styles.red]: color === 'red',
					[styles.bg]: color === 'bg',
					[styles.black]: color === 'black',
					[styles.primary]: color === 'primary'
				})}>
				<span>
					{children} <br /> This project is still in testing phase...
				</span>
				<Button size='s' color='red' onClick={onClose}>
					close
				</Button>
			</motion.div>
		</div>
	);
};

const variants = {
	visible: {
		opacity: 1,
		transform: 'translateY(0%)'
	},
	hidden: {
		opacity: 0,
		transform: 'translate(50%)'
	}
};
