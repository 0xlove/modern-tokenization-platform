import styled from 'styled-components';
import {breakpoints} from './grid/consts';

interface RootProps {
  children: React.ReactNode
}

const Root: React.FC<RootProps> = ({children}) => {
  return (
    <SRoot>
      <LineLeft />
      <Line />
      <LineRight />
      <ZIndex>
        {children}
      </ZIndex>
    </SRoot>
  );
};

const SRoot = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
`;

const ZIndex = styled.div`
  position: relative;
  z-index: 1;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: #36324B;
  z-index: 0;

  @media ${breakpoints.down(breakpoints.md)} {
    display: none;
  }
`;

const LineLeft = styled(Line)`
  left: 17.5%;
`;

const LineRight = styled(Line)`
  left: 82.5%;
`;

export default Root;
