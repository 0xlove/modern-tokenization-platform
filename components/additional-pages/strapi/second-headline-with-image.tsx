import {Container, Row, Col} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Header3, Paragraph1} from 'components/typography';
import {StrapiImage} from 'src/interface';
import styled from 'styled-components';
import {getStrapiMedia} from 'utils/api';

interface SecondHeadlineImageProps {
  id?: number;
  description?: number;
  title?: string;
  image?: StrapiImage;
}

const SecondHeadlineImage: React.FC<SecondHeadlineImageProps> = ({
  title = 'headline',
  description = 'paragraph',
  image,
}) => {

  const imageUrl = getStrapiMedia(image?.url as string);

  return (  
    <Root>
      <Container>
        <Row>
          <Col lg={4}>
            <Typography>
              <Header3>
                {title}
              </Header3>
              <SParagraph>
                {description}
              </SParagraph>
            </Typography>
          </Col>
          <CenterCol lg={8} md={12}>
            <Image
              src={imageUrl as string} 
              alt={image?.alternativeText}
            />
          </CenterCol>
        </Row>
      </Container>
    </Root>
  );
};

export default SecondHeadlineImage;

const SParagraph = styled(Paragraph1)`
  max-width: 90%;
`;

const CenterCol = styled(Col)`
  @media ${breakpoints.down(breakpoints.lg)} {
    justify-content: center;
    margin-top: 30px;
  }
`;

const Image = styled.img`
  height: clamp(250px, 20.8vw, 400px);
  width: clamp(500px, 53vw, 1056px);
  border-radius: 24px;
  object-fit: cover;
  object-position: center;
`;

const Root = styled.div`
  padding: min(100px, 5.2vw) 0;
`;

const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 20px;

  @media ${breakpoints.down(breakpoints.lg)} {
    text-align: center;
    align-items: center;
  }
`;
