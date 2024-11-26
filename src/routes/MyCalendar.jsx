import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import axios from 'axios';
import styled from "styled-components";
import * as C from '../components/Calendar/CustomCalendar.style';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../assets/CalendarImg/left-arrow.webp'; 
import rightArrow from '../assets/CalendarImg/right-arrow.webp'; 
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16} from '../assets/CalendarImg/icons';
import Resizer from 'react-image-file-resizer';

const images = [
  { src: img1, name: 'laughing' },
  { src: img2, name: 'excited' },
  { src: img3, name: 'passionate' },
  { src: img4, name: 'peaceful' },
  { src: img5, name: 'angry' },
  { src: img6, name: 'crying' },
  { src: img7, name: 'dissatisfied' },
  { src: img8, name: 'disappointed' },
  { src: img9, name: 'inlove' },
  { src: img10, name: 'sick' },
  { src: img11, name: 'proud' },
  { src: img12, name: 'tired' },
  { src: img13, name: 'surprised' },
  { src: img14, name: 'anxious' },
  { src: img15, name: 'happy' },
  { src: img16, name: 'embarrassed' },
];

const fetchBlobFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
  @media screen and (max-width: 430px) {
    align-items: flex-start;
  }
`;

function MyCalendar() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [value, onChange] = useState(new Date());
  const [emotionData, setEmotionData] = useState([]);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 430; 
  const [optimizedImages, setOptimizedImages] = useState({});

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

  const fetchCalendarData = async (date) => {
    try {
      const year = moment(date).format('YYYY');
      const month = moment(date).format('MM');
      const response = await axios.get(`${serverURL}/api/v1/calendar/${year}/${month}/home`, {
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        },
      });
      if (response.data.code === "200") {
        setEmotionData(response.data.data);
      } else {
        // console.error("달력 불러오기 실패:", response.data.message);
      }
    } catch (error) {
      // console.error("API 호출 중 오류 발생:", error);
    }
  };

  const optimizeImages = async () => {
    const resizedImages = {};
    for (const img of images) {
      try {
        const blob = await fetchBlobFromUrl(img.src);
        const resizedImage = await new Promise((resolve) => {
          Resizer.imageFileResizer(
            blob,
            70, // 최대 너비
            70, // 최대 높이
            'AVIF', // 출력 형식
            90, // 품질
            0, // 회전
            (uri) => resolve(uri),
            'blob'
          );
        });
        resizedImages[img.name] = URL.createObjectURL(resizedImage);
      } catch (error) {
        console.error(`Failed to resize image ${img.name}:`, error);
      }
    }
    setOptimizedImages(resizedImages);
  };

  useEffect(() => {
    fetchCalendarData(value);
    optimizeImages();
  }, [value]);

const renderEmotionIcon = (emotion) => {
  switch (emotion) {
    case 'laughing':
      return <C.StyledEmotion imageUrl={img1} />;
    case 'excited':
      return <C.StyledEmotion imageUrl={img2} />;
    case 'passionate':
      return <C.StyledEmotion imageUrl={img3} />;
    case 'peaceful':
      return <C.StyledEmotion imageUrl={img4} />;
    case 'angry':
      return <C.StyledEmotion imageUrl={img5} />;
    case 'crying':
      return <C.StyledEmotion imageUrl={img6} />;
    case 'dissatisfied':
      return <C.StyledEmotion imageUrl={img7} />;
    case 'disappointed':
      return <C.StyledEmotion imageUrl={img8} />;
    case 'inlove':
      return <C.StyledEmotion imageUrl={img9} />;
    case 'sick':
      return <C.StyledEmotion imageUrl={img10} />;
    case 'proud':
      return <C.StyledEmotion imageUrl={img11} />;
    case 'tired':
      return <C.StyledEmotion imageUrl={img12} />;
    case 'surprised':
      return <C.StyledEmotion imageUrl={img13} />;
    case 'anxious':
      return <C.StyledEmotion imageUrl={img14} />;
    case 'happy':
      return <C.StyledEmotion imageUrl={img15} />;
    case 'embarrassed':
      return <C.StyledEmotion imageUrl={img16} />;
    default:
      return null;
  }
};

  const handleDateClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    navigate(`/date/${formattedDate}`);
  };

  const getPrevMonthLabel = (date) => {
    const prevMonth = moment(date).subtract(1, 'month').format('M');
    return isMobile ? <C.MonthLabel>{`${prevMonth}월`}</C.MonthLabel> : null;

  };

  const getNextMonthLabel = (date) => {
    const nextMonth = moment(date).add(1, 'month').format('M');
    return isMobile ? <C.MonthLabel>{`${nextMonth}월`}</C.MonthLabel> : null;

  };

  const tileContent = ({ date, view }) => {
    if (view !== 'month') return null;

    const formattedDate = moment(date).format('YYYY-MM-DD');
    const entry = emotionData.find(item => item.date === formattedDate);

    const getColorByChatbotType = (chatbotType) => {
      switch (chatbotType) {
        case 'T':
          return '#6E9B87'; 
        case 'F':
          return '#EB6149'; 
        case 'H':
          return '#EEC352'; 
        default:
          return '#F4F2EB';
      }
    };
  
    const circleColor = entry?.hasCounseling
      ? getColorByChatbotType(entry.chatbotType)
      : '#F4F2EB';

    return (
      <C.Circle circleColor={circleColor}>
        {entry && entry.emotion !== 'none' && renderEmotionIcon(entry.emotion)}
      </C.Circle>
    );
  };

  return (
    <CalendarWrapper>
      <C.StyledCalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        minDetail="year"
        maxDetail="month"
        prevLabel={
          <>
            <img src={leftArrow} alt="Previous" />
            {isMobile ? getPrevMonthLabel(value) : null}
          </>
        }
        nextLabel={
          <>
            {isMobile ? getNextMonthLabel(value) : null}
            <img src={rightArrow} alt="Next" />
          </>
        }
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        showNeighboringMonth={false}
        calendarType="gregory"
        onClickDay={handleDateClick}
        tileContent={tileContent}
        onActiveStartDateChange={({ activeStartDate }) => fetchCalendarData(activeStartDate)}
      />

    </C.StyledCalendarWrapper>
    </CalendarWrapper>
  );
  
}
export default MyCalendar;