import styled from 'styled-components';
import { PageBox } from '../../styles';

export const ProjectsBox = styled(PageBox)`
  @media (max-width: 1050px) {
    padding: 100px 0;
  }
`;
export const TopWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  z-index: -1;
`;
export const BottomWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  z-index: -2;
`;
