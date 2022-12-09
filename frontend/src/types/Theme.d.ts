// General

export type Color = {
  color: string;
};

export type BackgroundColor = {
  backgroundColor: string;
};

export type BorderColor = {
  borderColor: string;
};

export type ColorAndBackgroundColor = Color & BackgroundColor;

export type ButtonColors = ColorAndBackgroundColor & BorderColor;

export type InputColors = ColorAndBackgroundColor;

// Specifics

export type ThemeTextColors = {
  primary: Color;
  secondary: Color;
};

export type NeumorphicButtonColors = ButtonColors & {
  shadowOne: Color;
  shadowTwo: Color;
};

export type ThemeButtons = {
  primary: ButtonColors;
  secondary: ButtonColors;
  neumorphic: NeumorphicButtonColors;
};

export type ThemeSocialMedias = {
  github: ColorAndBackgroundColor;
  linkedin: ColorAndBackgroundColor;
  instagram: ColorAndBackgroundColor;
  twitter: ColorAndBackgroundColor;
  whatsapp: ColorAndBackgroundColor;
};

export type ThemeColors = {
  background: Color;
  text: ThemeTextColors;
  input: InputColors;
  buttons: ThemeButtons;
  socialMedias: ThemeSocialMedias;
};

type Theme = {
  type: number;
  colors: ThemeColors;
};
