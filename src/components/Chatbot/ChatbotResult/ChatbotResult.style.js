import styled from 'styled-components';
import theme from '../../../constants/theme'
import background from '../../../assets/chatbot/result/background.png'
import paper from '../../../assets/chatbot/result/paper.png'

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
  background-size: cover;
  background-position: center;
  width: 80.5625rem;
  height: 49.80088rem;
  
  @media (max-width: 1440px) {
    width: 60.5625rem;
    height: 38.0625rem;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 30rem;
    height: 50rem;
  }
  border-radius: 20px; // 직사각형 부분의 모서리를 둥글게 설정
  position: relative;
  padding: 1.5%;
`;

export const Top = styled.div`
    display: flex;

`

export const Header = styled.div`
  border-radius: 50%; // 원형을 만들기 위해 50%로 설정
  // position: absolute; // 원을 컨테이너의 상대적 위치에 놓기 위해 사용
  // top: calc(0% + 25px); // 컨테이너 상단에서 50px 위로 이동
  // left: calc(0% + 32px); // 컨테이너 왼쪽에서 20px 떨어뜨림
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
    flex-shrink: 0;
  }
`;

export const Name = styled.div` // 000의 일지
    margin-left: 13rem; 
    div{}
    h3 {}
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
  gap: 1rem;

`;

export const ContentBox = styled.div`
  div {}
`

export const Title = styled.div`
    img {}
    h2 {}
`

export const BtnBox = styled.div`
    button {
    &:first-child {}
    $:last-child {}
    }
`