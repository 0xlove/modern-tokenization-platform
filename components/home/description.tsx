import Button from '../button';
import React from 'react';
import styled from 'styled-components';
import {breakpoints} from 'components/grid/consts';
import HiddenButton from 'components/button/hiden-button';
import {useRouter} from 'next/dist/client/router';

const DescriptionCmp: React.FC = () => {
  const router = useRouter();
  
  const path = 'additional-pages/description-of-tokenization-platform';

  return (
    <Root>
      <HeaderContainer>
        <BackgroundCircle />
        <Header>Modern tokenization platform</Header>
      </HeaderContainer>
      <Description>
        Asset tokenization platforms are used by financial institutions and
        institutional investors. Tokens turn art into a commodity, allows
        VC investors to monitor their investments without an
        intermediary and when tied to an external reference provide liquidity
        for crypto exchanges.
      </Description>

      <Actions>
        <HiddenButton primary primaryContent>Get started</HiddenButton>
        <HiddenButton 
          primary
          onClick={() => {
            router.push(path);
          }} 
        >
          Read more
        </HiddenButton>
        <ButtonToHide primary>Get started</ButtonToHide>
        <ButtonToHide onClick={() => {
          router.push(path);
        }}>Read more</ButtonToHide>
      </Actions>
    </Root>
  );
};

export default DescriptionCmp;

const ButtonToHide = styled(Button)`
  @media ${breakpoints.down(breakpoints.md)} {
    display: none;
  }
`;

const Header = styled.h1`
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FFFFFF;
  filter: blur(0);

  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media ${breakpoints.up(breakpoints.md)} {
    font-weight: bold;
    font-size: 5.2vw;
    text-align: center;
  }

  @media ${breakpoints.up(breakpoints.lg)} {
    font-weight: bold;
    font-size: 5.2vw;
    text-align: left;
  }
`;

const Description = styled.h2`
  font-style: normal;
  font-weight: normal;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  filter: blur(0);

  font-size: 14px;
  text-align: center;
  margin-top: 14px;

  @media ${breakpoints.up(breakpoints.lg)} {
    margin-top: 0;
    font-size: 1.25vw;
    text-align: left;
  }
`;

const Root = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 42px 16px 38px;

  @media ${breakpoints.up(breakpoints.lg)} {
    padding: 0;
  }

  @media ${breakpoints.up(breakpoints.xl)} and (max-height: 1200px) {
    min-height: calc(100vh - 100px);
  }
`;

const HeaderContainer = styled.div`
  position: relative;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 33px;

  @media ${breakpoints.down(breakpoints.lg)} {
    justify-content: center;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    display: grid;
    row-gap: 15px;
  }
`;

const BackgroundCircle = styled.span`
  display: inline-block;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: #5860F3;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-100%, -50%);
  filter: blur(5vw);
`;
