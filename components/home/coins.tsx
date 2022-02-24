import styled from 'styled-components';
import ethImage from '@/images/eth.png';
import threeDImage from '@/images/3d.png';
import {breakpoints} from 'components/grid/consts';

const Coins: React.FC = () => {
  return (
    <Root>
      <CointsContainer>
        <BackgroundCircle />

        <EthImage src={ethImage.src} alt="ETH" />
        <ThreeDImage src={threeDImage.src} alt="3D" />
      </CointsContainer>
    </Root>
  );
};

export default Coins;

const Root = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  @media ${breakpoints.up(breakpoints.lg)} {
    padding: 5.2vw 0 5.2vw 7.8125vw;
  }

  @media ${breakpoints.up(breakpoints.xl)} and (max-height: 1200px) {
    min-height: calc(100vh - 100px);
  }
`;

const CointsContainer = styled.div`
  position: relative;

  width: 59vw;
  height: 59vw;

  @media ${breakpoints.up(breakpoints.lg)} {
    width: 33.75vw;
    height: 33.75vw;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 57.87%;
  height: 57.87%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: blur(10vw);
  background: #C95CDD;
`;

const EthImage = styled.img`
  position: absolute;
  width: 58%;
  height: 58%;
  right: 0;
  top: 0;
  transform: scaleZ(-1);
`;

const ThreeDImage = styled.img`
  position: absolute;
  width: 58%;
  height: 58%;
  left: 0;
  bottom: 0;
`;
