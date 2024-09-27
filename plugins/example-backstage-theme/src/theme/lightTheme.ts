import { createUnifiedTheme } from '@backstage/theme';
import { createComponentOverrides } from './componentOverrides';
import {
  pageFontFamily,
  themeColorBlack100,
  themeColorBlack1000,
  themeColorBlack150,
  themeColorBlack200,
  themeColorBlack300,
  themeColorBlack400,
  themeColorBlack500,
  themeColorBlack600,
  themeColorBlack700,
  themeColorBlack800,
  themeColorBlack900,
  themeColorBlue200,
  themeColorBlue300,
  themeColorBlue400,
  themeColorBlue500,
  themeColorGold400,
  themeColorGold50,
  themeColorGold600,
  themeColorGold700,
  themeColorGreen200,
  themeColorGreen400,
  themeColorGreen600,
  themeColorPurple200,
  themeColorPurple300,
  themeColorPurple400,
  themeColorRed100,
  themeColorRed200,
  themeColorRed400,
  themeColorWhite,
  typography,
} from './consts';
import { createPagesTheme } from './pageTheme';

/**
 * Definition for the light palette variant
 */
const palette = {
  background: {
    default: themeColorWhite,
    paper: themeColorWhite,
  },
  border: themeColorBlack300,
  common: {
    black: themeColorBlack900,
    white: themeColorWhite,
  },
  error: {
    dark: themeColorRed400,
    light: themeColorRed200,
    main: themeColorRed100,
  },
  errorBackground: themeColorWhite,
  errorText: themeColorBlack900,
  grey: {
    50: themeColorBlack100,
    100: themeColorBlack150,
    200: themeColorBlack200,
    300: themeColorBlack300,
    400: themeColorBlack400,
    500: themeColorBlack500,
    600: themeColorBlack600,
    700: themeColorBlack700,
    800: themeColorBlack800,
    900: themeColorBlack900,
    A100: themeColorBlack100,
    A200: themeColorBlack300,
    A400: themeColorBlack600,
    A700: themeColorBlack900,
  },
  gold: themeColorGold400,
  highlight: themeColorGold50,
  info: {
    dark: themeColorBlue400,
    light: themeColorBlue200,
    main: themeColorBlue300,
  },
  infoBackground: themeColorWhite,
  infoText: themeColorBlack900,
  link: themeColorBlue400,
  linkHover: themeColorBlue500,
  mode: 'light',
  navigation: {
    background: themeColorBlack900,
    indicator: themeColorBlue200,
    color: themeColorBlack200,
    selectedColor: themeColorWhite,
    navItem: {
      hoverBackground: themeColorBlack800,
    },
    subMenu: {
      background: themeColorBlack800,
    },
  },
  primary: {
    contrastText: themeColorWhite,
    dark: themeColorBlue500,
    light: themeColorBlue200,
    main: themeColorBlue400,
  },
  secondary: {
    contrastText: themeColorWhite,
    dark: themeColorPurple400,
    light: themeColorPurple200,
    main: themeColorPurple300,
  },
  success: {
    dark: themeColorGreen600,
    light: themeColorGreen200,
    main: themeColorGreen400,
  },
  tabbar: {
    indicator: themeColorBlue400,
  },
  text: {
    disabled: themeColorBlack500,
    icon: themeColorBlack600,
    primary: themeColorBlack900,
    secondary: themeColorBlack600,
  },
  textContrast: themeColorBlack1000,
  textSubtle: themeColorBlack600,
  textVerySubtle: themeColorBlack500,
  type: 'light',
  warning: {
    dark: themeColorGold700,
    light: themeColorGold400,
    main: themeColorGold600,
  },
  warningBackground: themeColorWhite,
  warningText: themeColorBlack900,
} as const;

/**
 * Theme instance
 */
export const lightTheme = createUnifiedTheme({
  fontFamily: pageFontFamily,
  palette,
  defaultPageTheme: "home",
  pageTheme: createPagesTheme(palette),
  components: createComponentOverrides(palette),
  typography,
});
