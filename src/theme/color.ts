export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
};

const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const grayscaleShades = {
  black: '#000000',
  white: '#FFFFFF',
  gray1: '#1A1A1A',
  gray2: '#333333',
  gray3: '#4D4D4D',
  gray4: '#666666',
  gray5: '#808080',
  gray6: '#999999',
  gray7: '#B3B3B3',
  gray8: '#CCCCCC',
  gray9: '#E6E6E6',
};

const Colors: ColorPalettes = {
  dark: {
    primary: grayscaleShades.black,
    secondary: grayscaleShades.gray3,
    textPrimary: sharedColors.white,
    textSecondary: grayscaleShades.gray6,
    ...grayscaleShades,
  },
  light: {
    primary: grayscaleShades.white,
    secondary: grayscaleShades.gray8,
    textPrimary: grayscaleShades.gray2,
    textSecondary: grayscaleShades.gray5,
    ...grayscaleShades,
  },
};

export default Colors;
