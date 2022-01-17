import styled from 'styled-components';

export const ProjectSlideBox = styled.div`
  min-width: calc(70vw - 20px);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  text-align: justify;
  margin: 0 10px;

  @media (max-width: 900px) {
    flex-wrap: wrap-reverse;
    min-width: calc(100% - 20px);
  }
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media (max-width: 900px) {
    margin: 20px 0;
  }
`;
export const ProjectName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.similarColors.primaryColor};
  margin-bottom: 10px;
`;
export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
`;
export const ProjectImage = styled.img`
  border-radius: 10px;
  height: 300px;

  @media (max-width: 900px) {
    width: 100%;
    height: unset;
  }
`;
