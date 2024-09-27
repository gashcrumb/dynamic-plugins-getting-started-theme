export const pageFontFamily = 'RedHatText, helvetica, arial, sans-serif';
export const headerFontFamily = 'RedHatDisplay';
export const htmlFontSize = 16;
export const fontWeight: number = 400;
export const marginBottom: number = 8;

/**
 * Typography definition, shared by themes
 */
export const typography = {
  fontFamily: pageFontFamily,
  htmlFontSize,
  h1: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom,
  },
  h2: {
    fontSize: 20,
    fontWeight,
    marginBottom,
  },
  h3: {
    fontSize: 18,
    fontWeight,
    marginBottom,
  },
  h4: {
    fontSize: 16,
    fontWeight,
    marginBottom,
  },
  h5: {
    fontSize: 16,
    fontWeight,
    marginBottom,
  },
  h6: {
    fontSize: 16,
    fontWeight,
    marginBottom,
  },
} as const;

// base color palette entries
export const themeColorBlue200 = '#73bca7';
export const themeColorBlue300 = '#2b9aa3';
export const themeColorBlue400 = '#00669c';
export const themeColorBlue500 = '#004030';
export const themeColorGold50 = '#fdf207';
export const themeColorGold400 = '#f0ab05';
export const themeColorGold600 = '#795600';
export const themeColorGold700 = '#3d2c00';
export const themeColorGreen50 = '#f3faa2';
export const themeColorGreen200 = '#95d52e';
export const themeColorGreen400 = '#5ba302';
export const themeColorGreen600 = '#1e4f08';
export const themeColorPurple200 = '#b2a3af';
export const themeColorPurple300 = '#a18faf';
export const themeColorPurple400 = '#847681';
export const themeColorRed100 = '#a9194b';
export const themeColorRed200 = '#a30030';
export const themeColorRed400 = '#470020';
export const themeColorWhite = '#fff3f3';

// light color greys
export const themeColorBlack100 = '#faf3f3';
export const themeColorBlack150 = '#f5e7e7';
export const themeColorBlack200 = '#f0e4e4';
export const themeColorBlack300 = '#d2c2c2';
export const themeColorBlack400 = '#b89a9a';
export const themeColorBlack500 = '#8a8a8a';
export const themeColorBlack600 = '#6a6a6e';
export const themeColorBlack700 = '#4f4b50';
export const themeColorBlack800 = '#3c3c3e';
export const themeColorBlack900 = '#153030';
export const themeColorBlack1000 = '#032828';

// dark color greys
export const themeColorBlack50_dark = '#e0e0e0';
export const themeColorBlack100_dark = '#c6c7c8';
export const themeColorBlack200_dark = '#aaabac';
export const themeColorBlack300_dark = '#868789';
export const themeColorBlack400_dark = '#57585a';
export const themeColorBlack500_dark = '#444548';
export const themeColorBlack600_dark = '#36373a';
export const themeColorBlack700_dark = '#26292d';
export const themeColorBlack800_dark = '#1b1d21';
export const themeColorBlack850_dark = '#212427';
export const themeColorBlack900_dark = '#0f1214';
export const themeColorBlack1000_dark = '#030303';

// dark theme color overrides
export const themeColorRed9999_dark = '#fe4e3e';
export const themeColorRed8888_dark = '#ff6e62';
export const themeColorBlue300_dark = '#1fa2f3';

// box shadows
export const themeBoxShadowSm =
  '0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06)';
export const themeBoxShadowLg =
  '0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08)';
