import styled from 'styled-components';

export const ProjectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70vw;
  margin: 0 10px;

  @media (max-width: 1050px) {
    flex-wrap: wrap-reverse;
  }

  @media (max-width: 600px) {
    min-width: 67vw;
    margin: 0 5px;
  }
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 45%;
  margin-right: 60px;

  @media (max-width: 1050px) {
    margin: 0;
    margin-top: 40px;
  }
`;
export const ProjectTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const ProjectDescription = styled.p`
  text-align: justify;
  font-size: 18px;
`;
export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;
const ProjectActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  height: 50px;
  width: calc(50% - 20px);
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: unset;
  }

  @media (max-width: 600px) {
    width: calc(50% - 10px);
  }
`;
const ProjectActionButtonLabel = styled.p`
  color: #e5e5e5;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
`;
const ProjectActionButtonIcon = styled.span`
  color: #e5e5e5;
  font-size: 20px;
`;
export const ProjectCodeButton = styled(ProjectActionButton)``;
export const ProjectCodeButtonLabel = styled(ProjectActionButtonLabel)``;
export const ProjectCodeButtonIcon = styled(ProjectActionButtonIcon)``;
export const ProjectDeployButton = styled(ProjectActionButton)``;
export const ProjectDeployButtonLabel = styled(ProjectActionButtonLabel)``;
export const ProjectDeployButtonIcon = styled(ProjectActionButtonIcon)``;
export const ProjectPreview = styled.div`
  min-width: 45%;
`;
export const ProjectImages = styled.div`
  width: 100%;
`;
export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
export const ProjectImagesIndexes = styled.div``;
export const ProjectImagesIndex = styled.div``;
