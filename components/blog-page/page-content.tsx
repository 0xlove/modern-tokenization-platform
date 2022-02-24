import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'components/grid';
import MarkdownContainer from 'components/markdown';

interface PageContentProps {
  content: string;
}

const PageContent: React.FC<PageContentProps> = ({content}) => {
  return ( 
    <Root>
      <Container>
        <JustifyRow>
          <Col lg={9}>   
            <MarkdownContainer>
              <ReactMarkdown>{content}</ReactMarkdown>
            </MarkdownContainer>
          </Col>
        </JustifyRow>
      </Container>
    </Root>
  );
};

export default PageContent;

const Root = styled.div`
  padding: min(100px, 5.2vw) 0 min(40px, 2vw);
  border-bottom: 1px #36324B solid;
`;

const JustifyRow = styled(Row)`
  justify-content: center;
`;
