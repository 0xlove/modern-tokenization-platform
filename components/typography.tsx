import styled, {css} from 'styled-components';
import {theme} from '../styles/theme';
import {breakpoints} from './grid/consts';

const Text = css`
  font-family: 'Montserrat-Ace', sans-serif;
  color: inherit;
  line-height: 160%;
`;

const Header = css`
  ${Text}
  font-weight: bold;

  @media ${breakpoints.down(breakpoints.md)} {
    text-align: center;
  }
`;

const ActionText = css`
  ${Text}
  color: ${theme.colors.text};
  font-weight: 600;

  font-size: clamp(1rem, 1vw, 1.25rem);

  @media ${breakpoints.down(breakpoints.lg)} {
    font-size: 1rem;
  }
`;

export const Header1 = styled.h1`
  ${Header}
  line-height: 120%;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  font-size: 100px;
`;

export const Header2 = styled.h2`
  ${Header}
  line-height: 130%;
  text-transform: uppercase;

  font-size: clamp(1.5rem, 3.125vw, 3.75rem);
`;

export const Header3 = styled.h3`
  ${Header}
  line-height: 130%;

  font-size: clamp(1.5rem, 3.125vw, 2.5rem);
  text-transform: uppercase;
`;

export const Header4 = styled.h4<{uppercase?: boolean}>`
  ${Header}
  line-height: 160%;
  font-weight: 500;
  margin-bottom: 17px;

  font-size: 24px;

  @media ${breakpoints.down(breakpoints.md)} {
    text-align: left;
  }
`;

export const Paragraph1 = styled.p`
  ${Text}

  font-size: clamp(1.2rem, 1.250vw, 1.5rem);
`;

export const Paragraph2 = styled.p`
  ${Text}

  font-size: clamp(1rem, 1vw, 1.25rem);
`;

export const Paragraph3 = styled.p`
  ${Text}

  font-size: 18px;
`;

export const ButtonText = styled.span`
  ${ActionText}
`;

export const LinkText = styled.span`
  ${ActionText}

  transition: color 300ms ease-in-out;

  &:hover {
    color: ${theme.colors.hoverText}
  }
`;
