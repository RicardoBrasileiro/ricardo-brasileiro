import styled from 'styled-components';
import { PageBox } from '../../styles';

export const ContactBox = styled(PageBox)`
  @media (max-width: 1050px) {
    flex-direction: column;
    padding: 100px 0;
  }
`;
export const TopWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60vh;
  z-index: -1;

  @media (max-width: 900px) {
    height: 33vh;
  }
`;
export const BottomWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60vh;
  z-index: -2;

  @media (max-width: 900px) {
    height: 35vh;
  }
`;
export const Or = styled.p`
  font-size: 18px;
  margin: 0 30px;

  @media (max-width: 1050px) {
    margin: 50px 0;
  }
`;
