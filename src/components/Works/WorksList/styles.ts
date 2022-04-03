import styled from 'styled-components';

export const WorksListBox = styled.div`
  margin-top: 150px;
  margin-bottom: 300px;
  position: relative;
  width: 80vw;

  @media (max-width: 900px) {
    margin-top: 50px;
    margin-bottom: 200px;
  }
`;
export const Works = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 94;
`;
export const TimeLine = styled.div`
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;
  border-radius: 5px;
  z-index: -1;
  box-shadow: 0px 0px 30px ${({ theme }) => theme.colors.hoverColor};
  transition: all 0.2s linear;
`;
export const WorkBall = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.colors.hoverColor};
  transition: all 0.2s linear;
`;
