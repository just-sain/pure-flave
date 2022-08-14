import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface IContactFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	onSubmit: (IContactForm) => void;
}
