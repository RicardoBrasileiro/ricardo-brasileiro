import React from "react";
import { MaterialIconProps } from "../types";
import { MaterialIconRoundedContainer } from "./styles";

const MaterialIconRounded: React.FC<MaterialIconProps> = ({
  name,
  ...containerProps
}): JSX.Element => {
  return (
    <MaterialIconRoundedContainer
      {...containerProps}
      className="material-symbols-rounded"
    >
      {name}
    </MaterialIconRoundedContainer>
  );
};

export default MaterialIconRounded;
