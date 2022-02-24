import {Container, Row, Col} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Paragraph1, Paragraph2} from 'components/typography';
import {LegalNoticeProps} from 'src/interface';
import styled from 'styled-components';

interface LegalNoticeComponentProps {
  legalNotice: LegalNoticeProps;
}

const LegalNotice: React.FC<LegalNoticeComponentProps> = ({legalNotice}) => {
  const {title, first_paragraph, second_paragraph} = legalNotice;
  
  return ( 
    <Root>
      <Container>
        <JustifyRow>
          <Col lg={9}>
            <div>
              <SParagraph>{title}</SParagraph>
              <SplitParagraph>
                <SParagraph2>{first_paragraph}</SParagraph2>
                <SParagraph2>{second_paragraph}</SParagraph2>
              </SplitParagraph>
            </div>
          </Col>
        </JustifyRow> 
      </Container>
    </Root>
  );
};

export default LegalNotice;

const Root = styled.div`
  padding: 40px 0;

  @media ${breakpoints.down(breakpoints.md)} {
    padding: 20px 10px;
  }
`;

const SParagraph = styled(Paragraph1)`
  font-style: italic;
`;

const SplitParagraph = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SParagraph2 = styled(Paragraph2)`
  font-size: 18px;
  font-style: italic;
`;

const JustifyRow = styled(Row)`
  justify-content: center;
  margin-bottom: 100px;
`;
