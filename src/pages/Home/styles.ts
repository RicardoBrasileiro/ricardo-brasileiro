import styled from 'styled-components';
import { PageBox } from '../../styles';

export const HomeBox = styled(PageBox)`
  @media (max-width: 900px) {
    padding: 100px 0;
  }
`;
export const TopWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 95vh;
  z-index: -1;

  @media (max-width: 900px) {
    width: 50vw;
    height: unset;
  }
`;
export const BottomWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100vh;
  z-index: -2;

  @media (max-width: 900px) {
    width: 55vw;
    height: unset;
  }
`;
