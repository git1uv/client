import styled from 'styled-components';
import Calendar from 'react-calendar';
import "../../../node_modules/react-calendar/dist/Calendar.css"; 

export const MiniCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26vw;
  margin: 0; 
  background-color: white; 
  height: 45vh;
  margin-top: 5.3vh;

  @media screen and (max-width: 430px) {
    display: none;
  }
  .react-calendar {
    width: 100%;
    border: none;
    height: 100%;
    border-radius:0;
    justify-content: center;
    align-items: center;
    position: relative; 
    padding: 5%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 5; 
  }
  .react-calendar__navigation {
    justify-content: center;
    margin-bottom: 5%; 
  }
  .react-calendar__navigation button {
    font-weight: bold;
    font-size: 2rem;
    font-family: SeoulHangang;
    line-height: 22px; 
    color: #4C434E;
    margin: 0 0.5vw;
  }
  .react-calendar__navigation button:focus {
    background-color: white;
  }
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 22px; 
    color: #4C434E;
    font-family: Pretendard;
  }
  .react-calendar__month-view__weekdays{
    margin-bottom: 1vh;
  }
  .react-calendar__month-view__days {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
    .react-calendar__month-view__days__day {
    padding: 1%;
  }
  .react-calendar__month-view__days__day abbr { 
    color: #78716C;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
  }
  .react-calendar__tile--now {
    background-color: white !important;
  }
  .react-calendar__tile--now abbr {
    color: orange;
  }
  
  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: transparent;
  }
  .react-calendar__tile--hasActive abbr {
    color: white;
  }
  .react-calendar__tile {
    padding: 2vh 0 !important;
    position: relative;
    font-size: 1.25rem;
  }
  
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
  
  }
  .react-calendar__tile.highlight {
    background-color: #FFCB3A;
    border-radius: 15px;
  }

`;


