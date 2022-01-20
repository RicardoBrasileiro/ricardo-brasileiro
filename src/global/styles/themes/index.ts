const themeType = window.localStorage.getItem('theme');

const similarColors = {
  primaryColor: '#a100f2',
};

const lightTheme = {
  colors: {
    background: '#FCFCFC',
    name: '#000000',
    contact_me: '#FFFFFF',
    textColor: '#BABABA',
    boxColor: '#FFFFFF',
    boxShadowColor: 'rgba(0, 0, 0, 0.25)',
    white: '#FFFFFF',
    black: '#000000',
    lightRed: '#D90429',
    darkRed: '#BA181B',
    lightGray: '#E5E5E5',
    gray: '#C4C4C4',
    darkGray: '#868686',
  },
};

const darkTheme = {
  colors: {
    background: '#212121',
    name: '#DCDCDC',
    contact_me: '#DCDCDC',
    textColor: '#DCDCDC',
    boxColor: '#3C3C3C',
    boxShadowColor: 'rgba(0, 0, 0, 0.25)',
    white: '#FFFFFF',
    black: '#000000',
    lightRed: '#D90429',
    darkRed: '#BA181B',
    lightGray: '#E5E5E5',
    gray: '#C4C4C4',
    darkGray: '#868686',
  },
};

const theme = themeType === 'light' ? { ...lightTheme } : { ...darkTheme };

export default { ...theme, similarColors };
