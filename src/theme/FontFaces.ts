import { createGlobalStyle } from 'styled-components';

export const FontFaces = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Manrope/manrope-400.woff2') format('woff2');
  }

  @font-face {
    font-display: swap; 
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Manrope/manrope-700.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Manrope/manrope-800.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Rowdies/rowdies-400.woff2') format('woff2');
  }
`;