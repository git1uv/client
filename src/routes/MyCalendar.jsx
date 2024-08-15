import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import styled from "styled-components";
import * as C from '../components/Calendar/CustomCalendar.style';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const today = new Date();
  const emotion_day = [
    '2024-07-20',
    '2024-07-21',
    // 여기에 추가
  ];
  const handleDateClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    navigate(`/date/${formattedDate}`);

  };

  return (
    <CalendarWrapper>
      <C.StyledCalendarWrapper>
      <Calendar
        onChange={onChange}
        value={value}
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
          return <>{html}</>;
        }}
      />

    </C.StyledCalendarWrapper>
    </CalendarWrapper>
  );
  
}
export default MyCalendar;