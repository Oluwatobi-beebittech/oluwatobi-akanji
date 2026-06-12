import { theme } from './Theme';

export const fontFamily = <K extends keyof typeof theme['font']['family']>(type: K) => ({ theme }) => theme.font.family[type];
export const fontSize = <K extends keyof typeof theme['font']['size']>(size: K) => ({ theme }) => theme.font.size[size];
export const colour = <K extends keyof typeof theme['colour']>(variant: K) => ({ theme }) => theme.colour[variant];
export const space = <K extends keyof typeof theme['spacing']>(space: K) => ({ theme }) => theme.spacing[space];