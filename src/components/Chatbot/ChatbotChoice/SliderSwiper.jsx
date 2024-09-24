import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png';
import Banbani from '../../../assets/chatbot/test/Banbani.png';
import Neuranee from '../../../assets/chatbot/test/Neuranee.png';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';
import theme from '../../../constants/theme';

const RESPONSE_SIZE = theme;
const images = [
  { src: Simmaeum, alt: 'Simmaeum', index: 0 },
  { src: Banbani, alt: 'Banbani', index: 1 },
  { src: Neuranee, alt: 'Neuranee', index: 2 },
];

const StyledSwiperContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 8rem;

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 133%;
    @media (max-width: 1470px) {
      top: 150%;
    }
    color: grey;
    border-radius: 50%;
    z-index: 10;
    --swiper-navigation-size: 2rem; // navigation size 조절
    
    @media (max-width: 430px) {
      --swiper-navigation-size: 1.6rem;
    }
  }

  .swiper-button-prev {
    left: 0.75rem; 
    @media (max-width: 430px) {
      left: 8rem;
    }
  }

  .swiper-button-next {
    right: 0.75rem; 
    @media (max-width: 430px) {
      right: 8rem;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
 height: 100%; 
  .swiper-slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.9s ease;
  }

  .swiper-slide img {
    filter: grayscale(100%);
    transform: scale(0.5);
    transition: all 0.9s ease;
  }

  .swiper-slide-active {
    z-index: 3;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    z-index: 2;
  }
  .swiper-slide-active img {
    filter: grayscale(0%);
    transform: scale(1);
  }

  .swiper-slide-prev img,
  .swiper-slide-next img {
    transform: scale(0.75);
  }
`;

const SlideImage = styled.img`
    width: 16.875rem;
    @media (max-width: 1470px) {
      width: 10rem;
    }
    object-fit: cover;
`;

export const SliderSwiper = ({setChatbot, chatbotInfo}) => {

    const handleSlideChange = (swiper) => {
      const chatbotName = localStorage.getItem('result');

      let centerIndex = swiper.realIndex;
      // let centerIndex = index;
      setChatbot(chatbotInfo[centerIndex]);
  
      swiper.slides.forEach((slide, index) => {
        slide.style.zIndex = '1'; // 기본 z-index 설정

        if (index === centerIndex) {
          slide.style.zIndex = '3'; // Center slide with the highest z-index
        } else if (
          index === centerIndex - 1 ||
          index === centerIndex + 1 ||
          (centerIndex === 0 && index === images.length - 1) ||
          (centerIndex === images.length - 1 && index === 0)
        ) {
          slide.style.zIndex = '2'; // Adjacent slides with a lower z-index
        }
      });
    };
  
    useEffect(() => {
      const swiper = document.querySelector('.swiper').swiper;
      handleSlideChange(swiper); // Apply initial z-index settings
    }, []);

  return (
    <StyledSwiperContainer>
        <StyledSwiper
            slidesPerView={5}
            centeredSlides={true}
            spaceBetween={10}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            slideToClickedSlide={true}
            initialSlide={0}
            speed={900}
        >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <SlideImage src={image.src} alt={image.alt} />
            </SwiperSlide>
        ))}
        </StyledSwiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
    </StyledSwiperContainer>
  );
};
