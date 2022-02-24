import {breakpoints} from 'components/grid/consts';
import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Chip = styled.button<{selected?: boolean}>`
  cursor: pointer;
  background: #22202F;
  border-radius: 100px;
  border: none;
  padding: 14px 32px;
  font-family: inherit;
  font-weight: 600;
  font-size: clamp(0.875rem, 1.042vw, 1.25rem);
  line-height: 160%;
  color: ${theme.colors.text};
  margin: 0 12px;
  white-space: nowrap;

  ${({selected}) => selected && `
    color: #4E60F4;
  `}

  ${({disabled}) => disabled && `
    cursor: initial;
    opacity: 0.5;
  `}
`;

export const ChipGroup = styled.div<{split?: boolean}>`
  display: inline-flex;
  margin: 0 -12px;

  ${({split}) => split && `
    margin: 0;
    border-radius: 100px;
    overflow: hidden;

    ${Chip} {
      margin: 0;
      border-radius: 0;
      min-width: 120px;
    }

    ${Chip} + ${Chip} {
      border-left: 1px solid #36324B;
    }
  `}

  @media ${breakpoints.down(breakpoints.md)} {
    display: flex;
    flex-wrap: wrap;

    & > * {
      flex: 1 1 50%;
      max-width: 50%;
      padding: 3px;
    }

    ${Chip} {
      width: 100%;
      margin: 0;
    }
  }
`;
