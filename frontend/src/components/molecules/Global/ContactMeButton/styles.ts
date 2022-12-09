import styled from "styled-components";

export const ContactMeButtonContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;

  width: max-content;
  padding: 12px 20px;

  background: ${({ theme }) => theme.colors.buttons.primary.backgroundColor};

  border-radius: 10px;

  p,
  span {
    color: ${({ theme }) => theme.colors.buttons.primary.color};
  }
`;
export const ContactMeButtonLabel = styled.p`
  font-weight: bold;
`;
