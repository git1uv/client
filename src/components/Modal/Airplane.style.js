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
    width: 313px;
    height: 345px;
    padding: 30px 20px;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    background-image: url(${webLetter});
    width: 200px;
    height: 262.8px;
    padding: 40px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${webLetter});
    width: 250px;
    height: 328.5px;
    padding: 40px;
  }
  @media (min-width: 1441px) {
    background-image: url(${webLetter});
    width: 360px;
    height: 473px;
    padding: 40px;
  }

`;

export const ButtonContainer = styled.div`
  z-index: 62;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  @media (min-width: 1441px) {
    width: 25.5vw;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 330px;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    width: 280px;
  }
  @media (max-width: 430px) {
    width: calc(80% + 40px);
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
  display: flex;
  justify-content: center;
  align-items: center;
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

export const From = styled.div`
  font-size: 1.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

`;


export const Text = styled.div`
  font-size: 1.375rem;
  width: 100%;
  height: 50%;
`;


export const Date = styled.div`
  font-size: 1.125rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px; 
`;

export const WarningMessage = styled.div`
  font-size: 1rem;
  color: #A8A29E;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;



