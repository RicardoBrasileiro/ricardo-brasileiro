import styled from "styled-components";

export const NavbarLinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 7.5vh;
  width: 7.5vh;

  color: ${({ theme }) => theme.colors.buttons.neumorphic.color};
  background: ${({ theme }) => theme.colors.buttons.neumorphic.backgroundColor};

  box-shadow: 0px 0px 0px
      ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color},
    0px 0px 0px
      ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color};

  animation: deactiveShadow 500ms linear forwards;

  &.active {
    animation: activeShadow 500ms linear forwards;
  }

  border-radius: 1.5vh;

  transition: all 300ms linear;

  @keyframes activeShadow {
    0% {
      box-shadow: inset -3px -3px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color},
        inset 8px 8px 25px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color};
    }

    50% {
      box-shadow: inset 0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color},
        inset 0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color};
    }

    51% {
      box-shadow: 0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color},
        0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color};
    }

    100% {
      box-shadow: 3px 3px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color},
        -2px -2px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color};
    }
  }

  @keyframes deactiveShadow {
    0% {
      box-shadow: 3px 3px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color},
        -2px -2px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color};
    }

    50% {
      box-shadow: 0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color},
        0px 0px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color};
    }

    51% {
      box-shadow: inset 0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color},
        inset 0px 0px 0px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color};
    }

    100% {
      box-shadow: inset -3px -3px 10px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowOne.color},
        inset 8px 8px 25px
          ${({ theme }) => theme.colors.buttons.neumorphic.shadowTwo.color};
    }
  }

  span {
    font-size: 4.5vh;
  }
`;
