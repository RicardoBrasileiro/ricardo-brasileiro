import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  min-height: 100vh;

  background: linear-gradient(
    90.62deg,
    #ff0f7b 0%,
    #ff0f7b 0.01%,
    #f89b29 100%
  );
  background-size: 200%;
  background-position: 50%;

  animation: move-background 10s linear infinite;
`;
