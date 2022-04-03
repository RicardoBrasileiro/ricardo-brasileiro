import styled from 'styled-components';

export const ToggleThemeBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 15px;
  right: 30px;
  width: 60px;
  height: 30px;
  padding: 0 5px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset -3px -3px 10px ${({ theme }) => theme.colors.boxShadow1},
    inset 8px 8px 10px ${({ theme }) => theme.colors.boxShadow2};
  cursor: pointer;
  z-index: 96;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 1050px) {
    right: unset;
    left: 30px;
  }
`;
const ThemeModeIcon = styled.span`
  font-size: 20px;
`;
export const LightModeIcon = styled(ThemeModeIcon)`
  color: #ffba08;
`;
export const DarkModeIcon = styled(ThemeModeIcon)`
  color: #0d30e4;
`;
export const ShowEnabledIconCircle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  box-shadow: -3px -3px 5px ${({ theme }) => theme.colors.boxShadow1},
    3px 3px 5px ${({ theme }) => theme.colors.boxShadow2};
  transition: all 0.2s linear;

  &.dark-mode {
    left: 5px;
  }

  &.light-mode {
    left: 35px;
  }
`;
