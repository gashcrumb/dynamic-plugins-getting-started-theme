import React, { ReactNode } from 'react';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { UnifiedThemeProvider } from '@backstage/theme';

export const lightThemeProvider = ({ children }: { children: ReactNode }) => (
  <UnifiedThemeProvider theme={lightTheme} children={children} />
);

export const darkThemeProvider = ({ children }: { children: ReactNode }) => (
  <UnifiedThemeProvider theme={darkTheme} children={children} />
);
