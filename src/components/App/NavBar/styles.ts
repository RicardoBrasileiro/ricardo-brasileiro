import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarBox = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  z-index: 95;

  @media (max-width: 1150px) {
    background: ${({ theme }) => theme.colors.background};
    height: 60px;
    top: 0;
    left: 0;
    transform: translateY(0);
    width: 100%;
    box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.boxShadow2};
  }
`;
export const NavBarActions = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 96;
    display: none;
    animation: fadeIn 0.2s linear;
  }
`;
export const NavBarAction = styled(Link)`
  height: 50px;
  width: 50px;
  max-width: 50px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  margin-bottom: 40px;
  overflow: hidden;
  box-shadow: inset -3px -3px 10px ${({ theme }) => theme.colors.boxShadow1},
    inset 8px 8px 25px ${({ theme }) => theme.colors.boxShadow2};
  transition: all 0.2s linear;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.selected {
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 3px 3px 10px ${({ theme }) => theme.colors.boxShadow2},
      -2px -2px 10px ${({ theme }) => theme.colors.boxShadow1};
    border-radius: 10px;
  }

  @media (min-width: 1150px) {
    &:hover {
      width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 1150px) {
    width: 60vw;
    max-width: unset;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 80px);
    max-width: unset;
  }
`;
export const NavBarActionLabel = styled.p`
  margin-right: 13px;
  font-size: 16px;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
export const NavBarActionIcon = styled.span`
  font-size: 30px;
  margin: 0 10px;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;
export const ToggleNavBar = styled.input`
  display: none;

  &:checked + div {
    display: flex;
  }
`;
export const ToggleNavBarLabel = styled.label`
  top: 10px;
  right: 20px;
  position: absolute;
  width: 40px;
  height: 40px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
    border-radius: 5px;
  }

  @media (max-width: 1150px) {
    display: flex;
  }
`;
export const ToggleNavBarIcon = styled.span`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
