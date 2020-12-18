// 📐 Layout
export const GUTTER = 15;
export const GRID_GUTTER_XS = 10;
export const GRID_GUTTER_M = 20;
export const GRID_GUTTER_L = 30;
export const HEADER_MOBILE_HEIGHT = 84;

export const BREAKPOINTS = {
    xs: 400 + GRID_GUTTER_XS * 2,
    s: 580 + GRID_GUTTER_XS * 2,
    m: 768 + GRID_GUTTER_M * 2,
    l: 960 + GRID_GUTTER_L * 2,
    xl: 1100 + GRID_GUTTER_L * 2,
    xxl: 1280 + GRID_GUTTER_L * 2,
    threexl: 1400 + GRID_GUTTER_L * 2
};

// 💫 Animations
export const DURATION = {
    short: 0.25,
    medium: 0.5,
    long: 0.8,
    huge: 1.1
};

export const EASE = {
    easeOut: 'power1.out',
    easeIn: 'power1.in',
    easeInOut: 'power1.inOut'
};
