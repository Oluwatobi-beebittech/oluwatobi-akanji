import 'styled-components';
import { AppTheme, ThemeType } from '@/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}