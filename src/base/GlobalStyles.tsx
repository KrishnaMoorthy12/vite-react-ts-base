import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme.palette.primary.default};
    --text-color: ${props => props.theme.palette.background.text};
    --background-color: ${props => props.theme.palette.background.default};
    --font-family: ${props => props.theme.font};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
