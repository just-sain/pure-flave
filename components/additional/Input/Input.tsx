import { ForwardedRef, forwardRef } from 'react';
import { IInputProps } from './Input.props';
import { motion } from 'framer-motion';
// styles
import cn from 'classnames';
import styles from './Input.module.scss';

export const Input = forwardRef(({ className, label, required = false, error, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<div className={cn(className, styles.field)}>
			{error && (
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ transform: 'translateY(-100%)', opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 1 }}
					className={styles.error}>
					{error.message}
				</motion.span>
			)}
			<label className={styles.label}>
				{label}
				{required && <span className={styles.required}> *</span>}
			</label>
			<input ref={ref} className={cn(styles.input, { [styles.trouble]: error })} {...props} />
		</div>
	);
});
