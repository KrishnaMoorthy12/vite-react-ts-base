import { ButtonHTMLAttributes } from 'react';
import { useHyperLink } from '../../hooks/useHyperLink';
import { ButtonStyleWrapper, ButtonVariants } from './button.style';

export function Button({ children, variant, link, onClick, ...rest }: IButtonProps) {
	onClick = link ? useHyperLink(link) : onClick;

	return (
		<ButtonStyleWrapper variant={variant ?? 'primary'} onClick={onClick} {...rest}>
			{children}
		</ButtonStyleWrapper>
	);
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	link?: string;
}
