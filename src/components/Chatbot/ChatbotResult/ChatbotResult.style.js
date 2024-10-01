import styled from 'styled-components';
import theme from '../../../constants/theme'
import background from '../../../assets/chatbot/result/background.png.webp'
import paper from '../../../assets/chatbot/result/paperWeb.png.webp'
import download from '../../../assets/chatbot/result/download.png.webp'

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
  
  @media (max-width: 1470px) {
    width: 60.5625rem;
    height: 34.5rem;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 30rem;
    height: 50rem;
  }
  border-radius: 20px; // 직사각형 부분의 모서리를 둥글게 설정
  padding: 4rem;
`;

export const Top = styled.div`
    display: flex;
`

export const Header = styled.div`
  border-radius: 50%; // 원형을 만들기 위해 50%로 설정
  width: 10rem;
  margin: -2.5rem 0 0 -2rem;

  @media (max-width: 1470px) {
    margin: -1rem 0 0 -0.5rem;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 30rem;
    height: 50rem;
  }
  img {
    width: 12.68369rem;
    border-radius: 50%;
    
    @media (max-width: 1470px) {
      width: 9rem;
      margin-top: -2rem;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
      width: 30rem;
      height: 50rem;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media(min-width: 1470px) {
    margin-left: 4rem;
  }
  section {
    ${ALIGN.ROW_CENTER};
    width: 130%;
    height: 40%;
    flex-shrink: 0;
    background: #FFF;
    color: #000;

    font-family: SeoulHangang;
    font-size: 1.75rem;
    @media (max-width: 1470px) {
      font-size: 1.25rem;
      line-height: 1.2rem;
    }
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.0175rem;
  }
`

export const Name = styled.div` // 000의 일지
  ${ALIGN.ROW_CENTER};
  margin-top: 2rem;
  @media (max-width: 1470px) {
    margin-top: 1rem;
  }
  div {
    ${ALIGN.ROW_CENTER};
    width: 9.0625rem;
    height: 2.11456rem;

    border-radius: 2.63244rem;
    border: 1px solid #ED6243;
    background: #F4F2EC;
    
    color: #ED6243;
    font-family: SeoulHangang;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.01rem;
  }
  h3 {
    margin-top: 0.5rem;
    margin-left: 1rem;
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
  gap: 2%;
  width: 100%;
  height: 60%;
  padding: 0 2%;
  margin-top: 5%;
`;

export const ContentBox = styled.div`
  width: 100%;
`

export const Content = styled.div`
  ${ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 90%;
  background: white;
  border-radius: 20px;
  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

  p {
    width: 95%;
    margin: 5% 0;
    padding: 2%;

    color: #000;
    font-family: Pretendard;
    font-size: 1.125rem;
    line-height: 1.625rem; 
    @media (max-width: 1470px) {
      font-size: 0.75rem;
      line-height: 1.2rem;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
      font-size: 0.75rem;
    }
    // font-style: normal;
    font-weight: 500;
  }

  section {
    width: 90%;
    height: 4px;
    background: #EDEDED;
  }

  div {
    ${ALIGN.ROW_CENTER};
    width: 100%;
    height: 33.3%;
  }
`


export const Title = styled.div`
  ${ALIGN.ROW_CENTER};
  width: 100%;
  margin-bottom: 2%;
  img {
    width: 10%;
    }
  h2 {
    width: 90%;
    margin: 0 0 0 1%;
    color: #ED6243;
    font-family: Pretendard;
    font-size: 1.25rem;
    @media (max-width: 1470px) {
      font-size: 1rem;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
      font-size: 0.75rem;
    }
    // font-style: bold;
    font-weight: 600;
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
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
      width: 3.75rem;
      height: 3.75rem;
      
      box-shadow: 0px 4px 6px #E3DECB;
      border: none;
      border-radius: 50%;
    }
    &:last-child {
      ${ALIGN.ROW_CENTER};
      width: 23.125rem;
      height: 3.375rem;

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