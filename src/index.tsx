import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Router } from './base/router';
import { UnexpectedError } from './views/Errors';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={UnexpectedError}>
			<Router />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);
