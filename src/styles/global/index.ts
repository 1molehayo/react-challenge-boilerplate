import { createGlobalStyle } from 'styled-components';
import ResetsStyles from './Resets';
import { colors, fontSizes } from './Constants';

export const GlobalStyles = createGlobalStyle`
    ${ResetsStyles}

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    html {
        box-sizing: border-box;
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 62.5% /* 10px */;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
    }


    body {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: ${fontSizes.regular};
        letter-spacing: normal;
        line-height: 1.5;
        color:  ${colors.grey};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`;
