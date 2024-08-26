import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import Banbani from '../../../assets/chatbot/test/Banbani.png'
import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png'
import Neuranee from '../../../assets/chatbot/test/Neuranee.png'

import chatbotInfo from '../../../datas/chatbot'
import { useNavigate } from 'react-router-dom';

const images = [
  { src: Simmaeum, alt: 'Simmaeum' },
  { src: Banbani, alt: 'Banbani' },
  { src: Neuranee, alt: 'Neuranee' },
];

const StyledSlider = styled(Slider)`
  .slick-arrow {
    z-index: 10;

    &::before {
      color: black;
    }
    &.slick-prev {
      left: 0;
    }
    &.slick-next {
      right: 0;
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
    
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const SliderContainer = styled.div`
  max-width: 900px;
  height: 50vh;
  margin: 0 auto;
  overflow: visible; 
`;

const SlideInComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatbot, setChatbot] = useState(chatbotInfo[0]);

  const navigate = useNavigate();

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
    setChatbot(chatbotInfo[current]);
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40%",
    afterChange: handleAfterChange,
    arrows: true,
  };

  return (
    <div>
      <SliderContainer>
        <StyledSlider {...settings}>
        {images.map((image, index) => {
          let scale = '0.5'; // 기본 스케일
          const isCenter = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + images.length) % images.length;
          const isNext = index === (currentSlide + 1) % images.length;

          if (isCenter) {
            scale = '1';
          } else if (isPrev || isNext) {
            if (currentSlide === 0) { // Simmaeum이 중심일 때
              scale = index === 1 ? '0.75' : '0.5';
            } else if (currentSlide === 1) { // Banbani가 중심일 때
              scale = index === 1 ? '1' : '0.75'; // 반바니는 0.75, 뉴러니는 0.5
            } else if (currentSlide === 2) { // Neuranee가 중심일 때
              scale = index === 1 ? '0.75' : '0.5'; // 반바니는 0.75, 심마음은 0.5
            }
          }
          return (
            <div key={index}>
              <img 
                src={image.src} 
                alt={image.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: `scale(${scale})`,
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          );
          })}
        </StyledSlider>
      </SliderContainer>
      <h2>{chatbot.title}</h2>
      <p>{window.innerWidth >= 430 ? chatbot.info : chatbot.mobile} </p>
      <button onClick={() => navigate('/chatbot')}>대화를 시작할까?</button>
    </div>
  );
};

export default SlideInComponent;