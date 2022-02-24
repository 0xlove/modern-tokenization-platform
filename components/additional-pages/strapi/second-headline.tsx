import {Container, Row, Col} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Header3, Paragraph1} from 'components/typography';
import styled from 'styled-components';

interface SecondHeadlineProps {
  id?: number;
  headline?: string;
  first_paragraph?: string;
  second_paragraph?: string;
}

const SecondHeadline: React.FC<SecondHeadlineProps> = ({
  headline = 'headline',
  first_paragraph = 'paragraph',
  second_paragraph = 'paragraph',
}) => {
  return (
    <Root>
      <Container>
        <Row>
          <Col lg={12}>
            <Header3>
              {headline}
            </Header3>
          </Col>
          <Col>
            <DescriptionContainer>
              <Paragraph1>
                {first_paragraph}
              </Paragraph1>
              <Paragraph1>
                {second_paragraph}
              </Paragraph1>
            </DescriptionContainer>
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  padding: min(100px, 5.2vw) 0;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: 1fr;
    padding: 0 10px;
    text-align: center;
  }
`;

export default SecondHeadline;
