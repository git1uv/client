import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import styled from "styled-components";
import * as P from './PCDatePage.style';
import slider_t from '../../assets/CalendarImg/slider_t.png';
import slider_f from '../../assets/CalendarImg/slider_f.png';
import slider_h from '../../assets/CalendarImg/slider_h.png';
import moment from 'moment'; 

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  height: 100%;
  position: relative;
`;
const CustomSwiper = styled(Swiper)`
  display: flex;
  position: absolute;
  @media (min-width: 431px) {
    width: 60%; 
    height: 60%; 
    top: 24%;
    left: 16%;
  }
  @media (max-width: 430px) {
    width: 72%; 
    height: 58%; 
    top: 43px;
    left: 50px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0.1vh !important;
  }
  .swiper-pagination-bullet {
    background-color: #A17C51;
  }
`;
const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ chatbotType }) => getChatbotBackground(chatbotType)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(-50%, -50%);
  width: 100%; 
  height: 100%;
  img{
  border-radius: 5px;
  } 
  border-radius: 5px;
  background-clip: padding-box;
  padding: 2% 5%;
  flex-direction: column;
`;

function getChatbotBackground(chatbotType) {
  switch (chatbotType) {
    case 'F':
      return `url(${slider_f})`;
    case 'T':
      return `url(${slider_t})`;
    case 'H':
      return `url(${slider_h})`;
    default:
      return `url(${slider_h})`;
  }
}

function CustomSlider({ logs, getChatbotName }) {
  console.log(logs);
    return (
        <SwiperContainer>
        <CustomSwiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {logs.map((log) => (
          <CustomSwiperSlide key={log.id} chatbotType={log.chatbotType}>
            <P.OneLine>{log.title}</P.OneLine>
            <P.SliderLineBox>
            <P.WithChat>{getChatbotName(log.chatbotType)}</P.WithChat>
            <P.Time>{moment(log.time).format('HH:mm')}</P.Time>
            </P.SliderLineBox>
          </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </SwiperContainer>
  
    );
  }
  
  export default CustomSlider;
  