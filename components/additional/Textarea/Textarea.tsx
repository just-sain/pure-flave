import { ForwardedRef, forwardRef } from 'react';
import { ITextareaProps } from './Textarea.props';
import { motion } from 'framer-motion';
// styles
import cn from 'classnames';
import styles from './Textarea.module.scss';

export const Textarea = forwardRef(
	({ className, label, required = false, error, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
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
				<textarea ref={ref} className={cn(styles.textarea, { [styles.trouble]: error })} {...props} />
			</div>
		);
	}
);
