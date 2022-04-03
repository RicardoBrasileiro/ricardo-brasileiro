import styled from 'styled-components';

export const WorkBox = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 10px;
  height: 140px;
  min-width: 320px;
  max-width: 320px;
  box-shadow: 3px 3px 10px ${({ theme }) => theme.colors.boxShadow2},
    -5px -5px 10px ${({ theme }) => theme.colors.boxShadow1};
  overflow: hidden;
  cursor: default;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s linear;

  & p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.2s linear;
  }

  &:hover p {
    color: ${({ theme }) => theme.colors.third};
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.third};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.third};
  }
`;
export const WorkHeader = styled.div`
  margin-bottom: 10px;
  transition: all 0.2s linear;
`;
export const WorkJob = styled.p`
  font-weight: bold;
`;
export const WorkInfo = styled.div``;
export const WorkEnterprise = styled.p``;
export const WorkDate = styled.p``;
export const WorkLeftWave = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
`;
export const WorkLeftWavePath = styled.path`
  fill: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s linear;
`;
export const WorkRightWave = styled.svg`
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const WorkRightWavePath = styled.path`
  fill: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s linear;
`;
