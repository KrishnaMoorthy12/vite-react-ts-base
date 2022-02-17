import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Router } from './base/Router';
import { GlobalStyles, ThemeEngine } from './base';
import { UnexpectedError } from './views/Errors';

/**
 *? NOTE: Error Boundary does not catch errors from Theme Engine
 */

ReactDOM.render(
	<React.StrictMode>
		<ThemeEngine>
			<GlobalStyles />
			<ErrorBoundary FallbackComponent={UnexpectedError}>
				<Router />
			</ErrorBoundary>
		</ThemeEngine>
	</React.StrictMode>,
	document.getElementById('root')
);
