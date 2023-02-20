import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  padding: 40px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;
