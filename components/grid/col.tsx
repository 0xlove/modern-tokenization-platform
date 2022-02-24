import styled from 'styled-components';
import {breakpoints, gridSize} from './consts';

interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const colWidth = (width: number): string => `${width / gridSize * 100}%`;

export const Col = styled.div<ColProps>`
  display: flex;
  flex: 0 0 auto;
  width: 100%;

  ${({sm}) => sm && `
    @media ${breakpoints.up(breakpoints.sm)} {
      width: ${colWidth(sm)};
    }
  `}

  ${({md}) => md && `
    @media ${breakpoints.up(breakpoints.md)} {
      width: ${colWidth(md)};
    }
  `}

  ${({lg}) => lg && `
    @media ${breakpoints.up(breakpoints.lg)} {
      width: ${colWidth(lg)};
    }
  `}

  ${({xl}) => xl && `
    @media ${breakpoints.up(breakpoints.xl)} {
      width: ${colWidth(xl)};
    }
  `}

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
`;
