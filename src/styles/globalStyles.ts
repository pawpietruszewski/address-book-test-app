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

/* Swiper
---------------------------------------------- */

.swiper-container {
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  z-index: 1;
}

.swiper-container-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  box-sizing: content-box;
  display: flex;
  height: 100%;
  position: relative;
  transition-property: transform;
  width: 100%;
  z-index: 1;
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-container-multirow > .swiper-wrapper {
  flex-wrap: wrap;
}

.swiper-container-multirow-column > .swiper-wrapper {
  flex-direction: column;
  flex-wrap: wrap;
}

.swiper-container-free-mode > .swiper-wrapper {
  margin: 0 auto;
  transition-timing-function: ease-out;
}

.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform;
  width: 100%;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

/* Auto Height */
.swiper-container-autoheight {
  &, .swiper-slide {
    height: auto;
  }

  .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }
}

.swiper-pagination-bullets {
  text-align: center;
}

.swiper-pagination {
  bottom: 5px;
  line-height: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 100%;
}

.swiper-pagination-bullet {
  border: 1px solid #fff;
  cursor: pointer;
  display: inline-block;
  height: 10px;
  margin: 0 8px;
  opacity: 0.25;
  width: 10px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
`;

export default GlobalStyles;
