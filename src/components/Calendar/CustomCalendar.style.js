import styled from 'styled-components';
import Calendar from 'react-calendar';
import "../../../node_modules/react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  position: relative;
  @media screen and (max-width: 430px) {
    height: 82vh; 
    width: 100%;
    margin-top: 7vh;
  }
  @media (min-width: 431px) and (max-width: 768px){
    height: 35rem; 
    width: 33rem;
    margin-top: 10.3vh;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    width: 50rem;
    height: 46rem;
    margin-top: 5.3vh;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 48rem;
    height: 44rem;
    margin-top: 5.3vh;
  }
  @media (min-width: 1201px) and (max-width: 1470px){
    width: 48rem;
    height: 44rem;
    margin-top: 5.3vh;
  }
  @media (min-width: 1471px) and (max-width: 1600px){
    width: 55rem;
    height: 50rem;
    margin-top: 5.3vh;
  }
  @media (min-width: 1601px) {
    width: 60rem;
    height: 55rem;
    margin-top: 5.3vh;
  }

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
    align-items: center;
    margin-bottom: 3%; 
    @media screen and (max-width: 430px) {
    justify-content: space-between;
    flex-wrap: nowrap;
    }
    @media (min-width: 431px) and (max-width: 768px) {
      margin-bottom: 1%; 
    }
  }
  
  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: bold;
    font-size: 2rem;
    font-family: SeoulHangang;
    line-height: 22px; 
    color: #4C434E;
    margin: 0 1vw;
    padding: 0;
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
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 22px; 
    color: #4C434E;
    font-family: Pretendard;
  }
  .react-calendar__month-view__weekdays{
    margin-bottom: 1vh;
    @media (min-width: 431px) and (max-width: 768px) {
      margin-bottom: 1%; 
    }
  }
  .react-calendar__month-view__days {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

  
  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background-color: white;
  }
  .react-calendar__tile--now.react-calendar__month-view__days__day abbr {
    color: white;
    background-color: #FFCB3A;
    border-radius: 50%; 
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    @media (max-width: 430px) {
      line-height: 20px;
    }
    @media (min-width: 431px) {
      line-height: 28px;
    }
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #e6e6e6 !important;
  }
  
  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: transparent;
  }
  .react-calendar__tile--hasActive abbr {
    color: black;
  }
  .react-calendar__tile--hasActive:hover {
    background-color: #e6e6e6;
  }
  
  /* 일 날짜 간격 */
  .react-calendar__tile {
    position: relative;
    font-size: 1.25rem;
    border-radius: 0.8rem;
    @media (max-width: 430px) {
      padding: 1% 0 20%;
    }
    @media (min-width: 431px) and (max-width: 768px) {
      padding: 0.3% 0 11%;
    }
    @media (min-width: 769px) and (max-width: 1023px) {
      padding: 0.3% 0 11.5%;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      padding: 0.2% 0 11%;
    }
    @media (min-width: 1201px) and (max-width: 1470px) {
      padding: 0.2% 0 11.5%;
    }
    @media (min-width: 1471px) and (max-width: 1600px) {
      padding: 0.4% 0 12%;
    }
    @media (min-width: 1601px) {
      padding: 0.8% 0 12%;
    }
  }
  
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__tile--now.react-calendar__year-view__months__month abbr  { 
    color: #FFCB3A; 
  }
  .react-calendar__year-view__months__month:hover { 
    background-color: #e6e6e6 !important;
  }
  .react-calendar__year-view .react-calendar__tile, 
  .react-calendar__decade-view .react-calendar__tile, 
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  
`;

export const StyledEmotion = styled.div`
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  position: absolute;
  transform: translateX(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  @media (max-width: 430px) {
    width: 3.25rem;
    height: 3.25rem;
  }
  @media (min-width: 431px) and (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    width: 4.25rem;
    height: 4.25rem;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 3.75rem;
    height: 3.75rem;
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 1471px) and (max-width: 1600px) {
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 1601px) {
    width: 5.5rem;
    height: 5.5rem;
  }
`;
export const Circle = styled.div`
  background-color: ${({ circleColor }) => circleColor};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 430px) {
    width: 3.75rem;
    height: 3.75rem;
    top: 50%;
  }
  @media (min-width: 431px) and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    top: 65%;
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    width: 5rem;
    height: 5rem;
    top: 60%;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 4.25rem;
    height: 4.25rem;
    top: 60%;
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    width: 4.5rem;
    height: 4.5rem;
    top: 60%;
  }
  @media (min-width: 1471px) and (max-width: 1600px) {
    width: 5rem;
    height: 5rem;
    top: 60%;
  }
  @media (min-width: 1601px) {
    width: 6.25rem;
    height: 6.25rem;
    top: 60%;
  }
`;
export const MonthLabel = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.16rem;
  font-style: normal;
  font-weight: 200;
  line-height: 12px; /* 85.714% */
  letter-spacing: -0.408px;
  margin: 0 2.5vw 2vh;
`;

