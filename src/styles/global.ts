import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: ${theme.color.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 16px Roboto, sans-serif;
  }

  #root {
  }

  button {
    cursor: pointer;
  }
`;
