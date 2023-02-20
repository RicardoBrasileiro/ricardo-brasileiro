import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap-reverse;
  }
`;
