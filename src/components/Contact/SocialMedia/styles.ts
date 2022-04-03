import styled from 'styled-components';

export const SocialMediaBox = styled.button`
  display: flex;
  align-items: center;
  width: 400px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: -5px -5px 10px ${({ theme }) => theme.colors.boxShadow1},
    5px 5px 20px ${({ theme }) => theme.colors.boxShadow2};
  border-radius: 10px;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;

  &:hover p,
  &:hover i {
    color: ${({ color }) => color};
    transition: all 0.2s linear;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 40px);
  }
`;
export const SocialMediaIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  transition: all 0.2s linear;
`;
export const SocialMediaLabel = styled.p`
  font-size: 15px;
  transition: all 0.2s linear;
`;
