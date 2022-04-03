import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const themeSelected = window.localStorage.getItem('theme') || 'light';

const theme = themeSelected === 'light' ? lightTheme : darkTheme;

export default theme;
