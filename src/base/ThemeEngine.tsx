import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const PREFERS_DARK_SCHEME = '(prefers-color-scheme: dark)';

export interface ITheme {
	font: string;
	mode: ColorScheme;
	palette: {
		primary: {
			default: string;
			text: string;
			dark: string;
		};
		error: { default: string; dark: string; bg: string; text: string };
		background: { default: string; text: string };
	};
}

export const themeProperties = {
	font: 'Metropolis',
	palette: {
		light: {
			primary: {
				default: '#1E90FF',
				text: '#FFFFFF',
				dark: '#187bdd'
			},
			error: { default: '#e01818', dark: '#c90303', bg: '#ffcdd2', text: '#fff' },
			background: { default: '#fafafa', text: '#212121' }
		},
		dark: {
			primary: {
				default: '#1E90FF',
				text: '#FFFFFF',
				dark: '#187bdd'
			},
			error: { default: '#ff4f4f', dark: '#c90303', bg: '#fd8a953b', text: '#fff' },
			background: { default: '#252525', text: '#fafafa' }
		}
	}
};

const getThemeProps = (scheme: ColorScheme): ITheme => ({
	...themeProperties,
	mode: scheme,
	palette: themeProperties.palette[scheme]
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
