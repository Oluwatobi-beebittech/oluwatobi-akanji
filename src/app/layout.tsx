import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/theme';
import { StyledThemeProvider } from '@/lib';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledThemeProvider>
          {children}
        </StyledThemeProvider>
      </body>
    </html>
  )
}