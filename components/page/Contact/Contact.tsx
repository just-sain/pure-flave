// interfaces
import { SubmitHandler } from 'react-hook-form';
import { IContactProps } from './Contact.props';
import { IContactFormValues } from '../../Form/ContactForm/ContactForm.form';
// components
import { ContactForm } from '../../Form';
import { Alert, Divider, Paragraph, Title } from '../../additional';
// styles
import cn from 'classnames';
import styles from './Contact.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export const Contact = ({ className, address, enquires, partnerships, ...props }: IContactProps) => {
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const onSubmitHandler: SubmitHandler<IContactFormValues> = ({ email, firstName, lastName, message }) => {
		setShowAlert(true);
		console.log(email, firstName, lastName, message);
	};

	const onCloseAlert = () => {
		setShowAlert(false);
	};

	return (
		<div className={cn(className, styles.wrapper)} {...props}>
			<div className={styles.infoFrag}>
				<Title tag='h2' color='primary'>
					Get in Touch
				</Title>
				<Paragraph size='m'>Fill in the form with your questions, comments and concerns, and we will get right back to you.</Paragraph>
				<Divider color='primary' />
				<Title tag='h4' color='primary'>
					Other ways to reach us
				</Title>
				<div className={styles.ways}>
					<div className={styles.way}>
						<span>Wholesale enquiries:</span>
						<Link href={''}>
							<a target='_blank' className='email'>
								{enquires.email}
							</a>
						</Link>
					</div>
					<div className={styles.way}>
						<span>PR, press or partnerships:</span>
						<Link href={''}>
							<a target='_blank' className='email'>
								{partnerships.email}
							</a>
						</Link>
					</div>
					<div className={styles.way}>
						<span>Address:</span>
						<span>{address.street}</span>
						<span>{address.city}</span>
						<span>{address.house}</span>
					</div>
				</div>
				{showAlert && (
					<Alert onClose={onCloseAlert} color='primary' position='center'>
						Thanks for your feedback.
					</Alert>
				)}
			</div>
			<ContactForm onSubmit={onSubmitHandler} />
		</div>
	);
};
