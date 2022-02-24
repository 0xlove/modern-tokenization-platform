import styled from 'styled-components';
import {BlogCardProps} from './blog-card';
import Link from 'next/link';
import star from '@/images/Star.png';
import {Paragraph2} from 'components/typography';
import dateDiffInDay from 'utils/date-diff-in-day';
import {breakpoints} from 'components/grid/consts';

const SliderCard: React.FC<BlogCardProps> = ({blog, little}) => {
  const {
    title,
    description,
    date_of_create,
    time_to_read,
    slug,
  } = blog;

  const createData = dateDiffInDay(new Date(), new Date(date_of_create));

  return (
    <Root little={little}>
      <Top>
        <Link href={`/blog-pages/${slug}`} passHref>
          <CardLink>Announcements</CardLink>
        </Link>
        <Popular>
          <Star src={star.src} alt='star' />
          <span>Popular</span>
        </Popular>
      </Top>
      <Typography>
        <Title little>{title}</Title>
        <Paragraph2>{description}</Paragraph2>
      </Typography>
      <Bottom>
        <SParagraph>
          {createData === 0 
            ? 'Today' 
            : createData === 1
              ? 'Yesterday' 
              : `${createData} days ago`}
        </SParagraph>
        <Paragraph2>{`${time_to_read} min read`}</Paragraph2>
      </Bottom>
    </Root>  
  );
};

export default SliderCard;

interface RootProps {
  little?: boolean;
}

const Root = styled.div<RootProps>`
  width: 100%;
  height: ${({little}) => little 
    ? 'clamp(300px, 25vw, 400px)' 
    : 'clamp(350px, 25vw, 496px)'} ;
  background: linear-gradient(90deg, #5D60F2 3.31%, #46A1D3 96.26%);
  border-radius: 24px;
  padding: 16px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const CardLink = styled.a`
  padding: 14px;
  line-height: 160%;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 24px;
  text-decoration: none;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(0.8rem, 1vw, 1.25rem);
`;

const Popular = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #5183E2;
  border-radius: 16px;
  width: 165px;
  padding: 14px;
`;

const Star = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 15px;
`;

const Typography = styled.div`
  display: grid;
  row-gap: 24px;

  @media ${breakpoints.down(breakpoints.lg)} {
    row-gap: 14px;
  }
`;

const Title = styled.div<RootProps>`
  font-size: ${({little}) => little 
    ? '24px' 
    : 'clamp(.875rem, 1.875vw, 2.25rem)'};
  text-transform: uppercase;
  line-height: 160%;

  @media ${breakpoints.down(breakpoints.md)} {
    font-size: 20px;
  }
`;

const Bottom = styled.div`
  display: flex;

  ${Paragraph2} {
    margin-right: 40px;
  }
`;

const SParagraph = styled(Paragraph2)`
  position: relative;

  &:after {
    position: absolute;
    content: '';
    right: -20px;
    height: 36px;
    width: 1px;
    opacity: .2;
    background-color: #fff;
  }
`;
