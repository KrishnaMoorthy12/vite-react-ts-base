import styled from 'styled-components';
import { ThemeType } from '../../../base/ThemeEngine';

export const ButtonStyleWrapper = styled.button<{ variant: ButtonVariants; theme: ThemeType }>`
	display: inline-flex;
	font-family: inherit;
	font-size: 1.8rem;
	font-weight: 500;
	align-items: center;
	justify-content: center;
	padding: 0.8rem 2rem;
	border-radius: 0.5rem;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border: none;
	outline: none;
	background-color: ${props =>
		props.variant === ButtonVariants.PRIMARY
			? props.theme.palette.accent.primary
			: props.theme.palette.error.default};
	color: ${props =>
		props.variant === ButtonVariants.PRIMARY
			? props.theme.palette.accent.primary.text
			: props.theme.palette.error.text};

	&:hover {
		background-color: ${props =>
			props.variant === ButtonVariants.PRIMARY
				? props.theme.palette.accent.primary
				: props.theme.palette.error.dark};
	}
`;

export enum ButtonVariants {
	PRIMARY = 'primary',
	ERROR = 'error'
}
