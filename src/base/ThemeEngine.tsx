import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const PREFERS_DARK_SCHEME = '(prefers-color-scheme: dark)';

const theme = {
	font: 'Metropolis',
	palette: {
		light: {
			accent: {
				primary: '#1E90FF'
			},
			background: '#fafafa',
			text: '#212121'
		},
		dark: {
			accent: {
				primary: '#1E90FF'
			},
			background: '#252525',
			text: '#fafafa'
		}
	}
};

const getThemeProps = (scheme: ColorScheme) => ({
	...theme,
	mode: scheme,
	palette: theme.palette[scheme]
});

export type ThemeType = ReturnType<typeof getThemeProps>;

const getPreferredColorScheme = (): ColorScheme =>
	window.matchMedia(PREFERS_DARK_SCHEME).matches ? ColorScheme.DARK : ColorScheme.LIGHT;

export function ThemeEngine({ children, forceDarkMode }: IThemeEngineProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		forceDarkMode ? ColorScheme.DARK : getPreferredColorScheme()
	);

	if (!forceDarkMode) {
		window.matchMedia(PREFERS_DARK_SCHEME).addEventListener('change', () => {
			setColorScheme(getPreferredColorScheme());
		});
	}

	return <ThemeProvider theme={getThemeProps(colorScheme)}>{children}</ThemeProvider>;
}

interface IThemeEngineProps {
	forceDarkMode?: boolean;
	children: ReactNode;
}

enum ColorScheme {
	LIGHT = 'light',
	DARK = 'dark'
}
