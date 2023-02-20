import styled from "styled-components";

export const EmailFieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  padding: 8px;

  border: 0.6px solid #ffffff50;
  border-radius: 8px;

  background: #ffffff05;

  transition: all 300ms ease-out;

  :focus-within {
    border: 0.6px solid #ffffff90;
  }
`;
