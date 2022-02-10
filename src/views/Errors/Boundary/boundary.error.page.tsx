import { FallbackProps } from 'react-error-boundary';

export function UnexpectedError({ error, resetErrorBoundary }: FallbackProps) {
	console.log(error);

	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}
