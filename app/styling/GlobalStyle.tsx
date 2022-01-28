import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Dosis', sans-serif;
  }
`;

export {
  GlobalStyle
};
