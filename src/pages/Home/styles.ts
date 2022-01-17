import styled from 'styled-components';

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin: 0 80px;
  animation: fadeIn 0.2s linear;
  position: relative;

  @media (max-width: 900px) {
    padding-top: 100px;
    padding-bottom: 30px;
    margin: 0 40px;
    min-height: 100%;
    justify-content: space-between;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  position: absolute;
  bottom: 0%;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 900px) {
    position: relative;
    flex-wrap: wrap;
    height: unset;
    margin-top: 20px;
  }
`;
