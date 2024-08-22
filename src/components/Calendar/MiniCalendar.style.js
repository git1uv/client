import styled from 'styled-components';
import Calendar from 'react-calendar';
import "../../../node_modules/react-calendar/dist/Calendar.css"; 
import {bigTape} from '../../assets/CalendarImg/icons';

export const MiniCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; 
  z-index: 3;
  position: relative; 

  &::before {
    content: "";
    position: absolute;
    top: -5%; 
    left: 50%;
    transform: translateX(-50%);
    background-image: url(${bigTape});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 6;
    @media (min-width: 1024px) and (max-width: 1200px) {
    width: 127px;
    height: 40px;
    }
    @media (min-width: 1201px) {
      width: 179px;
      height: 56px;
    }
  }

  @media screen and (max-width: 430px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 270px;
    height: 318px;
    margin: 40px 0 0 100px;
  }
  @media (min-width: 1201px) {
    width: 380px;
    height: 448px;
    margin: 66px 0 0 152px;
  }
  .react-calendar {
    width: 100%;
    border: none;
    height: 100%;
    border-radius:0;
    justify-content: center;
    align-items: center;
    position: relative; 
    padding: 11% 5% 5%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 5; 
  }
  .react-calendar__navigation {
    justify-content: center;
    margin-bottom: 5%; 
  }
  .react-calendar__navigation button {
    font-weight: bold;
    font-family: SeoulHangang;
    line-height: 22px; 
    color: #4C434E;
    @media (min-width: 1441px){
      font-size: 2rem;
      margin: 0 0.5vw !important;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
      font-size: 1.5rem;
      margin: 0 0.3vw !important;
    }
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
    font-size: 0.94rem;
    line-height: 22px; 
    color: #000;
    font-family: SeoulHangang;

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
    color: #000;
    text-align: center;
    font-family: SeoulHangang;
    font-size: 0.94rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
  }
  .react-calendar__tile--now {
    background-color: white;
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
    position: relative;
    font-size: 1.25rem;
    z-index: 5;
    @media (min-width: 1201px){
      padding: 4.7% 0 !important;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      padding: 3.3% 0 !important;
    }

  }
  
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
  
  }
  .react-calendar__tile.highlight {
    background-color: #FFCB3A !important;
    border-radius: 15px;
  }

`;

export const MiniDot = styled.div`
  border-radius: 50%;
  width: 0.56rem;
  height: 0.56rem;
  position: absolute;
  top: 70%;
  left: 50%;
  background-color: #FFCB3A;
  transform: translateX(-50%);
  z-index: 10; 
`;


