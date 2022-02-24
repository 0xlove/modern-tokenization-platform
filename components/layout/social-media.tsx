import styled from 'styled-components';
import twitterIcon from '@/images/twitterIcon.svg';
import telegramIcon from '@/images/telegramIcon.svg';
import instagramIcon from '@/images/instagramIcon.svg';
import {breakpoints} from 'components/grid/consts';

const SocialMedia: React.FC = () => {
  return (
    <Root>
      <a>
        <Icons><Image src={twitterIcon.src} alt='twitter icon'/></Icons>
      </a>
      <a>
        <Icons><Image src={telegramIcon.src} alt='telegram icon'/></Icons>
      </a>
      <a>
        <Icons><Image src={instagramIcon.src} alt='instagram icon'/></Icons>
      </a>
    </Root>
  );
};

export default SocialMedia;

const Icons = styled.div`
  position: relative;

  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;

  background: linear-gradient(274.26deg, #4E60F4 0%, #CF5BDB 101.33%);
  z-index: 10;
  
  border-radius: 50%;
  
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    content: '';
    height: 96%;
    width: 96%;
    background: linear-gradient(274.26deg, #4E60F4 0%, #CF5BDB 101.33%);
    border-radius: 50%;
    z-index: 1;
  }

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    content: '';
    height: 96%;
    width: 96%;
    background: black;
    border-radius: 50%;
    z-index: 2;
    opacity: 0;

    transition: opacity 200ms ease-in-out;
  }

  &:hover :before {
    opacity: 1;
  }

  @media ${breakpoints.up(breakpoints.lg)} {
    width: 60px;
    height: 60px;
  }
`;

const Root = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  
  grid-gap: 30px;
`;

const Image = styled.img`
  position: relative;
  max-width: 60%;
  z-index: 3;
`;

