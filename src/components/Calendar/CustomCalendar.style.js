import styled from 'styled-components';
import Calendar from 'react-calendar';
import "../../../node_modules/react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51.5vw;
  height: 84.5vh;
  position: relative;
  @media screen and (min-width: 431px) {
    margin-top: 10.3vh;
  }
  @media screen and (max-width: 430px) {
    height: 70vh; 
  }
  .react-calendar {
    width: 100%;
    height: 100%;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 27.8px;
    box-shadow: 0px 3.706px 3.706px 0px rgba(0, 0, 0, 0.25);
    background-color: white;
    padding: 5%;
  }
  
  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
    margin-bottom: 5%; 
  }
  
  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 2rem;
    color: black;
  }
  
  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }
  
  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }
  
  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
    font-size: 1.5rem;
  }
  .react-calendar__month-view__weekdays{
    margin-bottom: 3vh;
  }
  
  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: red;
  }
  .react-calendar__month-view__days__day--weekend:nth-child(7n+6) abbr {
    color: black;
  }
  /* 월, 화, 수, 목, 금요일의 글자 색을 검정색으로 설정 */
  .react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--weekend) abbr,
  .react-calendar__month-view__weekdays__weekday:not(.react-calendar__month-view__weekdays__weekday--weekend) abbr {
      color: black;
  }

  
  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background-color: #f4dcc0 !important;
    border-radius: 0.8rem;
  }
  .react-calendar__tile--now abbr {
    color: orange;
  }
  
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color:gray;
    padding: 0;
  }
  
  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: transparent;
  }
  .react-calendar__tile--hasActive abbr {
    color: white;
  }
  
  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 2vh 0 6vh !important;
    position: relative;
    font-size: 1.25rem;
  }
  
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color: black;
  }
  
  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: #e0e0e0;
    border-radius: 0.8rem;
    color: black;
  }
  
`;

export const StyledToday = styled.div`
  font-size: x-small;
  color: burlywood;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1em;
  transform: translateX(-50%);
`;

export const StyledEmotion = styled.div`
  background-image: url('../../assets/smile.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;

