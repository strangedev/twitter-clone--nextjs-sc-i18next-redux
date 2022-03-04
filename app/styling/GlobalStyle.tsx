import { createGlobalStyle } from './GlobalTheme';
import reset from 'styled-reset';
import { Stringlike } from '@nhummel/css-in-js';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Dosis', sans-serif;
    font-size: ${({ globalTheme }): Stringlike => globalTheme.textSizes.content};
    background-color: ${({ globalTheme }): Stringlike => globalTheme.backgroundColor};
    color: ${({ globalTheme }): Stringlike => globalTheme.textColor};
  }
`;

export {
  GlobalStyle
};
