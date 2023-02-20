import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  width: 100%;
  min-height: 100vh;

  background: linear-gradient(105deg, #4200ff, #ff00e5);
  background-size: 200%;
  background-position: 0%;

  animation: move-background 10s linear infinite;
`;
