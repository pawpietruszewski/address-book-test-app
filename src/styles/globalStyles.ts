import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import fonts from './fonts';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
${reset}

@font-face {
    font-family: 'ap';
    src: url('/public/fonts/AdventPro-Regular.woff2') format('woff2'),
         url('/public/fonts/AdventPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'ap';
    src: url('/public/fonts/AdventPro-Light.woff2') format('woff2'),
         url('/public/fonts/AdventPro-Light.woff') format('woff');
    font-weight: lighter;
    font-style: normal;

}

@font-face {
    font-family: 'ap';
    src: url('/public/fonts/AdventPro-Bold.woff2') format('woff2'),
         url('/public/fonts/AdventPro-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;

}

@font-face {
    font-family: 'barlowc';
    src: url('/public/fonts/BarlowCondensed-Regular.woff2') format('woff2'),
         url('/public/fonts/BarlowCondensed-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


@font-face {
    font-family: 'barlowc';
    src: url('/public/fonts/BarlowCondensed-Light.woff2') format('woff2'),
         url('/public/fonts/BarlowCondensed-Light.woff') format('woff');
    font-weight: lighter;
    font-style: normal;

}

@font-face {
    font-family: 'barlowc';
    src: url('/public/fonts/BarlowCondensed-Bold.woff2') format('woff2'),
         url('/public/fonts/BarlowCondensed-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;

}


 html {
   font-family: ${fonts.main};
   color: ${colors.black};
}

.visually-hidden.visually-hidden.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

button {
  appearance: none;
  background: transparent;
  border: 0;
}
`;

export default GlobalStyles;
