import styled from 'styled-components';
import theme from '../../../constants/theme'

const {ALIGN} = theme;

export const App = styled.div`
    ${ALIGN.COLUMN_CENTER};
    margin-top: 200px;
`
export const Container = styled.div`

  background-color: #f2f2f2; // 배경 색상 설정
  width: 80%; // 컴포넌트 너비 설정
  height: auto; // 높이는 내용에 맞게 자동 설정
  border-radius: 20px; // 직사각형 부분의 모서리를 둥글게 설정
  position: relative;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // 그림자 효과
`;

export const Top = styled.div`
    display: flex;
`

export const Header = styled.div`
  width: 100px; // 원의 너비와 높이를 설정
  height: 100px;
  border-radius: 50%; // 원형을 만들기 위해 50%로 설정
  background-color: #fff; // 원의 배경 색상
  position: absolute; // 원을 컨테이너의 상대적 위치에 놓기 위해 사용
  top: -50px; // 컨테이너 상단에서 50px 위로 이동
  left: 20px; // 컨테이너 왼쪽에서 20px 떨어뜨림
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // 그림자 효과

  img {
    border-radius: 100%;
    width: 100px;
  }
`;

export const Name = styled.div` // 000의 일지
    margin-left: 10rem; 
    div{}
    h3 {}
`

export const Bottom = styled.div`
  margin-top: 60px; // 원에 의한 상단 여백 추가
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