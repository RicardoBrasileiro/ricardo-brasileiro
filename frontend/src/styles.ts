import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

:root {
  scroll-behavior: smooth;
}

* {
  margin: 0px;
  padding: 0px;
  
  text-decoration: none;
  
  outline: none;
  
  border: none;
  box-sizing: border-box;
  
  font-size: 2.43vh;
  font-family: 'Ubuntu', sans-serif;

  color: ${({ theme }) => theme.colors.text.primary.color};
}

body {
  background: ${({ theme }) => theme.colors.background.color};
}
`;

export const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  position: relative;
`;
