import {Container, Row, Col} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Header3, Paragraph1} from 'components/typography';
import styled from 'styled-components';

interface SpitHeadlineProps {
  first_headline?: string;
  second_headline?: string;
  first_paragraph?: string;
  second_paragraph?: string; 
}

const SpitHeadline: React.FC<SpitHeadlineProps> = ({
  first_paragraph,
  second_paragraph,
  first_headline,
  second_headline,
}) => {
  return ( 
    <Root>
      <Container>
        <CentredRow>
          <Col lg={8}>
            <TypographyContainer>
              <Typography>
                <HeadLine>{first_headline}</HeadLine>
                <Paragraph1>{first_paragraph}</Paragraph1>
              </Typography>
              <Typography>
                <HeadLine>{second_headline}</HeadLine>
                <Paragraph1>{second_paragraph}</Paragraph1>
              </Typography>
            </TypographyContainer>
          </Col>
        </CentredRow>
      </Container>
    </Root>
  );
};

export default SpitHeadline;

const CentredRow = styled(Row)`
  justify-content: center;
`;

const Root = styled.div`
  padding: min(100px, 5.2vw) 0;
`;

const TypographyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: 1fr;
  }
`;

const Typography = styled.div`
  display: grid;
  gap: 24px;

  margin-left: 15px;

  @media ${breakpoints.down(breakpoints.md)} {
    text-align: center;
    margin-left: 0;
    padding: 0 10px;
    margin-top: 20px;
  }
`;

const HeadLine = styled(Header3)`
  color: #4E60F4;
`;
