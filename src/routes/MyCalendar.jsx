import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import styled from "styled-components";
import * as C from '../components/Calendar/CustomCalendar.style';
import { useNavigate } from 'react-router-dom';
import leftArrow from '../assets/CalendarImg/left-arrow.png'; 
import rightArrow from '../assets/CalendarImg/right-arrow.png'; 
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
  const emotion_day = [
    '2024-08-20',
    '2024-08-21',
    // 여기에 추가
  ];

  /**useEffect(() => {
    fetch('/api/v1/calendar/:month/home')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setEmotionData(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching calendar data:', error);
      });
  }, []);

  const renderEmotionIcon = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const emotionEntry = emotionData.find(entry => entry.date === formattedDate);
    
    if (emotionEntry) {
      switch (emotionEntry.emotion) {
        case 'happy':
          return <C.StyledEmotion imageUrl={happyIcon} />;
        case 'sad':
          return <C.StyledEmotion imageUrl={sadIcon} />;
        // 감정 케이스를 추가
        default:
          return <C.StyledEmotion />;
      }
    } else {
      return <C.StyledEmotion />;
    }
  };
  */


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

        tileContent={({ date, view }) => {
          let html = [];
          if (
            view === "month" &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
          ) {
            html.push(<C.StyledToday key={"today"}>today</C.StyledToday>);
          }
          if (emotion_day.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<C.StyledEmotion key={moment(date).format("YYYY-MM-DD")} />);
          }
          //if (view === 'month') {
          //  return renderEmotionIcon(date);}
          //return null;}}

          return <>{html}</>;
        }}
      />

    </C.StyledCalendarWrapper>
    </CalendarWrapper>
  );
  
}
export default MyCalendar;