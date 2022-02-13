import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Router } from './base/Router';
import { GlobalStyles } from './base/GlobalStyles';
import { ThemeEngine } from './base/ThemeEngine';
import { UnexpectedError } from './views/Errors';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={UnexpectedError}>
			<ThemeEngine>
				<GlobalStyles />
				<Router />
			</ThemeEngine>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);
