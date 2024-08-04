import styled from 'styled-components';
import webLetter from '../../assets/letterImg/modal_letter_web.png';
import mobileLetter from '../../assets/letterImg/modal_letter_mobile.png';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 80;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

`;

export const ModalContainer = styled.div`
  z-index: 81;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 431px) {
    width: 40%;
    height: 65%;
  }
  @media (max-width: 430px) {
    width: 100%;
    height: 80%;
  }
`;

export const Modal = styled.div`
  z-index: 82;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 8px 7px 0px #98987F;

  @media (max-width: 430px) {
    background-image: url(${mobileLetter});
    width: 80%;
    height: 56%;
    padding: 30px 20px;
    top: 10vh;

  }
  @media (min-width: 431px) {
    background-image: url(${webLetter});
    width: 20.5vw;
    height: 42.5vh;
    padding: 40px;
    top: 3vh;
  }



`;

export const GoToLetterButton = styled.button`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ED6243;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.125rem;
  cursor: pointer;
  height: 3.75rem;
  @media (max-width: 430px) {
    top: 66vh;
    width: 73.5vw;
    right: 5%;

  }
  @media (min-width: 431px) {
    top: 56.5vh;
    width: 20.5vw;
    right: 7.4vw;
  }

`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 3.5vh;
  right: 1.5vw;
  background: none;
  border: none;
  img{
    height: 2.7vh;
  }
`;
export const DownloadButton = styled.button`
  position: absolute;
  width: 3.75rem;
  height: 3.75rem;
  border: none;
  border-radius: 50%;
  background-color: white;
  filter: drop-shadow(0px 4px 6px rgba(32, 32, 32, 0.25));
  @media (max-width: 430px) {
    top: 66vh;
    left: 5%;

  }
  @media (min-width: 431px) {
    top: 56.5vh;
    left: 7.4vw;
  }
`;

