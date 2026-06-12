"use client";

import { ThemeProvider } from 'styled-components';
import { theme, FontFaces, GlobalStyle } from '@/theme'; // Adjust based on your aliases

export const StyledThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <FontFaces />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}