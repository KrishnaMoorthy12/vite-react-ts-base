import { ButtonHTMLAttributes } from 'react';
import { ButtonStyleWrapper, ButtonVariants } from './button.style';

export function Button({ children, variant, onClick, ...rest }: IButtonProps) {
	return (
		<ButtonStyleWrapper variant={variant ?? ButtonVariants.PRIMARY} onClick={onClick} {...rest}>
			{children}
		</ButtonStyleWrapper>
	);
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	link?: string;
}
