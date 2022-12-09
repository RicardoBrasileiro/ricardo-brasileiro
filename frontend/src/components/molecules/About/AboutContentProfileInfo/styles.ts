import styled from "styled-components";

export const AboutContentProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AboutContentProfileInfoName = styled.p`
  font-size: 3.75vh;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.primary.color};
`;
export const AboutContentProfileInfoJob = styled.p`
  font-size: 3vh;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.secondary.color};
`;
