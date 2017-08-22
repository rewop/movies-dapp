import { injectGlobal } from 'styled-components';
import css from 'normalize.css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${css}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
