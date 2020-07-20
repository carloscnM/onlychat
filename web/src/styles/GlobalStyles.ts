import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        background-color: var(--background);
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        color: var(---text);
    }

    :root{
        --primary: #30343F;
        --boxColor: #E4D9FF;
        --text: #EDDBDB;
        --background: #273469;
    }
`;