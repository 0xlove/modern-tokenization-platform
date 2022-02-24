import React from 'react';
import styled from 'styled-components';
import SectionInfo from './section-info';
import Arrow from './arrow';
import Button from 'components/button';
import {breakpoints} from 'components/grid/consts';

export const RegisterTitle = (): JSX.Element => {
  return <Root>
    <HeaderContainer>
      <BackgroundCircle />
      <Header>
        Get timely access to all types of modern income today - 
        <span> register</span> on 
        the platform!
      </Header>
    </HeaderContainer>
    <SectionInfo margin="0">
      <Arrow />
      <Button primary primaryContent>Register</Button>
    </SectionInfo>
  </Root>;
};

const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: 5.2vw;
`;

const Root = styled.div`
  margin-bottom: 10vw;

  @media ${breakpoints.down(breakpoints.lg)} {
    margin-bottom: 20vw;
}
`;

const Header = styled.h2`
  color: #fff;
  font-size: clamp(2.2rem, 3.125vw, 3.75rem);
  line-height: 130%;
  font-weight: bold;
  text-transform: uppercase;
  filter: blur(0);
  max-width: 1250px;
  margin: 5.2vw auto;
  text-align: center;

  & > span {
    color: #C95CDD;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12vw;
  height: 9vw;
  border-radius: 50%;
  background: #5860F3;
  filter: blur(3vw);
`;
