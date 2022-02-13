import { FallbackProps } from 'react-error-boundary';
import { Button } from '../../../lib/components';
import { ErrorBoundaryStyleWrapper } from './boundary.error.style';

export function UnexpectedError({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<ErrorBoundaryStyleWrapper>
			<h1 className='heading'>Something went wrong:</h1>
			<pre className='error-stack'>{error.stack}</pre>
			<Button variant={'error'} onClick={resetErrorBoundary}>
				Try again
			</Button>
		</ErrorBoundaryStyleWrapper>
	);
}
