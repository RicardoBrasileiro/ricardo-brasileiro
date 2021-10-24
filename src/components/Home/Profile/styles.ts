import styled from 'styled-components';

export const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  width: 55rem;

  @media (max-width: 60rem) {
    width: unset;
    justify-content: center;
  }
`;

export const ProfilePicture = styled.img`
  width: 308px;
  height: 308px;
  border-radius: 50%;

  @media (max-width: 60rem) {
    width: 15rem;
    height: 15rem;
    margin: 1rem 0rem;
  }
`;
