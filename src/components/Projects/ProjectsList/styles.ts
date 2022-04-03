import styled from 'styled-components';

export const ProjectsListBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ProjectsListContainer = styled.div`
  display: flex;
  max-width: calc(70vw + 20px);
  overflow: hidden;
  margin: 0 30px;

  @media (max-width: 600px) {
    max-width: calc(67vw + 10px);
    margin: 0 10px;
  }
`;
export const SlideProjectButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:disabled {
    opacity: 0.3;
  }
`;
export const SlideProjectButtonIcon = styled.i`
  color: var(--secondary-color);
  font-size: 20px;
`;
