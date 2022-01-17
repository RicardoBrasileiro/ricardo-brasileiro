import styled from 'styled-components';

export const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  width: 100%;

  @media (max-width: 1000px) {
    width: unset;
    justify-content: center;
  }
`;

export const ProfilePicture = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;

  @media (max-width: 1000px) {
    margin: 20px 0;
    width: 50vw;
    height: 50vw;
  }
`;
