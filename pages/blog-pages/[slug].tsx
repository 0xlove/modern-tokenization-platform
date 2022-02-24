import BlogCard from 'components/blog-page/blog-card';
import PageHeadline from 'components/blog-page/page-headline';
import {Col, Container, Row} from 'components/grid';
import {BackgroundCircle, Header, HeaderContainer} from 'components/home/section';
import Root from 'components/root';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {BlogContainer} from 'pages/blog';
import Layout from 'pages/layout';
import {BlogProps} from 'src/interface';
import styled from 'styled-components';
import getDataFromServer from 'utils';
import PageContent from 'components/blog-page/page-content';
import LegalNotice from 'components/blog-page/legal-notice';
import {breakpoints} from 'components/grid/consts';
import MobileBlogSlider from 'components/blog-page/mobile-blog-slider';

interface BlogPageProps {
  blog: BlogProps,
  popularBlogs: BlogProps[]
}

const BlogPage: React.FC<BlogPageProps> = ({blog, popularBlogs}) => {
  const {title, date_of_create, content, legal_notice, type} = blog;

  return (
    <Layout>
      <Root>
        <PageHeadline
          type={type} 
          slideItems={popularBlogs}
          headline={title}
          date_of_create={date_of_create}
        />
        <PageContent content={content} />
        {legal_notice && <LegalNotice legalNotice={legal_notice}/>}
        <Container>
          <Row>
            <Col>
              <HeaderContainer>
                <BackgroundCircle />
                <SHeader>recommended for you</SHeader>
              </HeaderContainer>
            </Col>
          </Row>
          <Row>
            <SCol>
              <SBlogContainer>
                {popularBlogs && popularBlogs.slice(0, 3).map(blog => {
                  return (
                    <BlogCard key={blog.id} blog={blog}/>
                  );
                })}
              </SBlogContainer>
              <MobileBlogSlider sliderItems={popularBlogs.slice(0, 3)}/>
            </SCol>
          </Row>
        </Container>
      </Root>
    </Layout>
  );
};

const SBlogContainer = styled(BlogContainer)`
  @media ${breakpoints.down(breakpoints.lg)} {
    gap: 10px;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    display: none;
  }
`;

const SCol = styled(Col)`
  margin: min(40px, 4vw) 0;
`;

const SHeader = styled(Header)`
  justify-content: center;
  text-align: center;
`;

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {locale, query} = context;
  
  const {slug} = query;

  const blog = await getDataFromServer(`blogs/${slug}`);
  const popularBlogs = await getDataFromServer(
    'blogs?_sort=number_of_views:desc&_limit=5'
  );

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale: 'en',
        ['index', 'common',]
      )),
      popularBlogs,
      blog,
    }
  };
};

