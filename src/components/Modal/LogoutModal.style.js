import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const LogoutModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
  @media (min-width: 431px) {
    background: rgba(82, 82, 82, 0.3);
    backdrop-filter: blur(2.5px);
  }
`;

export const LogoutModal = styled.div`
  position: fixed;
  background-color: white;
  z-index: 91;
  padding: 20px;
  border-radius: 24px;
  text-align: center;
  opacity: 1;
  animation: ${({ fadingOut }) => (fadingOut ? fadeOut : fadeIn)} 0.35s ease;
  .sub {
    font-size: 1.25rem;
    margin: 0;
    color: #52525b;
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
  .warning {
    font-family: Pretendard;
    font-size: 1rem;
    color: #9f9f9f;
    margin: 0;
  }
  @media (min-width: 431px) {
    width: 26rem;
    .sub {
      padding: 0 1%;
    }
  }
  @media (max-width: 430px) {
    width: 25rem;
    .sub {
      padding: 0 3%;
    }
  }
`;

export const LogoutModalTitle = styled.h2`
  margin: 1.4vh 0;
  font-size: 1.35rem;
  color: #27272a;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.648px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
  height: 8vh;
  @media (min-width: 431px) {
    margin-top: 5px;
  }
`;

export const CancelButton = styled.button`
  width: 45%;
  margin: 15px 5px 10px 10px;
  font-size: 1.125rem;
  border: none;
  background-color: #e8e9eb;
  color: #52525b;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  @media (min-width: 431px) {
    height: 5.5vh;
    border-radius: 18px;
    letter-spacing: -0.54px;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    height: 5.5vh;
    letter-spacing: -0.45px;
  }
`;

export const LogoutClickButton = styled.button`
  width: 45%;
  margin: 15px 10px 10px 5px;
  font-size: 1.125rem;
  border: none;
  background-color: #ed6243;
  color: white;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  @media (min-width: 431px) {
    height: 5.5vh;
    border-radius: 18px;
    letter-spacing: -0.54px;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    height: 5.5vh;
    letter-spacing: -0.45px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  color: #27272a;
  cursor: pointer;
  img {
    height: 2.7vh;
  }
  @media (max-width: 430px) {
    top: 1.5vh;
    right: 2.5vw;
  }
  @media (min-width: 431px) {
    top: 1.5vh;
    right: 1vw;
  }
`;

export const AirplaneImage = styled.img`
  width: 100%;
`;

export const Deletewebp = styled.img`
  width: 68%;
  height: 52.8%;
  padding: 0 0 0 18%;
`;

export const OKButton = styled.button`
  width: 100%;
  margin: 15px 5px 10px 10px;
  font-size: 1.125rem;
  border: none;
  background-color: #e8e9eb;
  color: #52525b;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  @media (min-width: 431px) {
    height: 5vh;
    border-radius: 18px;
    letter-spacing: -0.54px;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    height: 5.5vh;
    letter-spacing: -0.45px;
  }
`;

export const SubmitButton = styled.button`
  width: 45%;
  margin: 15px 5px 10px 10px;
  font-size: 1.125rem;
  border: none;
  background-color: #ed6243;
  color: white;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  @media (min-width: 431px) {
    height: 5.5vh;
    border-radius: 18px;
    letter-spacing: -0.54px;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    height: 5.5vh;
    letter-spacing: -0.45px;
  }
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 20vh;
  font-size: 1rem;
  padding: 16px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: #f3f3f3;
  font-family: Pretendard;
  resize: none;

  &:focus {
    outline: none;
  }
`;
