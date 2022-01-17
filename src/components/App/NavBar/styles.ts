import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  padding: 30px 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 95;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  transition: all 0.2s linear;

  @media (max-width: 900px) {
    padding: 30px 40px;
  }
  /* background: gray; */
`;

export const Logo = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.similarColors.primaryColor};
  min-width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: none;
  animation: fadeIn 0.2s linear;

  @media (max-width: 900px) {
    display: unset;
  }
`;
export const MenuIconBar = styled.div`
  width: 25px;
  height: 3px;
  background: ${({ theme }) => theme.similarColors.primaryColor};
  position: absolute;
  left: 4px;
  transition: all 0.2s linear;

  &:nth-child(1) {
    top: 5px;
  }

  &:nth-child(2) {
    top: 14px;
  }

  &:nth-child(3) {
    top: 23px;
  }
`;

export const ToggleMenuCheckBox = styled.input`
  display: none;

  &:checked ~ .menu-icon div:nth-child(1) {
    transform: rotateZ(45deg);
    top: 13px;
    left: 2px;
  }

  &:checked ~ .menu-icon div:nth-child(2) {
    left: 100%;
  }

  &:checked ~ .menu-icon div:nth-child(3) {
    transform: rotateZ(-45deg);
    top: 13px;
    left: 2px;
  }

  &:checked ~ .nav-bar-actions {
    display: flex;
  }
`;

export const NavBarActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    width: 100%;
    padding: 40px 0;
    background: ${({ theme }) => theme.colors.background};
    display: none;
    animation: fadeIn 0.2s linear;
  }
`;

export const NavBarAction = styled(Link)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  transition: 0.2s linear;
  margin: 0 15px;
  padding: 2px 0;
  position: relative;
  transition: all 0.2s linear;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    /* border: 3px solid ${({ theme }) => theme.colors.textColor}; */
    border-radius: 10px;
    margin: 0 40px;
  }

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.similarColors.primaryColor};
    transition: all 0.2s linear;
  }

  &.selected-link::before {
    left: 0;
    width: 100%;
  } */
`;
