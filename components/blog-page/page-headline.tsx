import Button from 'components/button';
import HiddenButton from 'components/button/hiden-button';
import {Container, Row} from 'components/grid';
import {breakpoints} from 'components/grid/consts';
import {Header3, Paragraph1} from 'components/typography';
import router from 'next/router';
import {BlogProps} from 'src/interface';
import styled from 'styled-components';
import BlogSlider from './blog-slider';

interface PageHeadlineProps {
  headline: string,
  slideItems: BlogProps[],
  date_of_create: Date,
  type: string;
}

const PageHeadline: React.FC<PageHeadlineProps> = ({
  headline,
  slideItems,
  date_of_create,
  type,
}) => {

  const date = new Date(date_of_create);

  return (
    <Root> 
      <Container>
        <JustifyRow>
          <HeaderContainer>
            <HeaderCol>
              <SButton onClick={() => {
                router.push('/blog');
              }}>
                View all articles
              </SButton>
              <Header>{headline}</Header>
              <AdditionalInfo>
                <SParagraph>{type}</SParagraph>
                <DateOfCreate>
                  {`${date.toString().split(' ')[2]}
                    ${date.toString().split(' ')[1]}
                    ${date.getFullYear()}`}
                </DateOfCreate>
              </AdditionalInfo>
            </HeaderCol>
            <HiddenButton onClick={
              () => {
                router.push('/blog');
              }
            }>View all articles</HiddenButton>
            <SliderContainer>
              <BlogSlider items={slideItems} little/>
            </SliderContainer>
          </HeaderContainer>
        </JustifyRow>
      </Container>
    </Root>
  );
};

export default PageHeadline;

const SliderContainer = styled.div`
  width: 580px;
  overflow: hidden;

  @media ${breakpoints.down(breakpoints.lg)} {
    width: 95%;
  }
`;

const JustifyRow = styled(Row)`
  justify-content: center;
`;

const Root = styled.div`
  position: relative;
  padding: min(7.3vw, 140px) 0;
  
  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    height: 1px;
    background-color: #36324B;
    left: 0;
    right: 0;
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media ${breakpoints.down(breakpoints.lg)} {
    grid-template-columns: 1fr;
    gap: 40px;
    justify-items: center;
  }
`;

const Header = styled(Header3)`
  color: #4E60F4;
  max-width: 650px;
  
  @media ${breakpoints.down(breakpoints.lg)} {
    text-align: center;
  }
`;

const HeaderCol = styled.div`
  max-width: 580px;
  display: grid;
  justify-content: space-between;
  padding: 15px 0 20px;
  margin-left: 20px;
  height: clamp(350px, 25vw, 400px);

  @media ${breakpoints.down(breakpoints.lg)} {
    display: flex;
    flex-direction: column;
    height: unset;
    padding: 0 15px;
    margin-left: 0;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  align-items: flex-end;

  @media ${breakpoints.down(breakpoints.lg)} {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    align-items: center;
    margin-top: 40px;
  }
`;

const DateOfCreate = styled.span`
  opacity: .3;

  font-size: clamp(1rem, 1vw, 1.25rem)
`;

const SParagraph = styled(Paragraph1)`
  color: #4E60F4;
`;

const SButton = styled(Button)`
  margin: 0;

  @media ${breakpoints.down(breakpoints.lg)} {
    display: none;
  }
`;
