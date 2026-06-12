const colour: Record<string, string> = {
    purple: '#DFB5FF',
    lightpurple: '#F5E8FF',
    yellow: '#FFDFB5',
    lightyellow: '#FFF5E8',
    charcoalGray: '#121212',
    white: '#fff'
}

export interface AppTheme {
    colour: Record<string, string>;
    font: {
        family: Record<string, string>;
        size: Record<string, string>;
    };
    spacing: Record<string, string>;
};

export const theme = {
    colour: {
        primary: colour.purple,
        primaryLight: colour.lightpurple,
        secondary: colour.yellow,
        secondaryLight: colour.lightyellow,
        black: colour.charcoalGray,
        white: colour.white
    },
    font: {
        family: {
            heading: "'Rowdies', Impact, 'Arial Black', sans-serif",
            body: "'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        },
        size: {
            base: '16px',
            small: '16px',
            medium: '24px',
            large: '32px',
            xLarge: '48px',
            xxLarge: '64px',
            xxxLarge: '128px'
        }
    },
    spacing: {
        'space-0': '0px',
        'space-px': '1px',
        'space-1': '4px',
        'space-2': '8px',
        'space-3': '12px',
        'space-4': '16px',
        'space-5': '20px',
        'space-6': '24px',
        'space-8': '32px',
        'space-10': '40px',
        'space-12': '48px',
        'space-16': '64px',
        'space-20': '80px',
        'space-24': '96px'
    }
}

export type ThemeType = typeof theme;