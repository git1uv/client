import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import styled from "styled-components";
import * as P from './PCDatePage.style';

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
    height: 48%; 
    top: 19%;
    left: 18%;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0.3vh !important;
  }
  .swiper-pagination-bullet {
    background-color: #000;
  }
`;
const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  width: 100%; 
  height: 100%;
  border-radius: 5px;
  background: #D9D9D9;
  padding: 2% 5%;
  flex-direction: column;
`;


function CustomSlider({ logs, getChatbotName }) {
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
          <CustomSwiperSlide key={log.id}>
            <P.Time>{log.time}</P.Time>
            <P.OneLine>{log.title}</P.OneLine>
            <P.With>대화한 친구</P.With>
            <P.WithChat>{getChatbotName(log.chatbotType)}</P.WithChat>
          </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </SwiperContainer>
  
    );
  }
  
  export default CustomSlider;
  