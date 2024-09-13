import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import styled from "styled-components";
import * as C from '../components/Calendar/CustomCalendar.style';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../assets/CalendarImg/left-arrow.png'; 
import rightArrow from '../assets/CalendarImg/right-arrow.png'; 
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16} from '../assets/CalendarImg/icons';
const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const [emotionData, setEmotionData] = useState([]);
  const navigate = useNavigate();
  const today = new Date();
  const isMobile = window.innerWidth <= 430; 

  useEffect(() => {
    const exampleData = [
      { calendarId: 1, date: '2024-09-10', emotion: 'Happy', hasCounseling: true, chatbotType: "F"},
      { calendarId: 2, date: '2024-09-20', emotion: 'none', hasCounseling: true, chatbotType: "T"},
      { calendarId: 3, date: '2024-09-21', emotion: 'Laughing', hasCounseling: false, chatbotType: "none"},
    ];
    setEmotionData(exampleData);
  }, []);

  /**useEffect(() => {
    const fetchCalendarData = async () => {
    try {
      const year = moment(value).format('YYYY');
      const month = moment(value).format('MM');
      const response = await fetch(`/api/v1/calendar/${year}/${month}/home`);
      const result = await response.json();
      if (result.status === 200) {
        setEmotionData(result.data);
      }
    } catch (error) {
      console.error('Error fetching calendar data:', error);
    }
  };

  fetchCalendarData();
}, [value]);

  */

const renderEmotionIcon = (emotion) => {
  switch (emotion) {
    case 'Laughing':
      return <C.StyledEmotion imageUrl={img1} />;
    case 'Excited':
      return <C.StyledEmotion imageUrl={img2} />;
    case 'Passionate':
      return <C.StyledEmotion imageUrl={img3} />;
    case 'Peaceful':
      return <C.StyledEmotion imageUrl={img4} />;
    case 'Angry':
      return <C.StyledEmotion imageUrl={img5} />;
    case 'Crying':
      return <C.StyledEmotion imageUrl={img6} />;
    case 'Dissatisfied':
      return <C.StyledEmotion imageUrl={img7} />;
    case 'Disappointed':
      return <C.StyledEmotion imageUrl={img8} />;
    case 'Inlove':
      return <C.StyledEmotion imageUrl={img9} />;
    case 'Sick':
      return <C.StyledEmotion imageUrl={img10} />;
    case 'Proud':
      return <C.StyledEmotion imageUrl={img11} />;
    case 'Tired':
      return <C.StyledEmotion imageUrl={img12} />;
    case 'Surprised':
      return <C.StyledEmotion imageUrl={img13} />;
    case 'Anxious':
      return <C.StyledEmotion imageUrl={img14} />;
    case 'Happy':
      return <C.StyledEmotion imageUrl={img15} />;
    case 'Embarrassed':
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

      />

    </C.StyledCalendarWrapper>
    </CalendarWrapper>
  );
  
}
export default MyCalendar;