import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html {
        font-family: 'Arial', sans-serif;
        font-size: 100%;
    }

    body {
        background-color: #0C090A;
        color: #fff;
        padding: 2rem;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`