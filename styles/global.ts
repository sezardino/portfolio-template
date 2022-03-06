import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    font-size: ${(props) => props.theme.fonts.html};
  }

  body {
    @include font-base;
    @include font-body;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${(props) => props.theme.fonts.family};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  section {
    position: relative;
    overflow-x: auto;
  }

  button {
    color: inherit;
    border: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  a,
  input,
  button {
    @include hide-tap;
  }
`;
