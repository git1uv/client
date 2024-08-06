import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px; // 기본 폰트 사이즈를 16px로 설정
  }

  @media (max-width: 1440px) {
    html {
      font-size: 15px; // 화면 너비가 1440px 이하일 때
    }
  }
  @media (max-width: 1200px) {
    html {
      font-size: 13px; // 화면 너비가 1200px 이하일 때
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 12px; // 화면 너비가 768px 이하일 때
    }
  }
  @media (max-width: 430px) {
    height: 100dvh;
  }
`;

export default GlobalStyle;
