import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';

export const COLORS = {
  primary: '#1E2022',
  secondary: '#302e53',
  third: '#D07017',
  white: '#ffffff',
};

export const FONTS = {
  body: 'Roboto Condensed',
};

const overrides = {
  colors: COLORS,
  fonts: FONTS,
  ...globalStyles,
};

const theme = extendTheme(overrides);

export { theme };
