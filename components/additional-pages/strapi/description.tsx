/* eslint-disable react/no-children-prop */
import {Container, Row, Col} from 'components/grid';
import styled from 'styled-components';
import {StrapiImage} from 'src/interface';
import {getStrapiMedia} from 'utils/api';
import {Paragraph1} from 'components/typography';
import ReactMarkdown from 'react-markdown';
import {breakpoints} from 'components/grid/consts';

interface DescriptionProps {
  id?: number;
  image?: StrapiImage;
  text_content?: string;
}

const Description: React.FC<DescriptionProps> = ({image, text_content}) => {

  const imageUrl = getStrapiMedia(image?.url as string);

  return (
    <Root>
      <Container>
        <Row>
          <CenterCol lg={4} md={12}>
            <Image 
              alt={image?.alternativeText}
              src={imageUrl as string}
            />
          </CenterCol>
          <Col lg={8} md={11}>
            <DescriptionContainer>
              <Paragraph1>
                <ReactMarkdown children={text_content as string}/>
              </Paragraph1>
            </DescriptionContainer>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default Description;

const Root = styled.div`
  padding: min(6vw, 100px) 0;
`;

const CenterCol = styled(Col)`
  @media ${breakpoints.down(breakpoints.lg)} {
    justify-content: center
  }
`;

const Image = styled.img`
  border-radius: 24px;
  width: clamp(300px, 30.7vw, 600px);
  height: clamp(250px, 20.8vw, 400px);
`;

const DescriptionContainer = styled.div`
  margin-left: 32px;
  display: flex;
  align-items: center;

  @media ${breakpoints.down(breakpoints.lg)} {
    margin-top: 20px;
    text-align: center;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    margin-top: 20px;
    text-align: center;
    margin-left: 0;
    padding: 0 10px;
  }
`;

