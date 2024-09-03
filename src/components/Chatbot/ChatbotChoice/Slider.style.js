import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
    width: 100%;
  .slick-arrow {
    z-index: 10;

    &::before {
      color: black;
    }
    &.slick-prev {
      left: 0;
      top: 25rem;
    }
    &.slick-next {
      right: 0;
      top: 25rem;
    }
  }
  .slick-slide {
    opacity: 0.5;
    transition: opacity 0.3s ease, filter 0.3s ease;
    filter: grayscale(100%);
  }
  .slick-center {
    transition: opacity 0.3s ease, filter 0.3s ease;
    filter: grayscale(0%);
    opacity: 1;
    z-index: 10;
  }

  .slick-list {
    overflow: visible;
    height: 400px;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
`;

export const SliderContainer = styled.div`
  width: 90%;
  height: 20rem;
  margin: 0 auto;
  overflow: visible; 
  position: relative;
`;