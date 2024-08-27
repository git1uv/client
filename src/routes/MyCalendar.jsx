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

  useEffect(() => {
    const exampleData = [
      { calendarId: 1, date: '2024-08-10', emotion: 'happy', hasCounseling: true },
      { calendarId: 3, date: '2024-08-20', emotion: 'none', hasCounseling: true },
      { calendarId: 3, date: '2024-08-21', emotion: 'none', hasCounseling: false },
    ];
    setEmotionData(exampleData);
  }, []);

  /**useEffect(() => {
    fetch('/api/v1/calendar/${moment(value).format('YYYY-MM')}/home')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setEmotionData(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching calendar data:', error);
      });
  }, [value]);
  */

  const renderEmotionIcon = (emotion) => {
    switch (emotion) {
      case 'happy':
        return <C.StyledEmotion imageUrl={'../assets/smile.png'} />;
      // 다른 감정 아이콘 추가
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

    if (!entry) return null;

    return (
      <>
        <C.Circle hasCounseling={entry.hasCounseling}>
          {entry.emotion !== 'none' && renderEmotionIcon(entry.emotion)}
        </C.Circle>
      </>
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