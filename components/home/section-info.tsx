import {breakpoints} from 'components/grid/consts';
import styled from 'styled-components';

interface SectionInfoProps {
  margin?: string
}

const SectionInfo = styled.div<SectionInfoProps>`
  position: relative;
  text-align: center;
  font-size: 20px;
  margin: ${({margin}) => margin? margin : '37px 0 0 0 '};
  display: flex;
  justify-content: center;

  @media ${breakpoints.down(breakpoints.md)} {
    margin: 40px 0;
  }
`;

export default SectionInfo;
