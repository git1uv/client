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
  backdrop-filter: blur(1px);

`;

export const Modal = styled.div`
  width: 73.5%;
  height: 63%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 22.5%;
  top: 4%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  border-radius: 25px;

`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center; 
  width: 60%;
  margin: 0 7%;
  padding: 8.5px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  
  color: #27272A;
  &:hover {
    background-color: #e0e0e0;
  }
  img{
    margin-right: 15px;
    height: 30px; 
    width: 30px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 5.1%;
  right: 3%;
  background: none;
  border: none;
  font-size: 23px;
  color: #27272A;
`;

export const LogoutButton = styled(ModalButton)`
  color: #52525B;
  font-size: 1rem;
`;


export const ButtonContainer = styled.div`
  margin-top: 17%; 
`;

export const ModalDivider = styled.hr`
  width: 80%;
  margin: 15px auto;
  border: 0;
  border-top: 1px solid #e0e0e0;
`;
