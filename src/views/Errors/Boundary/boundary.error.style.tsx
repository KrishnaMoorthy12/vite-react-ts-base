import styled from 'styled-components';

export const ErrorBoundaryStyleWrapper = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
	place-items: center;
	margin: 2rem;

	.heading {
		font-size: 3rem;
		text-align: center;
		color: ${props => props.theme.palette.error.default};
		margin-bottom: 1em;
	}

	.error-stack {
		font-size: 1.5rem;
		white-space: pre-wrap;
		max-width: 100%;
		max-height: 70vh;
		overflow: auto;
		padding: 1.5rem;
		background-color: ${props => props.theme.palette.error.bg};
		border-radius: 1rem;
		margin-bottom: 2em;
	}
`;
