import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialMediaLinkBox = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0rem 3rem;

  @media (max-width: 60rem) {
    margin: 0.5rem 1rem;
  }
`;
export const SocialMediaIcon = styled.i`
  font-size: 20px;
  margin-right: 0.75rem;
  color: ${({ color }) => color};
`;
export const SocialMediaLabel = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.2s linear;

  &:hover {
    color: ${({ color }) => color};
  }
`;
