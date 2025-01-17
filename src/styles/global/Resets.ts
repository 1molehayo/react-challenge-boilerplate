const ResetsStyles = `
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    h1 {
        margin: 0.67em 0;
        font-size: 2em;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    pre {
        font-family: monospace;
        font-size: 1em;
    }

    a {
        background-color: transparent;
    }


    abbr[title] {
        border-bottom: 0;
        text-decoration: underline;
        text-decoration: underline dotted;
    }



    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace;
        font-size: 1em;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
    }

    button,
    input {

        overflow: visible;
    }

    button,
    select {

        text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    legend {
        display: table;
        max-width: 100%;
        padding: 0; /* 3 */
        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type='checkbox'],
    [type='radio'] {
        padding: 0;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }

    [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    figure,
    p {
        margin: 0;
        padding: 0;
    }
`;

export default ResetsStyles;
