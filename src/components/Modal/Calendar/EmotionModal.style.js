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
  @media (min-width: 431px) {
    width: 24vw;
    top: 30%;
    left: 50%;
    height: 50vh;
  }
  @media (max-width: 430px) {
    width: 78vw;
    top: 25%;
    height: 48vh;
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
  @media (min-width: 431px) {
    img{
      width: 5vw;
      height: 10vh;
    }
  }
  @media (max-width: 430px) {
    img{
      width: 15vw;
      height: 9vh;
    }
  }

`;