import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {BlogProps} from 'src/interface';
import styled from 'styled-components';
import getDataFromServer from 'utils';
import Layout from './layout';
import Root from 'components/root';
import Headline from 'components/blog-page/headline';
import {Container, Row, Col} from 'components/grid';
import BlogCard from 'components/blog-page/blog-card';
import {breakpoints} from 'components/grid/consts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pipPongImage from '@/images/pinpong.png';
import Pagination from 'components/blog-page/pagination/pagination';
import BlogSlider from 'components/blog-page/blog-slider';
import MobilePagination from 'components/blog-page/pagination/mobile-pagination';

export interface BlogPageProps {
  blogs: BlogProps[];
  blogsCount: number;
  page: number;
  popularBlogs: BlogProps[];
}

const BlogPage: React.FC<BlogPageProps> = (
  {blogs, blogsCount, page, popularBlogs}
) => {

  return (
    <Layout>
      <Root>
        <Headline
          imageUrl={pipPongImage.src}
          headline='The TGT Blog'
          description={`
            Where early adopters invest in and trade the best digital assets
          `}
        />
        <Container>
          <Row>
            <HiddenCol>
              <BlogSlider items={popularBlogs}/>
            </HiddenCol>
            <Col>
              <BlogContainer>
                <SliderContainer>
                  <BlogSlider items={popularBlogs}/>
                </SliderContainer>
                {blogs
                  && blogs.map(blog => <BlogCard  key={blog.id} blog={blog}/>)}
              </BlogContainer>
            </Col>
          </Row>
          <Row>
            <StyledCol>
              <Pagination
                totalCount={blogsCount}
                pageSize={10}
                siblingCount={1}
                currentPage={page}
              />
            </StyledCol>
            <HiddenCol>
              <MobilePagination
                totalCount={blogsCount}
                pageSize={6}
                siblingCount={1}
                currentPage={page}
              />
            </HiddenCol>
          </Row>
        </Container>
      </Root>
    </Layout>
  );
};

const HiddenCol = styled(Col)`
  display: none;

  padding: 0 20px;
  margin: 30px 0;

  @media ${breakpoints.down(breakpoints.md)} {
    display: block;
  }
`;

const StyledCol = styled(Col)`
  margin: 100px 0;
  justify-content: center;

  @media ${breakpoints.down(breakpoints.md)} {
    display: none;
  }
`;

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media ${breakpoints.down(breakpoints.lg)} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: 1fr;
    padding: 0 5px;
    justify-items: center;
  }
`;

const SliderContainer = styled.div`
  background: linear-gradient(90deg, #5D60F2 3.31%, #46A1D3 96.26%);
  border-radius: 24px;
  grid-column: 1 / span 2;
  overflow: hidden;

  @media ${breakpoints.down(breakpoints.md)} {
    display: none;
  }
`;

export const getServerSideProps: GetServerSideProps = async(
  {locale, query: {page = 1}, req}
) => {

  const UA = req.headers['user-agent'];

  const isMobile = Boolean(UA?.match(
    /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
  ));

  const limit = isMobile ? 6 : 10;

  const start = +page === 1 ? 0 : (+page - 1) * limit;

  const blogs = await getDataFromServer(
    `blogs?_start=${start}&_limit=${limit}&_sort=date_of_create:desc`
  );
  const blogsCount = await getDataFromServer('blogs/count');
  const popularBlogs = await getDataFromServer(
    'blogs?_sort=number_of_views:desc&_limit=5'
  );

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale: 'en',
        ['index', 'common',]
      )),
      blogs,
      blogsCount,
      page: +page,
      popularBlogs,
    }
  };
};

export default BlogPage;

