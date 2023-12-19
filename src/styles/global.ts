import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Mono', monospace;
  }

  :focus {
        outline: 0;
    }

  body {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
  }

  span {
    display: block;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
