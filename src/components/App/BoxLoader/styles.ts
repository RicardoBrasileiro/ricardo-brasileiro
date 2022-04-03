import styled from 'styled-components';

export const BoxLoaderBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 96;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxLoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  background-color: transparent;
  border: none;
  -webkit-user-select: none;
`;
export const BoxWrap = styled.div`
  width: 70%;
  height: 70%;
  margin: calc((100% - 70% / 2)) calc((100% - 70%) / 2);
  position: relative;
  transform: rotate(-45deg);
`;
export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(135, 0, 0, 0.6);
  background: linear-gradient(
    to right,
    #f47087,
    #ff4f6d,
    #e12949,
    ${({ theme }) => theme.colors.primary},
    #c81114,
    ${({ theme }) => theme.colors.third},
    #c81114,
    ${({ theme }) => theme.colors.primary},
    #e12949,
    #ff4f6d,
    #f47087
  );
  background-position: 0% 50%;
  background-size: 1000% 1000%;
  visibility: hidden;

  &.one {
    animation: moveGradient 15s infinite, oneMove 3.5s infinite;
  }

  &.two {
    animation: moveGradient 15s infinite, twoMove 3.5s 0.15s infinite;
  }

  &.three {
    animation: moveGradient 15s infinite, threeMove 3.5s 0.3s infinite;
  }

  &.four {
    animation: moveGradient 15s infinite, fourMove 3.5s 0.575s infinite;
  }

  &.five {
    animation: moveGradient 15s infinite, fiveMove 3.5s 0.725s infinite;
  }

  &.six {
    animation: moveGradient 15s infinite, sixMove 3.5s 0.875s infinite;
  }
`;
