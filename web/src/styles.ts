import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    color: #ffffff;

    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    
    text-decoration: none;

    border: none;
    outline: none;
  }

  body {
    background: #171717;
  }

  button {
    background: none;

    cursor: pointer;
  }

  .show-label:hover p {
    display: block;

    animation: turn-visible 300ms linear forwards;
    animation-delay: 300ms;
  }

  .material-symbols-rounded {
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
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

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
