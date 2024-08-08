import { createGlobalStyle } from 'styled-components';
import seoul from './assets/font/fontOriginal.ttf'

const GlobalStyle = createGlobalStyle`
  @media (max-width: 430px) {
    height: 100dvh;
  }

  html {
    font-size: 16px; // 기본 폰트 사이즈를 16px로 설정
  }

  button {
    cursor: pointer;
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
    @font-face {
      font-family: 'seoul';
      src: url(${seoul}) format('truetype');
    }
`;

export default GlobalStyle;
