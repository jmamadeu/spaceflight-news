import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';

export const COLORS = {
  primary: '#1E2022',
  secondary: '#302e53',
  third: '#D07017',
  darkWhite: '#f0f0f0',
};

export const FONTS = {
  body: 'Roboto Condensed',
};

const overrides = {
  colors: COLORS,
  fonts: FONTS,
  ...globalStyles,
};

export default extendTheme(overrides);
