import styled, { keyframes } from 'styled-components';

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

export const ModalBg = styled.div`
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
  }
`;
export const Modal = styled.div`
  position: fixed;
  background-color: white;
  z-index: 91;
  padding: 20px;
  border-radius: 24px;
  text-align: center;
  opacity: 1;
  animation: ${({ fadingOut }) => fadingOut ? fadeOut : fadeIn} 0.35s ease;
  @media (max-width: 430px) {
    width: 25.5rem;
    top: 25%;
    left: 10%;
    height: 31rem;
  }
  @media (min-width: 431px) and (max-width: 768px) {
    width: 23rem;
    top: 30%;
    left: 10%;
    height: 26.45rem;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    width: 20rem;
    top: 30%;
    left: 50%;
    height: 23rem;
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    width: 23rem;
    top: 30%;
    left: 50%;
    height: 26.45rem;
  }
  @media (min-width: 1471px) and (max-width: 1600px) {
    width: 23rem;
    top: 30%;
    left: 50%;
    height: 26.45rem;
  }
  @media (min-width: 1601px) {
    width: 25rem;
    top: 30%;
    left: 50%;
    height: 28.75rem;
  }
`;
export const ModalCloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  color: #27272A;
  img{
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
export const EmotionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  position: relative;
  top: 6%;

`;
export const EmotionImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  @media (min-width: 1601px){
    img{
      width: 5rem;
      height: 5.3rem;
    }
  }
  @media (min-width: 1471px) and (max-width: 1600px) {
    img{
      width: 4.5rem;
      height: 5.175rem;
    }
  }
  @media (min-width: 1201px) and (max-width: 1470px) {
    img{
      width: 4rem;
      height: 4.6rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    img{
      width: 3.5rem;
      height: 4rem;
    }
  }
  @media (min-width: 431px) and (max-width: 768px) {
    img{
      width: 4rem;
      height: 4.6rem;
    }
  }
  @media (max-width: 430px) {
    img{
      width: 5rem;
      height:5.75rem;
    }
  }

`;