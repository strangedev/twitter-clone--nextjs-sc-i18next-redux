import { createGlobalStyle } from 'styled-components';
import { fontFace as dosisFontFace } from './fonts/dosis';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${dosisFontFace}
  
  body {
    font-family: 'Dosis', sans-serif;
  }
`;

export {
  GlobalStyle
};
