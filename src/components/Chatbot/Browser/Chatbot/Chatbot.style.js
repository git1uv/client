import styled from "styled-components";
import backgroundImg from "../../../../assets/chatbot/background.webp";
import { IoIosArrowBack } from "react-icons/io";
import theme from "../../../../constants/theme"; // theme 파일의 경로
import Lottie from "lottie-react";

const { ALIGN, RESPONSIVE_SIZE } = theme;

export const App = styled.div`
  ${ALIGN.COLUMN_CENTER};

  width: 100%;
  // height: 100vh;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-color: #eeece3;
  background-position: center;

  @media (max-width: 430px) {
    height: 100dvh;
  }
  z-index: 1;
`;

export const Top = styled.div`
  ${ALIGN.ROW_CENTER};
  position: relative; /* 자식 요소들의 기준점 설정 */
  width: 100%; /* 컨테이너의 너비 */
`;

export const Character = styled.img`
  position: relative;
  width: 230px;
  height: auto;
  z-index: 80;

  @media (max-width: 1470px) {
    width: 200px;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 170px;
  }
`;
export const Emotion = styled(Lottie)`
  position: absolute;
  z-index: 90;
  width: 115px;
  height: auto;
  bottom: calc(50% - 90px);
  left: calc(50% - 62.5px);

  @media (max-width: 1470px) {
    width: 95px;
    bottom: calc(50% - 80px);
    left: calc(50% - 52.5px);
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 75px;
    bottom: calc(50% - 68px);
    left: calc(50% - 130px);
  }
`;

export const Chair = styled.img`
  position: absolute;
  width: 400px;
  height: auto;

  bottom: calc(
    50% - 93px
  ); /* Chair 이미지 하단에 Character가 위치하도록 설정 */
  left: calc(50% - 155px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */

  @media (max-width: 1470px) {
    width: 370px;
    bottom: calc(
      50% - 80px
    ); /* Chair 이미지 하단에 Character가 위치하도록 설정 */
    left: calc(50% - 140px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */
  }

  @media (max-width: 630px) {
    width: 340px;
    bottom: calc(
      50% - 68px
    ); /* Chair 이미지 하단에 Character가 위치하도록 설정 */
    left: calc(50% - 130px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */
  }

  z-index: 70;
`;

export const Bottom = styled.div`
  ${ALIGN.COLUMN_CENTER};

  width: 80.5625rem;
  height: 43.41075rem;

  @media (max-width: 1470px) {
    width: 60.5625rem;
    height: 30.41075rem;
  }
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 30rem;
    height: 50rem;
  }

  border-radius: 2.5rem;
  border: 1px solid #fff;
  background: rgba(243, 243, 243, 0.85);
  box-shadow: 3px 2px 20px 0px rgba(95, 95, 95, 0.25) inset;
  backdrop-filter: blur(10px);
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  width: 100%;
  height: 12.5%;
  background-color: #f5f4f2;
  border-radius: 2.5rem 2.5rem 0 0;
  filter: drop-shadow(0px 4px 4px rgba(165, 165, 165, 0.25));

  h1 {
    width: 80%;
    text-align: center;
    margin: 0 0 0 3%;
    color: #27272a;
    font-family: SeoulHangang;
    font-size: 1.5rem;
    @media (max-width: 1470px) {
      font-size: 1.25rem;
    }
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.015rem;
  }
  button {
    width: 12%;
    height: 2.8rem;
    margin-right: -4%;
    position: relative;

    border-radius: 4.8125rem;
    background: #ed6243;
    border: none;

    color: white;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: normal;

    &:hover + div {
      /* BackBtn 위에 말풍선이 나오도록 설정 */
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const BackBtn = styled(IoIosArrowBack)`
  width: 4%;
  height: auto;
  margin: 0 3% 0 -3%;
  color: #ed6243;
  position: relative;
  cursor: pointer;

  &:hover + div {
    /* BackBtn 위에 말풍선이 나오도록 설정 */
    visibility: visible;
    opacity: 1;
  }
`;

export const SpeechBubble = styled.div`
  ${ALIGN.COLUMN_CENTER};
  gap: 0.5rem;
  position: absolute;

  bottom: calc(90%);
  right: ${(props) =>
    props.id === "back" ? "calc(50% + 34%)" : "calc(50% - 52%)"};

  @media (max-width: 1470px) {
    bottom: calc(100%);
    right: ${(props) =>
      props.id === "back" ? "calc(50% + 30%)" : "calc(50% - 52.5%)"};
  }

  width: 12.5625rem;
  height: 7rem;

  background: #f4f2eb;
  border-radius: 1.25rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  visibility: hidden;
  opacity: 0;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    border: 1rem solid transparent;
    border-top-color: #f4f2eb;
    border-bottom: 0;
    border-left: ${(props) => props.id === "back" && "0"};
    border-right: ${(props) => props.id === "end" && "0"};
    margin-left: ${(props) => (props.id === "back" ? "-3rem" : "1rem")};
    margin-bottom: -0.8rem;
  }

  h1,
  p {
    margin: 0;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    line-height: 1.5rem; /* 133.333% */
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }
`;
