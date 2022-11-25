import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5;
  }

  html, body, input, button {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  #root {
    margin: auto;

  }

  button {
    cursor: pointer;
  }
`;
