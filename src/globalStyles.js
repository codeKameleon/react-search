import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html {
        font-family: 'Rubik Light', sans-serif;
        font-size: 100%;
    }

    body {
        background-color: #F5F5F5;
        color: #0c0908;
        padding: 2rem;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`  