import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavBarActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 60rem;
  flex-wrap: wrap;
  position: relative;
`;

export const NavBarAction = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray};
  width: 12rem;
  text-align: center;
  position: absolute;
  transition: 0.2s linear;

  &:nth-child(1) {
    left: 0rem;
  }

  &:nth-child(2) {
    left: 0rem;
  }

  &:nth-child(3) {
    left: 10rem;
  }

  &:nth-child(4) {
    left: 30rem;
  }

  &:nth-child(5) {
    left: 40rem;
  }
`;
