import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  font-size: 15px;
  text-decoration: none;
  font-family: "Sen", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
  scroll-behavior: smooth;
  transition: all .2s linear;
}

body {
  background: ${({ theme }) => theme.colors.background};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moveGradient {

    to {
        background-position: 100% 50%
    }
}

@keyframes oneMove {

    0% {
        visibility: visible;
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes twoMove {

    0% {
        visibility: visible;
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes threeMove {

    0% {
        visibility: visible;
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
    71.4285% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes fourMove {

    0% {
        visibility: visible;
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
    71.4285% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes fiveMove {

    0% {
        visibility: visible;
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes sixMove {

    0% {
        visibility: visible;
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}
`;

export const AppBox = styled.div``;
export const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  opacity: 0;
  animation: fadeIn 0.2s linear forwards;
`;
