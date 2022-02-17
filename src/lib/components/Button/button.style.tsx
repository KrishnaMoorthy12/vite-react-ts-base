import styled from 'styled-components';

export const ButtonStyleWrapper = styled.button<{ variant: ButtonVariants }>`
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
	background-color: ${props => props.theme.palette[props.variant].default};
	color: ${props => props.theme.palette[props.variant].text};

	&:hover {
		background-color: ${props => props.theme.palette[props.variant].dark};
	}
`;

export type ButtonVariants = 'primary' | 'error';
