import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  textarea:focus {
    border: 1px solid #82F3FF;
    box-shadow: 0 0 10px #82F3FF;
    border-radius: 0.8rem;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`
