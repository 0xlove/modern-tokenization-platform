import {Container, Row, Col} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Header2, Paragraph2} from 'components/typography';
import {StrapiImage} from 'src/interface';
import styled from 'styled-components';
import {getStrapiMedia} from 'utils/api';

interface MainHeadlineProps {
  id?: number;
  description?: string;
  headline?: string;
  cover?: StrapiImage;
  staticImage?: string;
  hasBackground?: boolean;
}

const MainHeadline: React.FC<MainHeadlineProps> = ({
  description,
  headline,
  cover,
  staticImage,
  hasBackground = false,
}) => {
  
  const imageUrl = cover ? getStrapiMedia(cover.url) : staticImage;

  return (  
    <Root>
      <Container>
        <Row>
          <AlignCol lg={6} md={7}>
            {hasBackground && <BackgroundCircle />}
            <HeadLineContainer>
              <Headline>
                {headline}
              </Headline>
              <Description>
                {description}
              </Description>
            </HeadLineContainer>
          </AlignCol>
          <Col lg={4} md={3}>
            <ImageContainer>
              <Image
                alt={cover ? cover.alternativeText : 'image'}
                src={imageUrl as string}
              />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const AlignCol = styled(Col)`
  align-items: center;
`;

const Headline = styled(Header2)`
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

export default MainHeadline;

const Description = styled(Paragraph2)`
  position: static;
  max-width: 30%;
  font-size: clamp(0.9rem, 1.25vw, 24px);

  @media ${breakpoints.down(breakpoints.md)} {
    max-width: 100%;
    text-align: center;
  }
`;

export const Root = styled.div`
  padding: min(7vw, 140px) 0;
  border-bottom: 1px solid #36324B;
  `;

const Image = styled.img`
  border-radius: 24px;
  width: clamp(300px, 30.7vw, 600px);
  height: clamp(200px, 20.8vw, 400px);
`;

const ImageContainer = styled.div`
  margin: 0 14px;

  @media ${breakpoints.down(breakpoints.md)} {
    margin: unset;
    margin-top: 20px;
    display: grid;
    place-items: center;
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
  top: 250px;
  left: 15%;
  width: clamp(200px, 15vw, 300px);
  height: clamp(200px, 15vw, 300px);
  background-color: #5860F3;
  filter: blur(200px);
  transform: translateY(-50%);
  z-index: 0;
`;
