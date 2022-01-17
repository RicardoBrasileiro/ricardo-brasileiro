import styled from 'styled-components';

export const ProjectsBox = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  animation: fadeIn 0.2s linear;

  @media (max-width: 900px) {
    padding-top: 70px;
  }
`;
