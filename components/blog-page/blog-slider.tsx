import {BlogProps} from 'src/interface';
import styled, {css} from 'styled-components';
import Slider from 'react-slick';
import SliderCard from './slider-card';
import {breakpoints} from 'components/grid/consts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrowRightUrl from '@/images/ArrowRight.png';
import arrowLeftUrl from '@/images/ArrowLeft.png';

interface BlogSliderProps {
  items: BlogProps[];
  little?: boolean;
}

const BlogSlider: React.FC<BlogSliderProps> = ({items, little}) => {
  const setting = {
    dots: false,
    slidesToShow: 1,
    arrows: true 
  };
  
  return (
    <Root>
      <Slider 
        {...setting}
        nextArrow={<Arrow little={little} src={arrowRightUrl.src}/>}
        prevArrow={<Arrow little={little} left src={arrowLeftUrl.src}/>}
      >
        {items?.map(blog => {

          return (
            <SliderCard little={little} key={blog.id} blog={blog} />
          );
        })}
      </Slider>
    </Root>
  );
};

export default BlogSlider;

const Root = styled.div`
  position: relative;
  height: clamp(350px, 25vw, 496px);
`;

type ArrowProps = {
  left?: boolean;
  little?: boolean;
}

const Arrow = styled.img<ArrowProps>`
  position: absolute;
  top: 94%;
  right: 15px;
  width: ${({little}) => little ? '24px' : '35px'};
  height: ${({little}) => little ? '24px' : '35px'};

  @media ${breakpoints.down(breakpoints.lg)} {
    width: 25px;
    height: 25px;
  }

  @media ${breakpoints.down(breakpoints.md)} {
    right: 15px;
    top: 90%;
  }

  ${props => props.left && css`
    left: 90%;
    z-index: 100;

    @media ${breakpoints.down(breakpoints.md)} {
      left: 80%;
    }
  `}

  ${props => props.left && props.little && css`
    left: 85%;
    z-index: 100;
  `}
`;
