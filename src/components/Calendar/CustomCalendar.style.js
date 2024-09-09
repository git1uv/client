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
    margin-top: 5.3vh;
  }
  @media screen and (max-width: 430px) {
    height: 87vh; 
    width: 100%;
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
    margin-bottom: 5%; 
    @media screen and (max-width: 430px) {
    justify-content: space-between;
    flex-wrap: nowrap;
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
  .react-calendar__tile--now abbr {
    color: white;
    background-color: #FFCB3A;
    border-radius: 50%; 
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    text-align: center;
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
    color: white;
  }
  
  /* 일 날짜 간격 */
  .react-calendar__tile {
    position: relative;
    font-size: 1.25rem;
    border-radius: 0.8rem;
    @media (max-width: 430px) {
      padding: 2vh 1vw 8vh;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      padding: 2vh 0 7vh;
    }
    @media (min-width: 1201px) and (max-width: 1440px) {
      padding: 2vh 0 7vh;
    }
    @media (min-width: 1441px) and (max-width: 1600px) {
      padding: 1vh 0 7vh;
    }
    @media (min-width: 1601px) {
      padding: 1vh 0 10vh;
    }
  }
  
  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
  
  }
  
`;

export const StyledEmotion = styled.div`
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;
export const Circle = styled.div`
  background-color: ${({ hasCounseling }) => (hasCounseling ? '#cccccc' : '#F4F2EB')};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 430px) {
    width: 5.6vh;
    height: 5.6vh;
    top: 70%;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 6vh;
    height: 6vh;
    top: 70%;
  }
  @media (min-width: 1201px) and (max-width: 1440px) {
    width: 6vh;
    height: 6vh;
    top: 70%;
  }
  @media (min-width: 1441px) and (max-width: 1600px) {
    width: 6vh;
    height: 6vh;
    top: 70%;
  }
  @media (min-width: 1601px) {
    width: 9vh;
    height: 9vh;
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

