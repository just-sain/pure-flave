import { useForm } from 'react-hook-form';
// interfaces
import { IContactFormProps } from './ContactForm.props';
import { IContactFormValues } from './ContactForm.form';
// styles
import cn from 'classnames';
import styles from './ContactForm.module.scss';
import { Button, Input, Textarea } from '../../additional';

export const ContactForm = ({ className, onSubmit, ...props }: IContactFormProps) => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset
	} = useForm<IContactFormValues>({ mode: 'onTouched' });

	return (
		<form className={cn(className, styles.form)} onSubmit={handleSubmit(onSubmit)} {...props}>
			<Input
				{...register('firstName', { required: { value: true, message: 'this filed is required' } })}
				error={errors.firstName}
				label='First Name'
				required
			/>
			<Input
				{...register('lastName', { required: { value: true, message: 'this filed is required' } })}
				error={errors.lastName}
				label='Last Name'
				required
			/>
			<Input
				{...register('email', { required: { value: true, message: 'this filed is required' } })}
				error={errors.email}
				label='Email'
				required
				className={styles.full}
			/>
			<Textarea
				{...register('message', { maxLength: { value: 200, message: 'max length of message is 200' } })}
				error={errors.message}
				label='message'
				className={styles.full}
			/>
			<Button color='red' size='m' onClick={() => reset()}>
				Reset
			</Button>
			<Button color='bg' size='m'>
				Submit
			</Button>
		</form>
	);
};
