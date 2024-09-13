import styled from 'styled-components';
import theme from '../../../constants/theme'
import background from '../../../assets/chatbot/result/background.png'
import paper from '../../../assets/chatbot/result/paper.png'
import download from '../../../assets/chatbot/result/download.png'

const {ALIGN, RESPONSIVE_SIZE} = theme;

export const App = styled.div`
  ${ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 90vh;
  margin-top: 10vh;

  background-image: url(${background});
  background-size: cover;
  background-color: #F4F2EB;
  background-position: center;
`
export const Container = styled.div`
  background-image: url(${paper});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 80.5625rem;
  height: 49.80088rem;
  
  @media (max-width: 1440px) {
    width: 60.5625rem;
    height: 34.5rem;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 30rem;
    height: 50rem;
  }
  border-radius: 20px; // 직사각형 부분의 모서리를 둥글게 설정
  padding: 4%;
`;

export const Top = styled.div`
    display: flex;
    // height: 35%;
`

export const Header = styled.div`
  border-radius: 50%; // 원형을 만들기 위해 50%로 설정
  width: 20%;
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
      width: 30rem;
      height: 50rem;
    }
  img {
    width: 12.68369rem;
    
    @media (max-width: 1440px) {
      width: 9rem;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
      width: 30rem;
      height: 50rem;
    }
  }
`;

export const Name = styled.div` // 000의 일지
    margin: 5rem 0 0 1rem; 
    div {
      ${ALIGN.COLUMN_CENTER};
      width: 13.125rem;
      height: 3.0625rem;
      border-radius: 3.8125rem;
      background: #ED6243;
      
      color: #FFF;
      font-family: SeoulHangang;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.0175rem;
    }
    h3 {
      margin-top: 0.5rem;
      margin-left: 2rem;
      color: #000;
      font-family: SeoulHangang;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.01rem;
    }
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
  gap: 1rem;
  width: 100%;
  height: 60%;
  padding: 0 2%;
  margin-top: 1%;
`;

export const ContentBox = styled.div`
  width: 100%;
  color: #000;
  font-family: Pretendard;
  font-size: 1.125rem;
  @media (max-width: 1440px) {
    font-size: 0.6rem;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    font-size: 0.75rem;
  }
  font-style: normal;
  font-weight: 300;
  line-height: 1.625rem; /* 144.444% */
  div {
  }
`

export const Title = styled.div`
  ${ALIGN.ROW_CENTER};
  width: 100%;
  img {
    width: 10%;
    }
  h2 {
    width: 90%;
    margin: 0 0 0 1%;
    color: #ED6243;
    font-family: Pretendard;
    font-size: 1.25rem;
    @media (max-width: 1440px) {
      font-size: 1rem;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
      font-size: 0.75rem;
    }
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    }
`

export const BtnBox = styled.div`
  ${ALIGN.ROW_CENTER};
  width: 100%;
  gap: 2%;
  margin-top: 1%;
  button {
    &:first-child {
      background-image: url(${download});
      background-size: cover;
      background-position: center;
      width: 3.75rem;
      height: 3.75rem;
      
      box-shadow: 0px 4px 6px #E3DECB;
      border: none;
      border-radius: 50%;
    }
    &:last-child {
      ${ALIGN.COLUMN_CENTER};
      width: 23.125rem;
      padding: 1.3125rem 0rem 1.0625rem 0rem;

      border-radius: 0.9375rem;
      border: none;
      background: #ED6243;

      color: #FFF;
      text-align: center;
      font-family: Pretendard;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.03375rem;
    }
  }
`