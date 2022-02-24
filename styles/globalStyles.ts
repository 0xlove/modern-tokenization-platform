import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import {theme} from './theme';
import fontFace from './fontFace';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fontFace}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    background-color: ${theme.colors.bg};
    font-family: 'Montserrat-Ace', sans-serif;
    color: ${theme.colors.text};
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
