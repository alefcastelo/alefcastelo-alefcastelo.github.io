import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1em;
    font-family: 'Poppins', 'Roboto', 'Open Sans', sans-serif;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 2em;
  }

  h4 {
    font-size: 1.5em;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
  }

  a {
    color: #b72c2c;
    &:visited {
      color: #b72c2c
    }
  }
`
