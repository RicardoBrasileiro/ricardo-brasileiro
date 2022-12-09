import styled from "styled-components";
import { MaterialIconContainerProps } from "../types";

export const MaterialIconRoundedContainer = styled.span<MaterialIconContainerProps>`
  &.material-symbols-rounded {
    font-variation-settings: "FILL" ${({ filled }) => (filled ? 1 : 0)},
      "wght" ${({ weight }) => weight ?? 400},
      "GRAD" ${({ grade }) => grade ?? 0}, "opsz" ${({ grade }) => grade ?? 48};
  }
`;
