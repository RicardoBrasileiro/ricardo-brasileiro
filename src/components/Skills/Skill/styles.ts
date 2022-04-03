import styled from 'styled-components';

export const SkillBox = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ color }) => color};
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover > div > p {
    transform: translateY(0);
  }

  @media (max-width: 1150px) {
    width: 60vw;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 80px);
  }
`;
export const SkillIcon = styled.img`
  margin-right: 10px;
  width: 43px;

  @media (max-width: 900px) {
    width: 30px;
  }
`;
export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.2s linear;
`;
export const SkillName = styled.p`
  color: ${({ color }) => color};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 2px;
  transform: translateY(4px);
  transition: all 0.2s linear;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
export const SkillPercentage = styled.div`
  background: ${({ color }) => color};
  height: 5px;
  width: 0%;
  border-radius: 5px;
  transition: width 0.2s linear, height 0s;
`;
