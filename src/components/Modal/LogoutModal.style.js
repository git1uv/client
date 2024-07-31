import styled from 'styled-components';

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
  @media (min-width: 440px) {
    background: rgba(82, 82, 82, 0.3);
    backdrop-filter: blur(2.5px);
  }
`;

export const LogoutModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  width: 74%; 
  .sub{
  font-size:1.25rem;
  margin-bottom: 0;
  }
  .warning{
  font-size: 1rem;
  color: #A1A1AA;
  margin:0;
  }
  @media (min-width: 440px) {
    width: 24%;
  }
`;

export const LogoutModalTitle = styled.h2`
  margin-bottom: 1vh;
  font-size: 1.375rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
  height: 9vh;
  @media (min-width: 440px) {
  margin-top: 20px;
  }
`;

export const CancelButton = styled.button`
  width: 45%;
  margin: 15px 5px 10px 10px;
  font-size: 1.125rem;
  border: none;
  border-radius: 15px;
  background-color: #E8E9EB;
  color: black;
  @media (min-width: 440px) {
    border-radius: 30px;
    height: 6vh;
  }
  .ok{
  width: 90%;
  }


`;

export const LogoutClickButton = styled.button`
  width: 45%;
  margin: 15px 10px 10px 5px;
  font-size: 1.125rem;
  border: none;
  border-radius: 15px;
  background-color: #ED6243;
  color: white;
  @media (min-width: 440px) {
    border-radius: 30px;
    height: 6vh;
  }

`;

export const ModalCloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #27272A;
  @media (max-width: 440px) {
    top: 37%;
    right: 10%;
  }
  @media (min-width: 440px) {
    top: 40%;
    right: 38%;
  }
`;
