import styled from 'styled-components';
import worldImage from '@/images/world.svg';
import {breakpoints} from 'components/grid/consts';

const World: React.FC = () => {
  return (
    <Root>
      <Image src={worldImage.src} alt="world" />
    </Root>
  );
};

export default World;

const Root = styled.div`
  padding: 0 4.8vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${breakpoints.down(breakpoints.lg)} {
    justify-content: center;
    margin-top: 60px;
  }
`;

const Image = styled.img`
  width: 18vw;

  @media ${breakpoints.down(breakpoints.lg)} {
    width: 60vw;
  }
`;
