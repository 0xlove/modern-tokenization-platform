import styled from 'styled-components';
import {breakpoints, containerWidths} from './consts';

export const Container = styled.div`
  margin: 0 auto;

  max-width: 100%;

  @media ${breakpoints.up(breakpoints.sm)} {
    max-width: ${containerWidths.sm}px;
  }

  @media ${breakpoints.up(breakpoints.md)} {
    max-width: ${containerWidths.md}px;
  }

  @media ${breakpoints.up(breakpoints.lg)} {
    max-width: ${containerWidths.lg}px;
  }

  @media ${breakpoints.up(breakpoints.xl)} {
    max-width: ${containerWidths.xl}px;
  }

  @media ${breakpoints.up(breakpoints.xxl)} {
    max-width: ${containerWidths.xxl}px;
  }
`;
