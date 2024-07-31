import React, { useState } from 'react';
import './MiniCalendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';

const MiniDot = () => <div className="mini-dot" />;

const StyledMiniCalendar = styled(Calendar)`
  .react-calendar__tile {
    padding: 2vh 0 4vh !important; 
  }
`;

function MiniCalendar() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const emotion_day = [
    '2024-07-20',
    '2024-07-21',
    // 여기에 추가
  ];

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
    <div className="mini-calendar-wrapper">
      <StyledMiniCalendar
        onChange={onChange}
        value={value}
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
            html.push(<MiniDot key={moment(date).format("YYYY-MM-DD")} />);
          }
          return <>{html}</>;
        }}
      />

    </div>
  );
}
export default MiniCalendar;