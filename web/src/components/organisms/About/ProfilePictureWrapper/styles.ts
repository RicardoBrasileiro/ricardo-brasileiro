import styled from "styled-components";

export const ProfilePictureWrapperContainer = styled.div`
  position: relative;
`;

export const CurrentEnterprise = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  position: absolute;
  left: 180px;
  bottom: 20px;

  width: 40px;
  height: 40px;
  padding: 10px;

  background: #ffffff;

  border-radius: 30px;

  transition: all 300ms linear;

  :hover {
    width: 126px;
  }
`;

export const CurrentEnterprisePicture = styled.img`
  width: 20px;
  height: 20px;
`;

export const CurrentEnterpriseName = styled.p`
  display: none;

  font-size: 16px;
  font-weight: bold;

  color: #3d3d3d;

  opacity: 0;
`;

export const ProfilePicture = styled.img`
  width: 240px;

  border: 8px solid #ffffff;
  border-radius: 50%;
`;
