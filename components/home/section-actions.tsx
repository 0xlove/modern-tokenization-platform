import {breakpoints} from 'components/grid/consts';
import styled from 'styled-components';

const SectionActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;

  @media ${breakpoints.down(breakpoints.md)} {
    display: grid;
    row-gap: 15px;
  }
`;

export default SectionActions;
