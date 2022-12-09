import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 1px solid ${(props) => props.theme['yellow-700']};
  }
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['gray-600']};
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 10rem;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }`
