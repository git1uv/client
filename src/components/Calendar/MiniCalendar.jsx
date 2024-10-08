import React, { useState, useEffect } from 'react';
import moment from "moment";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import leftArrow from '../../assets/CalendarImg/left-arrow.webp'; 
import rightArrow from '../../assets/CalendarImg/right-arrow.webp'; 
import Calendar from 'react-calendar'; 
import * as M from './MiniCalendar.style';

function MiniCalendar() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [value, setValue] = useState(new Date());
  const [counselingDays, setCounselingDays] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dateParam = moment(location.pathname.split('/').pop(), 'YYYY-MM-DD').toDate();


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
        setCounselingDays(response.data.data);
      } else {
        // console.error("달력 불러오기 실패:", response.data.message);
      }
    } catch (error) {
      // console.error("API 호출 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (moment(dateParam).isValid() && dateParam.getTime() !== value.getTime())  {
      setValue(dateParam);
      fetchCalendarData(dateParam); 
    }
  }, [location]);
  

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = moment(date).format('YYYY-MM-DD');
      const dayData = counselingDays.find(day => day.date === dateStr);
      if (dayData && dayData.hasCounseling === true) {
        return <M.MiniDot key={dateStr} />;
      }
    }
    return null;
  };

  const handleDateClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    navigate(`/date/${formattedDate}`);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && moment(date).isSame(value, 'day')){
      return 'highlight';
    }
    return null;
  };

  return (
    <M.MiniCalendarWrapper>
      <Calendar
        onChange={setValue}
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
        tileContent={tileContent}
        onActiveStartDateChange={({ activeStartDate }) => fetchCalendarData(activeStartDate)}
      />

  </M.MiniCalendarWrapper>
  );
}
export default MiniCalendar;