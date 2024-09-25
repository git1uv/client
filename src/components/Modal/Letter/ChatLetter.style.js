import styled from 'styled-components';
import FBackground from '../../../assets/letterImg/letter_f.png';
import TBackground from '../../../assets/letterImg/letter_t.png';
import HBackground from '../../../assets/letterImg/letter_half.png';

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
  @media (min-width: 1601px) {
    width: 762px;
    height: 744px;
  }
  @media (min-width: 1471px) and (max-width: 1600px) {
    width: 696px;
    height: 680px;
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    width: 557px;
    height: 544px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 512px;
    height: 500px;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    width: 512px;
    height: 500px;
  }
  @media (max-width: 430px) {
    width: 371px;
    height: 363px;
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ chatbotType }) => 
    chatbotType === 'F' ? `url(${FBackground})` : 
    chatbotType === 'T' ? `url(${TBackground})` : 
    chatbotType === 'H' ? `url(${HBackground})` : 
    `url(${HBackground})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 8%;
  right: 7.8%;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8%;
  left: 7.8%;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const Text = styled.div`
  position: absolute;
  width: 60%;
  height: 40%;
  top: 40%;
  left: 20%;
  color: #27272A;
  text-align: center;
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem; 
  @media (min-width: 1471px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    font-size: 1.25rem;
  }
  @media (min-width: 431px) and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 430px) {
    font-size: 1.3rem;
    line-height: 22px; 
  }
`;

export const Date = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
  font-size: 1.25rem;
  text-align: center;
  color: #52525B;
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

