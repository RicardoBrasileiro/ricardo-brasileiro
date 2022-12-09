export type MaterialIconContainerProps = {
  filled?: boolean;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  color?: string;
};

export type MaterialIconProps = MaterialIconContainerProps & {
  name: string;
};
