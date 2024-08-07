import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MiniCalendar from '../components/Calendar/MiniCalendar'
import '../components/Calendar/DatePage.css';
import styled from "styled-components";
const DateWrapper = styled.div`
  background-color: #EEECE3;
  height: 89.7vh;
  weight: 100vw;
`;
function DatePage() {
  const { date } = useParams();
  const formattedDate = moment(date).format('YYYY년 MM월 DD일');
  

  return (
    <DateWrapper>
    <div className="page-layout">
        <MiniCalendar />
        <div className="content">
            <h3>{formattedDate}</h3>
            <p>이 페이지는 {formattedDate}의 세부 정보를 표시합니다.</p>
            <p>오늘의 감정</p>
            <p>한 줄 일기</p>
            <p>오늘의 대화</p>
            <p>추천리스트</p>
        </div>
    </div>
    </DateWrapper>
  );
}

export default DatePage;
