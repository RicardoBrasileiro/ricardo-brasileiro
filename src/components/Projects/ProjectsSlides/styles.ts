import styled from 'styled-components';

export const ProjectsSlidesBox = styled.div`
  margin-bottom: 20px;
  width: calc(100% - 80px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const ProjectsSlideList = styled.div`
  display: flex;
  padding: 5px;
  overflow: hidden;
  width: calc(70vw);
  z-index: 93;
  scroll-behavior: smooth;

  @media (max-width: 900px) {
    width: calc(100vw - 90px);
  }
`;
export const ProjectsSlidesActions = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 92;
`;
export const SlideButton = styled.button`
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  color: ${({ theme }) => theme.similarColors.primaryColor};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s linear;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const SlideIcon = styled.i``;
