import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from './Slider.style'

import Banbani from '../../../assets/chatbot/test/Banbani.png'
import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png'
import Neuranee from '../../../assets/chatbot/test/Neuranee.png'

import chatbotInfo from '../../../datas/chatbot'

const images = [
  { src: Simmaeum, alt: 'Simmaeum' },
  { src: Banbani, alt: 'Banbani' },
  { src: Neuranee, alt: 'Neuranee' },
];

const SlideInComponent = ({chatbot, setChatbot}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <S.SliderContainer>
      <S.StyledSlider {...settings}>
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
                width: '100%', // 모바일은 200?
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
                transform: `scale(${scale})`,
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        );
        })}
      </S.StyledSlider>
    </S.SliderContainer>
  );
};

export default SlideInComponent;