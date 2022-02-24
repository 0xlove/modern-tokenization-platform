import {breakpoints} from 'components/grid/consts';
import styled from 'styled-components';
import Button from '.';

const HiddenButton = styled(Button)`
  display: none;

  @media ${breakpoints.down(breakpoints.md)} {
    display: flex;
  }
`;

export default HiddenButton;
