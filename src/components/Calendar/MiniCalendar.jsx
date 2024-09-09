import React, { useState, useEffect } from 'react';
import moment from "moment";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import leftArrow from '../../assets/CalendarImg/left-arrow.png'; 
import rightArrow from '../../assets/CalendarImg/right-arrow.png'; 
import Calendar from 'react-calendar'; 
import * as M from './MiniCalendar.style';
import styled from 'styled-components';


function MiniCalendar() {
  const [value, onChange] = useState(new Date());
  const [emotionDays, setEmotionDays] = useState([]);
  const navigate = useNavigate();
  const emotion_day = [
    '2024-09-01',
    '2024-09-20',
    '2024-09-21',
    // 여기에 추가
  ];
  /**
  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get('/api/v1/calendar/:month/home');
        if (response.status === 200) {
          setEmotionDays(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch calendar data:", error);
      }
    };

    fetchCalendarData();
  }, []);

  const tileContent = ({ date, view }) => {
    let html = [];
    if (view === 'month') {
      const dateStr = moment(date).format('YYYY-MM-DD');
      const dayData = emotionDays.find(day => day.date === dateStr);
      if (dayData && dayData.emotion !== 'none') {
        html.push(<MiniDot key={dateStr} />);
      }
    }
    return <>{html}</>;
  };

  // tileContent={tileContent}로 바꾸기

  */
  const location = useLocation();
  const dateParam = moment(location.pathname.split('/').pop(), 'YYYY-MM-DD').toDate();

  const handleDateClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    navigate(`/date/${formattedDate}`);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && dateParam && date.getTime() === dateParam.getTime()) {
      return 'highlight';
    }
    return null;
  };

  return (
    <M.MiniCalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
        minDetail="year"
        maxDetail="month"
        prevLabel={<img src={leftArrow} alt="Previous" />}
        nextLabel={<img src={rightArrow} alt="Next" />}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        showNeighboringMonth={false}
        calendarType="gregory"
        onClickDay={handleDateClick}
        tileClassName={tileClassName}

        tileContent={({ date, view }) => {
          let html = [];
          if (emotion_day.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<M.MiniDot key={moment(date).format("YYYY-MM-DD")} />);
          }
          return <>{html}</>;
        }}
      />

  </M.MiniCalendarWrapper>
  );
}
export default MiniCalendar;