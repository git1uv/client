import styled from 'styled-components';

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
  backdrop-filter: blur(2px);

`;

export const Modal = styled.div`
  width: 71.3vw;
  height: 62.9vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 5vw;
  top: 2.5vh;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 25px;
  z-index: 81;

`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center; 
  width: 60%;
  margin: 0.4vh 7%;
  padding: 8.5px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  color: #27272A;
  font-family: Pretendard;
  img{
    margin-right: 15px;
    height: 4vh; 
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 2.4vh;
  right: 5vw;
  background: none;
  border: none;
  img{
    height: 2.7vh;
  }
`;

export const LogoutButton = styled(ModalButton)`
  color: #52525B;
  font-size: 1rem;
`;


export const ButtonContainer = styled.div`
  margin-top: 6.5vh; 
`;

export const ModalDivider = styled.hr`
  width: 84%;
  margin: 20px auto;
  border: 0;
  border-top: 1px solid #e0e0e0;
`;
