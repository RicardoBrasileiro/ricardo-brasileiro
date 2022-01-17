const themeType = window.localStorage.getItem('theme');

const similarColors = {
  primaryColor: '#7b2cbf',
};

const lightTheme = {
  colors: {
    background: '#FFFFFF',
    name: '#000000',
    contact_me: '#FFFFFF',
    textColor: '#BABABA',
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
    background: '#1B1B1B',
    name: '#DCDCDC',
    contact_me: '#DCDCDC',
    textColor: '#DCDCDC',
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
