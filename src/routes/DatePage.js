import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MiniCalendar from '../components/MiniCalendar'
import './DatePage.css';

function DatePage() {
  const { date } = useParams();
  const formattedDate = moment(date).format('YYYY년 MM월 DD일');

  return (
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
  );
}

export default DatePage;
