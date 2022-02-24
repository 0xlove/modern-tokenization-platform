import {Col, Container, Row} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Header2, Paragraph2} from 'components/typography';
import styled from 'styled-components';

interface HeadlineProps {
  imageUrl: string;
  headline: string;
  description: string;
}

const Headline: React.FC<HeadlineProps> = ({
  imageUrl,
  headline,
  description
}) => {
  return (
    <Root>
      <Container>
        <Row>
          <AlignCol lg={6} md={7}>
            <HeadLineContainer>
              <SHeadline>
                {headline}
              </SHeadline>
              <Description>
                {description}
              </Description>
            </HeadLineContainer>
          </AlignCol>
          <Col lg={4} md={3}>
            <ImageContainer>
              <Image
                alt={'ping pong'}
                src={imageUrl}
              />
              <BackgroundCircle />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default Headline;

const AlignCol = styled(Col)`
  align-items: center;
`;

const Image = styled.img`
  margin-left: 25%;
  width: clamp(9.6rem, 22.5vw, 27rem);
  height: clamp(9.6rem, 22.5vw, 27rem);

  @media ${breakpoints.down(breakpoints.md)} {
    margin-left: 0;
  }
`;

const SHeadline = styled(Header2)`
  position: relative;
  color: #4E60F4;

  &::before {
    position: absolute;
    content: '';
    left: -15px;
    top: 50%;

    transform: translateY(-50%);
    height: 60px;
    width: 4px;
    background-color:#4E60F4;

    @media ${breakpoints.down(breakpoints.md)} {
      display: none
    }
  }
`;

const Description = styled(Paragraph2)`
  position: static;
  max-width: 30%;
  font-size: clamp(0.9rem, 1.25vw, 24px);

  @media ${breakpoints.down(breakpoints.md)} {
    max-width: 100%;
    text-align: center;
  }
`;

const Root = styled.div`
  padding: min(7vw, 140px) 0;
  border-bottom: 1px solid #36324B;
`;

const ImageContainer = styled.div`
  position: relative;
  
  margin: 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.down(breakpoints.md)} {
    margin-top: 40px;
  }
`;

const HeadLineContainer = styled.div`
  position: absolute;
  left: 17.5%;
  display: grid;
  align-items: center;
  row-gap: 24px;
  margin-left: 14px;

  @media ${breakpoints.down(breakpoints.md)} {
    position: static;
    margin-left: 0;
    padding: 0 10px;
    text-align: center;
  }
`;

const BackgroundCircle = styled.div` 
  position: absolute;
  top: 15%;
  left: 15%;
  width: clamp(10rem, 11.5vw, 13rem);
  height: clamp(10rem, 11.5vw, 13rem);
  border-radius: 50%;
  filter: blur(200px);
  background-color: #C95CDD;

  @media ${breakpoints.down(breakpoints.lg)} {
    left: -15%;
    top: 5%;
    width: 150px;
    height: 150px;
    filter: blur(100px);
  }

  @media ${breakpoints.down(breakpoints.md)} {
    left: 50%;
    top: 5%;
    width: 150px;
    height: 150px;
    filter: blur(100px);

    transform: translate(-50%);
  }
`;
