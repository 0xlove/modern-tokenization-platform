import styled from 'styled-components';
import arrowImage from '@/images/arrow.png';
import {breakpoints} from 'components/grid/consts';

const Arrow = (): JSX.Element => {
  return (
    <Root>
      <Image src={arrowImage.src} alt="arrow"/>
    </Root> 
  );
};

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${breakpoints.down(breakpoints.lg)} {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
}
`;

const Image = styled.img`
  width: 8vw;
  max-width: 250px;
  min-width: 115px;
`;

export default Arrow;
