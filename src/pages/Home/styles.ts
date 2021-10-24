import styled from 'styled-components';

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 60rem) {
    min-height: calc(100vh - 2rem);
    margin: 1rem;
    justify-content: space-between;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  position: absolute;
  bottom: 0%;

  @media (max-width: 60rem) {
    position: relative;
    flex-wrap: wrap;
    justify-content: space-around;
    height: unset;
  }
`;
