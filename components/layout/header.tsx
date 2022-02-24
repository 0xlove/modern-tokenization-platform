import Link from 'next/link';
import Logo from './logo';
import Navigation from './navigation';
import LanguageSelect from './languageSelect';
import {Container, Row, Col} from '../grid';

import styled from 'styled-components';
import Button from 'components/button';
import {breakpoints} from 'components/grid/consts';
import Burger from './burger';

const Header = () => <SHeader>
  <Container>
    <SRow>
      <SCol lg={3} md={12}>
        <div>
          <Link href='/'>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <Burger />
      </SCol>
      <SCol lg={4} >
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SCol>
      <Col lg={5}>
        <ButtonContainer>
          <LanguageSelect />
          <Button primary>Sing in</Button>
          <Button primary primaryContent>Get started</Button>
        </ButtonContainer>
      </Col>
    </SRow>
  </Container>
</SHeader>;

export default Header;

const NavigationContainer = styled.div`
  @media ${breakpoints.down(breakpoints.lg)} {
    display: none;
  }
`;

const SRow = styled(Row)`
  padding: 0 15px;
`;

const SCol = styled(Col)`
  position: relative;

  display: flex;
  align-items: center;

  @media ${breakpoints.down(breakpoints.lg)} {
    justify-content: space-between;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${breakpoints.down(breakpoints.lg)} {
    display: none;
  }
`;

export const SHeader = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #36324B;

  @media ${breakpoints.down(breakpoints.lg)} {
    padding: 10px 0;
  }
`;
