import styled from 'styled-components';

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
  @media (min-width: 769px) {
    width: 25.875rem;
    top: 30%;
    left: 50%;
    height: 34.875rem;
  }
  @media (max-width: 768px) {
    width: 25.5rem;
    top: 25%;
    left: 10%;
    height: 32rem;
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
  top: 5%;

`;
export const EmotionImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  @media (min-width: 1201px){
    img{
      width: 5.5rem;
      height: 7rem;
    }
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    img{
      width: 5.2rem;
      height: 6.6rem;
    }
  }
  @media (min-width: 431px) and (max-width: 768px) {
    img{
      width: 4.5rem;
      height: 5.7rem;
    }
  }
  @media (max-width: 430px) {
    img{
      width: 5rem;
      height: 6.3rem;
    }
  }

`;