interface IThemeColors {
  background: string;
  primary: string;
  secondary: string;
  third: string;
  boxShadow1: string;
  boxShadow2: string;
  hoverColor: string;
}

export interface ITheme {
  name: string;
  colors: IThemeColors;
}
