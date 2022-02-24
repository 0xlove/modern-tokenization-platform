import {Root} from 'components/additional-pages/strapi/main-headline';
import Button from 'components/button';
import {Col, Container, Row} from 'components/grid';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {Header2, Paragraph1} from 'components/typography';
import cubImage from '@/images/cub.png';
import {breakpoints} from 'components/grid/consts';

interface HeaderProps {
  name: string;
  address: string;
}

const Header: React.FC<HeaderProps> = ({name, address}) => {
  const router = useRouter();

  const viewAllHandler = () => {
    router.push('/vacancies');
  };
  
  const applyNowHandler = () => {
    // router.push(`${router.asPath}#form`);
  };
  
  return ( 
    <Root>
      <Container>
        <JustifyRow>
          <Col lg={9}>
            <HeaderContainer>
              <Action>
                <Button
                  onClick={applyNowHandler} 
                  primary
                  primaryContent
                >
                  Apply now
                </Button>
                <Button onClick={viewAllHandler}>View all jobs</Button>
              </Action>
            </HeaderContainer>
          </Col>
          <Col lg={9}>
            <TitleContainer>
              <Title>
                <SHeader>
                  {name}
                </SHeader>
                <SParagraph>{address}</SParagraph>
              </Title>
              <ImageContainer>
                <BackgroundCircle />
                <Image src={cubImage.src} alt={'cub'}/>
              </ImageContainer>
            </TitleContainer>
          </Col>
        </JustifyRow>
      </Container>
    </Root>
  );
};

export default Header;

const Action = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.down(breakpoints.md)} {
    display: grid;
    margin-top: 40px;
    gap: 20px;
    justify-content: center;
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  gap: 40px;
`;

const JustifyRow = styled(Row)`
  justify-content: center;

  @media ${breakpoints.down(breakpoints.md)} {
    flex-direction: column-reverse;
  }
`;

const SHeader = styled(Header2)`
  color: #4E60F4;
`;

const Title = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  justify-self: flex-end;
  margin-top: 15%;

  @media ${breakpoints.down(breakpoints.md)} {
    justify-self: center;
  }
`;

const Image = styled.img`
  width: 240px;
  height: 190px;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 3fr;

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: 1fr;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  top: 0;
  left: -20%;
  width: 180px;
  height: 180px;
  background: #5860F3;
  filter: blur(140px);
`;

const SParagraph = styled(Paragraph1)`

@media ${breakpoints.down(breakpoints.md)} {
    text-align: center;
  }
`;
