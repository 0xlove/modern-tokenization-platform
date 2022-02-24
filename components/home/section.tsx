import {breakpoints} from 'components/grid/consts';
import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  anchor?: string;
}

const Section: React.FC<SectionProps> = ({title, children, anchor}) => {
  return (
    <Root id={anchor}>
      <HeaderContainer>
        <BackgroundCircle />
        <Header>{title}</Header>
      </HeaderContainer>
      <Description>{children}</Description>
    </Root>
  );
};

export default Section;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.4vw 0;
  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: clamp(1rem ,1.25vw, 1.5rem);
  line-height: 160%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;


  p {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    max-width: 40vw;

    @media ${breakpoints.down(breakpoints.md)} {
      max-width: 80vw;
    }
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: min(140px, 5.4vw);

  @media ${breakpoints.down(breakpoints.md)} {
    margin-bottom: 25px;
  }
`;

export const BackgroundCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width:  5.2vw;
  height: 5.2vw;
  border-radius: 50%;
  background: #5860F3;
  filter: blur(3vw);
`;

export const Header = styled.h2`
  font-family: inherit;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(1.5rem,3.125vw, 3.75rem);
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
  filter: blur(0);

  &:after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 59px;
    height: 5px;
    background: #4E60F4;
    border-radius: 100px;
  }
`;

const Description = styled.p`

`;
