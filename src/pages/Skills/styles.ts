import styled from 'styled-components';
import { PageBox } from '../../styles';

export const SkillsBox = styled(PageBox)`
  align-items: flex-start;
  padding-top: 20vh;
`;
export const TopWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 43vh;
  z-index: -1;

  @media (max-width: 1150px) {
    width: 45vw;
    height: unset;
  }
`;
export const BottomWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 45vh;
  z-index: -2;

  @media (max-width: 1150px) {
    width: 50vw;
    height: unset;
  }
`;
export const SkillSections = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
