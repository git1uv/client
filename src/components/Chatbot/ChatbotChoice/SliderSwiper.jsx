import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png';
import Banbani from '../../../assets/chatbot/test/Banbani.png';
import Neuranee from '../../../assets/chatbot/test/Neuranee.png';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

const images = [
  { src: Simmaeum, alt: 'Simmaeum', index: 0 },
  { src: Banbani, alt: 'Banbani', index: 1 },
  { src: Neuranee, alt: 'Neuranee', index: 2 },
];

const StyledSwiperContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 8rem; /* 양쪽에 50px의 패딩을 추가하여 화살표와 슬라이드가 겹치지 않도록 합니다. */

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: calc(100% + 120px);
    transform: translateY(-50%);
    width: 44px; 
    height: 44px; 
    color: grey;
    border-radius: 50%;
    z-index: 10;
  }

  .swiper-button-prev {
    left: 0.75rem; 
  }

  .swiper-button-next {
    right: 0.75rem; 
  }
`;

const StyledSwiper = styled(Swiper)`
    height: 100%; 
    .swiper-slide {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        filter: grayscale(100%);
        transform: scale(0.75);
    }

  .swiper-slide-active {
    filter: grayscale(0%);
    transform: scale(1);
    z-index: 10;
  }
`;

const SlideImage = styled.img`
    width: 16.875rem;
    @media (max-width: 1440px) {
        width: 10rem;
    }
    object-fit: cover;
`;

export const SliderSwiper = ({setChatbot, chatbotInfo, setIndex}) => {
    const handleSlideChange = (swiper) => {
    const centerIndex = swiper.realIndex;
    setChatbot(chatbotInfo[centerIndex]);
    setIndex(centerIndex);
    };
  return (
    <StyledSwiperContainer>
        <StyledSwiper
            slidesPerView={5}
            centeredSlides={true}
            spaceBetween={20}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            slideToClickedSlide={true}
            initialSlide={0}
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
