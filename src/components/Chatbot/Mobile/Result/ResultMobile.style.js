import styled from 'styled-components';
import theme from '../../../../constants/theme'
import paper from '../../../../assets/chatbot/result/paperMobile.png'
import download from '../../../../assets/chatbot/result/download.png'

const {ALIGN, RESPONSIVE_SIZE} = theme;

export const App = styled.div`
  ${ALIGN.ROW_CENTER};
  width: 100%;
  height: auto;
  margin-top: 7dvh;
  padding: 2dvh;
  background: #F4F2EC;
`
export const Container = styled.div`
    margin-top: 7dvh;
    width: 100%; /* 양옆으로 꽉 차게 하기 */
    height: 150vh; /* 모바일 화면 높이의 두 배 */
    overflow-y: hidden; /* 수직 스크롤 가능하게 */
    

    background-image: url(${paper}); /* 배경 이미지 */
    background-size: contain; /* 배경 이미지 크기 조절 */
    background-repeat: no-repeat; /* 배경 이미지 반복하지 않음 */
    background-position: center; /* 배경 이미지 중앙 정렬 */
    margin: 0 auto; /* 가운데 정렬 */

    // border: 1px black solid;

`

export const Top = styled.div`
    display: flex;
    width: 100%;
`

export const Header = styled.div`
  border-radius: 50%; // 원형을 만들기 위해 50%로 설정
  width: 28%;
  margin: 8% 0 0 3%;

  img {
    width: 100%;
    border-radius: 50%;

  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin: 20% 0 0 2%;
  width: 60%;

  section {
    ${ALIGN.ROW_CENTER};
    width: 100%;
    height: 4vh;
    flex-shrink: 0;
    background: #FFF;
    color: #000;

    font-family: SeoulHangang;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0175rem;
  }
`

export const Name = styled.div` // 000의 일지
  display: flex;
  align-items: center;
  width: 100%;
  
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.01rem;
  
  div {
    ${ALIGN.ROW_CENTER};
    width: 60%;
    height: 4vh;

    border-radius: 2.63244rem;
    border: 1px solid #ED6243;
    background: #F4F2EC;
    
    color: #ED6243;
    font-size: 1.25rem;
    
  }
  h3 {
    margin-top: 4%;
    margin-left: 1rem;
    color: #000;
    font-size: 1rem;
  }
`
export const Bottom = styled.div`
  width: 90%;
  height: 82.5%;
  margin: 5% 0 0 5%;

  // border: 1px solid red;
`;

export const ContentBox = styled.div`
  width: 100%;
  gap: 12%;
`

export const Content = styled.div`
  ${ALIGN.COLUMN_CENTER};
  width: 100%;
  // height: 100%;
  height: 32vh;
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
    font-style: normal;
    font-weight: 300;
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
  margin: 4% 0 2% 0;
  img {
    width: 10%;
    }
  h2 {
    width: 90%;
    margin: 0 0 0 1%;
    color: #ED6243;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    }
`
export const BtnBox = styled.div`
  ${ALIGN.ROW_CENTER};
  width: 100%;
  gap: 2%;
  margin-top: 5%;
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
