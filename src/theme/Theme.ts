const colour: Record<string, string> = {
    purple: '#DFB5FF',
    lightpurple: '#F5E8FF',
    yellow: '#FFDFB5',
    lightyellow: '#FFF5E8',
    charcoalGray: '#121212',
    white: '#fff'
}

type Theme = {
    colour: Record<string, string>;
    font: {
        family: Record<string, string>;
        size: Record<string, string>;
    }
};

export const theme: Theme = {
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
            heading: 'Rowdies',
            body: 'Manrope'
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
    }
}