import styled from 'styled-components';

export const SocialMediaLinkBox = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.similarColors.primaryColor};
  color: ${({ theme }) => theme.similarColors.primaryColor};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) => theme.similarColors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 900px) {
    margin: 10px 0px;
    width: 45%;
  }
`;
export const SocialMediaIcon = styled.i`
  width: 20px;
  margin-right: 10px;
  font-size: 18px;
`;
export const SocialMediaLabel = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
