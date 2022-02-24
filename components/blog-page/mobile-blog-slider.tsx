import {BlogProps} from 'src/interface';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogCard from './blog-card';
import {breakpoints} from 'components/grid/consts';

interface MobileBlogSliderProps {
  sliderItems: BlogProps[];
}

const MobileBlogSlider: React.FC<MobileBlogSliderProps> = ({sliderItems}) => {
  const options = {
    dots: false,
    arrows: false,
    slidesToShow: 1.02,
    slidesToScroll: 1
  };
  
  return ( 
    <Root>
      <Slider {...options}>
        {sliderItems.map(blog => {

          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </Slider>
    </Root>
  );
};

export default MobileBlogSlider;

const Root = styled.div`
  padding: 30px 5px;

  display: none;

  @media ${breakpoints.down(breakpoints.md)} {
    display: block;
  }
`;
