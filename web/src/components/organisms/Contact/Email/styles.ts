import styled from "styled-components";

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  width: 450px;
  max-width: calc(100vw - 80px);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const EmailFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;
