import {BlogProps} from 'src/interface';
import styled from 'styled-components';
import {getStrapiMedia} from 'utils/api';
import Link from 'next/link';
import {Paragraph1, Paragraph2} from 'components/typography';
import dateDiffInDay from 'utils/date-diff-in-day';
import {breakpoints} from 'components/grid/consts';

export interface BlogCardProps {
  blog: BlogProps;
  little?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
  const {
    title,
    date_of_create,
    time_to_read,
    slug,
    images,
    type,
  } = blog;
  
  const imageUrl = getStrapiMedia(images.url);

  const createData = dateDiffInDay(new Date(), new Date(date_of_create));

  return (
    <Card>
      <Image 
        alt={images.alternativeText}
        src={imageUrl as string}
      />
      <CardContent>
        <Link href={`/blog-pages/${slug}`} passHref>
          <BlogLink>{type ? type : 'Listing'}</BlogLink>
        </Link>
        <Title>{title}</Title>
        <AdditionInfo>
          <Paragraph2>{createData === 0 
            ? 'Today' 
            : createData === 1
              ? 'Yesterday' 
              : `${createData} days ago`}
          </Paragraph2>
          {time_to_read && 
            <Paragraph2>{`${time_to_read} min read`}</Paragraph2>}
        </AdditionInfo>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

const Title = styled(Paragraph1)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Card = styled.div`
  width: 100%;
  height: clamp(350px, 25vw, 496px);
  border-radius: 24px;
  background-color: #22202F;

  @media ${breakpoints.down(breakpoints.md)} {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

const CardContent = styled.div`
  height: 50%;
  display: grid;
  row-gap: 0.7vw;
  padding: min(1.25vw, 24px);
`;

const BlogLink = styled.a`
  text-decoration: none;
  color: #4E60F4;
  font-size: clamp(1.2rem, 1.25vw, 1.5rem);
`;

const AdditionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: .2;
`;
