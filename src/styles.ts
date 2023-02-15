import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    color: #ffffff;

    font-family: "Ubuntu", sans-serif;
    text-decoration: none;

    outline: none;
  }

  button {
    background: none;

    border: none;

    cursor: pointer;
  }

  .show-label:hover p {
    display: block;

    animation: turn-visible 300ms linear forwards;
    animation-delay: 300ms;
  }

  @keyframes move-background {
    0% {
      background-position: 0%;
    }

    50% {
      background-position: 100%;
    }

    100% {
      background-position: 0%;
    }
  }

  @keyframes turn-visible {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
