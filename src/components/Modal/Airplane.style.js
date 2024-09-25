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
  z-index: 60;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

`;

export const ModalContainer = styled.div`
  z-index: 61;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 431px) {
    width: 30%;
    height: 70%;
  }
  @media (max-width: 430px) {
    width: 100%;
    height: 60%;

  }
`;

export const Modal = styled.div`
  z-index: 62;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 8px 7px 0px #98987F;

  @media (max-width: 430px) {
    background-image: url(${mobileLetter});
    width: 90%;
    height: 90%;
    padding: 30px 20px;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    background-image: url(${webLetter});
    width: 400px;
    height: 502px;
    padding: 30px;
  }
  @media (min-width: 1024px) and (max-width: 1470px) {
    background-image: url(${webLetter});
    width: 320px;
    height: 402px;
    padding: 30px;
  }
  @media (min-width: 1471px) {
    background-image: url(${webLetter});
    width: 440px;
    height: 553px;
    padding: 40px;
  }

`;

export const ButtonContainer = styled.div`
  z-index: 62;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  @media (min-width: 1471px) {
    width: 440px;
  }
  @media (min-width: 1024px) and (max-width: 1470px) {
    width: 310px;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 85%;
  }
`;


export const GoToLetterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ED6243;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 430px) {
    top: 66vh;
    width: 73.5vw;
    right: 5%;
    height: 3.5rem;

  }
  @media (min-width: 1471px) {
    top: 56.5vh;
    width: 85%;
    right: 7.4vw;
    height: 3.5rem;
  }
  @media (min-width: 431px) and (max-width: 1470px) {
    top: 56.5vh;
    width: 80%;
    right: 7.4vw;
    height: 3rem;
  }

`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 3vh;
  right: 1.5vw;
  background: none;
  border: none;
  img{
    height: 2.7vh;
  }
`;
export const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: white;
  filter: drop-shadow(0px 4px 6px rgba(32, 32, 32, 0.25));
  @media (max-width: 430px) {
    top: 66vh;
    left: 5%;
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 1471px) {
    top: 56.5vh;
    left: 7.4vw;
    width: 3.5rem;
    height: 3.5rem;
  }
  @media (min-width: 431px) and (max-width: 1470px) {
    top: 56.5vh;
    left: 7.4vw;
    width: 3rem;
    height: 3rem;
  }
`;

export const From = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  color: #404040;
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;


export const Text = styled.div`
  font-size: 1.375rem;
  width: 100%;
  height: 75%;
  color: #404040;
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 430px) {
    font-size: 1.2rem;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    font-size: 1rem;
  }
`;


export const Date = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px; 
  color: #000;
  text-align: right;
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; 
  letter-spacing: -0.408px;
  width: 100%;

`;

export const WarningMessage = styled.div`
  font-size: 0.75rem;
  color: #A8A29E;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.408px;

`;



