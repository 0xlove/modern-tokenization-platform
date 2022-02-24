export interface Theme {
  colors: {
    bg: string,
    text: string,
    hoverText: string,
    hoverButton: string,
    primaryBG: string,
  }
};

export const theme: Theme = {
  colors: {
    bg: '#171522',
    text: '#fff',
    hoverText: '#4E60F4',
    hoverButton: 'linear-gradient(274.26deg, #4E60F4 0%, #CF5BDB 101.33%)',
    primaryBG: '#22202F',
  }
};
