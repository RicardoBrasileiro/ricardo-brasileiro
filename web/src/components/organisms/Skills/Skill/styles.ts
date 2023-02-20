import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 80px;
  padding: 0px 16px;

  background: #1a1a1a;

  border-radius: 12px;

  user-select: none;

  opacity: 0;

  animation: fade-in 300ms linear forwards;

  :hover img {
    filter: grayscale(0);
  }
`;
