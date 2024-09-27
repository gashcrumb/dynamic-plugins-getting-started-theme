import { createUnifiedTheme } from '@backstage/theme';
import { createComponentOverrides } from './componentOverrides';
import {
  pageFontFamily,
  themeColorBlack100_dark,
  themeColorBlack1000_dark,
  themeColorBlack200_dark,
  themeColorBlack300_dark,
  themeColorBlack400_dark,
  themeColorBlack50_dark,
  themeColorBlack500_dark,
  themeColorBlack600_dark,
  themeColorBlack700_dark,
  themeColorBlack800_dark,
  themeColorBlack850_dark,
  themeColorBlack900_dark,
  themeColorBlue200,
  themeColorBlue300_dark,
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
  themeColorRed200,
  themeColorRed400,
  themeColorRed9999_dark,
  themeColorWhite,
  typography,
} from './consts';
import { createPagesTheme } from './pageTheme';

/**
 * Definition for the dark palette variant
 */
const palette = {
  mode: 'dark',
  type: 'dark',
  background: {
    default: themeColorBlack700_dark,
    paper: themeColorBlack850_dark,
  },
  border: themeColorBlack500_dark,
  common: {
    black: themeColorBlack1000_dark,
    white: themeColorBlack50_dark,
  },
  error: {
    dark: themeColorRed400,
    light: themeColorRed200,
    main: themeColorRed9999_dark,
  },
  errorBackground: themeColorBlack700_dark,
  errorText: themeColorRed9999_dark,
  grey: {
    50: themeColorBlack50_dark,
    100: themeColorBlack100_dark,
    200: themeColorBlack200_dark,
    300: themeColorBlack300_dark,
    400: themeColorBlack400_dark,
    500: themeColorBlack500_dark,
    600: themeColorBlack600_dark,
    700: themeColorBlack700_dark,
    800: themeColorBlack800_dark,
    900: themeColorBlack900_dark,
    A100: themeColorBlack100_dark,
    A200: themeColorBlack300_dark,
    A400: themeColorBlack600_dark,
    A700: themeColorBlack900_dark,
  },
  gold: themeColorGold400,
  highlight: themeColorGold50,
  info: {
    dark: themeColorBlue400,
    light: themeColorBlue200,
    main: themeColorBlue300_dark,
  },
  infoBackground: themeColorBlack700_dark,
  infoText: themeColorBlue300_dark,
  link: themeColorBlue300_dark,
  linkHover: themeColorBlue200,
  navigation: {
    background: themeColorBlack900_dark,
    indicator: themeColorBlue300_dark,
    color: themeColorBlack200_dark,
    selectedColor: themeColorWhite,
    navItem: {
      hoverBackground: themeColorBlack800_dark,
    },
    subMenu: {
      background: themeColorBlack800_dark,
    },
  },
  primary: {
    contrastText: themeColorBlack850_dark,
    dark: themeColorBlue500,
    light: themeColorBlue200,
    main: themeColorBlue300_dark,
  },
  secondary: {
    contrastText: themeColorBlack850_dark,
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
    indicator: themeColorBlue300_dark,
  },
  text: {
    disabled: themeColorBlack300_dark,
    icon: themeColorBlack200_dark,
    primary: themeColorBlack50_dark,
    secondary: themeColorBlack200_dark,
  },
  textContrast: themeColorBlack50_dark,
  textSubtle: themeColorBlack200_dark,
  textVerySubtle: themeColorBlack300_dark,
  warning: {
    dark: themeColorGold700,
    light: themeColorGold400,
    main: themeColorGold600,
  },
  warningBackground: themeColorBlack700_dark,
  warningText: themeColorGold400,
} as const;

/**
 * Theme instance
 */
export const darkTheme = createUnifiedTheme({
  fontFamily: pageFontFamily,
  palette,
  defaultPageTheme: "home",
  pageTheme: createPagesTheme(palette),
  components: createComponentOverrides(palette),
  typography,
});
