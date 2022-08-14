import { useState } from 'react';
import { IInfoProps } from './Info.props';
import { motion } from 'framer-motion';
// styles
import cn from 'classnames';
import styles from './Info.module.scss';

export const Info = ({ className, children, infoTitle, initialIsOpen = false, ...props }: IInfoProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

	return (
		<div className={cn(className, styles.info)} {...props}>
			<div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
				<p className={styles.titleText}>{infoTitle}</p>
				<span className={styles.icon}>{isOpen ? '-' : '+'}</span>
			</div>
			<motion.div
				variants={variants}
				animate={[isOpen ? 'visible' : 'hidden']}
				initial={isOpen ? 'visible' : 'hidden'}
				transition={{ type: 'inertia' }}
				className={cn(styles.description, { [styles._open]: isOpen })}>
				{children}
			</motion.div>
		</div>
	);
};

const variants = {
	visible: {
		height: 'auto',
		marginTop: '1rem'
	},
	hidden: {
		height: '0',
		marginTop: 0,
		overflow: 'hidden'
	}
};
