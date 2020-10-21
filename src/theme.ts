import { ThemedStyledProps } from 'styled-components';

export interface Theme {
  colorAurora60: string;
  colorAurora80: string;
  colorAurora100: string;
  colorAurora120: string;
  colorBlue120: string;
  colorBlue10: string;
  colorBlue20: string;
  colorBlue40: string;
  colorBlue80: string;
  colorRed80: string;
  colorRed100: string;
  colorRed120: string;
  colorGreen100: string;
  colorPurple80: string;
  colorPurple100: string;
  colorCerise100: string;
  colorCerise80: string;
  colorOrange100: string;
  colorLavender100: string;
  colorPink100: string;
  colorYellow100: string;
  colorForeground: string;
  colorGray: string;
  colorGrayLight: string;
  colorOffWhite: string;
  colorGrayVeryLight: string;
  colorPrimary: string;
  colorDisabled: string;
  colorDanger: string;
  colorSuccess: string;
  colorInfo: string;
  colorWarning: string;
  fontFamilyBase: string;
  fontSizeBase: string;
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string;
  fontSizeH4: string;
  fontSizeButton: string;
  fontSizeInput: string;
  fontSizeLabel: string;
  fontSizeSmall: string;
  paddingSubmitRow: string;
  breakpoints: {
    [key: string]: number;
  };
}

// tslint:disable:object-literal-sort-keys
export const defaultTheme: Theme = {
  colorAurora60: '#7fe4de',
  colorAurora80: '#54dbd3',
  colorAurora100: '#2ad2c9',
  colorAurora120: '#00bfb3',
  colorBlue120: '#171c8f',
  colorBlue10: '#e7eaf5',
  colorBlue20: '#cbd3eb',
  colorBlue40: '#9faee5',
  colorBlue80: '#485cc7',
  colorRed80: '#d0021b',
  colorRed100: '#a60115',
  colorRed120: '#7c0110',
  colorGreen100: '#00aa2b',
  colorPurple80: '#a76fe3',
  colorPurple100: '#933cdc',
  colorCerise100: '#ed1e77',
  colorCerise80: '#ff7c9a',
  colorOrange100: '#f7931e',
  colorLavender100: '#bda4ea',
  colorPink100: '#f7889b',
  colorYellow100: '#ffd200',
  colorDanger: '#d0021b',
  colorForeground: '#484848',
  colorGray: '#969696',
  colorGrayLight: '#bebebe',
  colorGrayVeryLight: '#f0f0f0',
  colorOffWhite: '#f8f8f8',
  colorInfo: '#1e22aa',
  colorDisabled: '#969696',
  colorPrimary: '#1e22aa',
  colorSuccess: '#1e22aa',
  colorWarning: '#f7931e',
  fontFamilyBase: "'Circular Pro', Arial, sans-serif",
  fontSizeBase: '0.9375rem',
  fontSizeH1: '2.25rem',
  fontSizeH2: '1.5rem',
  fontSizeH3: '1.125rem',
  fontSizeH4: '0.9375rem',
  fontSizeButton: '0.9375rem',
  fontSizeInput: '0.9375rem',
  fontSizeLabel: '0.9375rem',
  fontSizeSmall: '0.75rem',
  paddingSubmitRow: '3rem 0 0',
  breakpoints: {
    phone: 0,
    tablet: 37.5,
    desktop: 52.5,
    desktopHD: 80,
  },
};

export type ThemeColor =
  | 'colorAurora60'
  | 'colorAurora80'
  | 'colorAurora100'
  | 'colorAurora120'
  | 'colorBlue120'
  | 'colorBlue10'
  | 'colorBlue20'
  | 'colorBlue40'
  | 'colorBlue80'
  | 'colorRed80'
  | 'colorRed100'
  | 'colorRed120'
  | 'colorGreen100'
  | 'colorPurple80'
  | 'colorPurple100'
  | 'colorCerise100'
  | 'colorCerise80'
  | 'colorOrange100'
  | 'colorLavender100'
  | 'colorPink100'
  | 'colorYellow100'
  | 'colorDanger'
  | 'colorForeground'
  | 'colorGray'
  | 'colorGrayLight'
  | 'colorGrayVeryLight'
  | 'colorOffWhite'
  | 'colorInfo'
  | 'colorDisabled'
  | 'colorPrimary'
  | 'colorSuccess'
  | 'colorWarning';

// Use this to help the type-checker when it can't figure out the type of
// interpolated props.
export type ThemedProps<P> = ThemedStyledProps<P, Theme>;
