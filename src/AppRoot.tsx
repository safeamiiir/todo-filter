import { createGlobalStyle } from 'styled-components';
import { SIZES } from 'theme';

const AppRoot = createGlobalStyle`
  body {
    padding: ${SIZES[4]};
    font-family: Helvetica, Arial, sans-serif;
  }
`;

export default AppRoot;
