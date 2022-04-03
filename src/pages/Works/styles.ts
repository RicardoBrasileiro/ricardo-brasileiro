import styled from 'styled-components';
import { PageBox } from '../../styles';

export const WorksBox = styled(PageBox)`
  @media (max-width: 900px) {
    padding: 100px 0;
  }
`;
export const TopWave = styled.img`
  position: fixed;
  bottom: 4vh;
  right: 0;
  height: 70vh;
  z-index: -1;

  @media (max-width: 900px) {
    width: 5vw;
    height: unset;
    bottom: 2.5vh;
  }
`;
export const BottomWave = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 75vh;
  z-index: -2;

  @media (max-width: 900px) {
    width: 6vw;
    height: unset;
  }
`;
