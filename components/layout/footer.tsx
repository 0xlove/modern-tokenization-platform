import styled from 'styled-components';
import {Container, Col, Row} from 'react-grid-system';
import Logo from './logo';
import FooterNavigation from './footer-navigation';
import SocialMedia from './social-media';
import FooterDescription from './footer-description';
import {breakpoints} from 'components/grid/consts';

const Footer = (): JSX.Element => {
  return <Root>
    <Container>
      <Row>
        <Col lg={4.5}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Col>
        <AlignCol lg={5}>
          <FooterNavigation />
        </AlignCol>
        <JustifyCol lg={2}>
          <SocialMedia />
        </JustifyCol>
      </Row>
    </Container>
    <Description>
      <Container>
        <Col>
          <FooterDescription />
        </Col>
      </Container> 
    </Description>
    <Description>
      <Container>
        <Col>
          <Copyright>
            Copyright © 2021 Crypto. All rights reserved
          </Copyright>
        </Col>
      </Container>
    </Description>
  </Root>;
};

export default Footer;

const LogoContainer = styled.div`
  @media ${breakpoints.down(breakpoints.lg)} {
    display: none;
  }
`;

const Root = styled.footer`
  padding: 20px 0;
  border-top: 1px solid #36324B;
`;

const JustifyCol = styled(Col)`
  display: flex;
  align-content: center;
  justify-content: flex-end;

  @media ${breakpoints.down(breakpoints.lg)} {
    margin: 40px 0;
    justify-content: center;
  }
`;

const AlignCol = styled(Col)`
  display: flex;
  align-content: center;

  @media ${breakpoints.down(breakpoints.lg)} {
    margin: 20px 0;
    justify-content: center;
  }
`;

const Description = styled.div`
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid #36324B;
`;

const Copyright = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.125rem;
  line-height: 160%;
  text-align: center;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 240px;
  height: 240px;

  background: #C95CDD;
  filter: blur(400px);
  border-radius: 50%;
`;
