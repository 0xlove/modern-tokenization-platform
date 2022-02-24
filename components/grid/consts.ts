export const gridSize = 12;

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,

  down(px: number): string {
    return `only screen and (max-width: ${px - 1}px)`;
  },

  up(px: number): string {
    return `only screen and (min-width: ${px}px)`;
  }
};

export const containerWidths = {
  sm: 540,
  md: 740,
  lg: 960,
  xl: 1140,
  xxl: 1540,
};
