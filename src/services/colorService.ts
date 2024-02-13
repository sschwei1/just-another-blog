export const availableColors = ['amber', 'blue', 'cyan', 'green', 'indigo', 'lime', 'noir', 'pink', 'purple', 'teal'] as const;
type ThemeColorTuple = typeof availableColors;

export type ThemeColor = ThemeColorTuple[number];
export type ThemeType = 'dark'|'light';

export type ThemeColorType = `${ThemeType}-${ThemeColor}`; 
export type ThemeString = `aura-${ThemeColorType}`;

export interface Theme {
    type: ThemeType;
    color: ThemeColor;
}

const colorCodeMapping = {
    dark: {
        amber: '#fbbf24',
        blue: '#60a5fa',
        cyan: '#22d3ee',
        green: '#34d399',
        indigo: '#818cf8',
        lime: '#a3e635',
        noir: '#fafafa',
        pink: '#f472b6',
        purple: '#a78bfa',
        teal: '#2dd4bf'
    },
    light: {
        amber: '#fbbf24',
        blue: '#60a5fa',
        cyan: '#22d3ee',
        green: '#34d399',
        indigo: '#818cf8',
        lime: '#a3e635',
        noir: '#020617',
        pink: '#f472b6',
        purple: '#a78bfa',
        teal: '#2dd4bf'
    }
};

export const getColorCode = (color: ThemeColor, type: ThemeType) => {
    const defaultColor = '#ffffff';

    return colorCodeMapping[type][color] ?? defaultColor;
}

export const getThemeString = (theme: Theme): ThemeString => `aura-${theme.type}-${theme.color}`;