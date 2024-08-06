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
  border-radius: 24px;
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
    .sub{
      padding: 0 2vw;
    }
  }
  @media (max-width: 430px) {
    width: 76%;
    .sub{
      padding: 0 5vw;
    }
  }
`;

export const LogoutModalTitle = styled.h2`
  margin-bottom: 1vh;
  font-size: 1.375rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
<<<<<<< Updated upstream
  margin-top: 1vh;
  height: 9vh;
  @media (min-width: 440px) {
  margin-top: 20px;
=======
  height: 8vh;
  @media (min-width: 431px) {
  margin-top: 5px;
>>>>>>> Stashed changes
  }
`;

export const CancelButton = styled.button`
  width: 45%;
  margin: 15px 5px 10px 10px;
  font-size: 1.125rem;
  border: none;
  background-color: #E8E9EB;
  color: black;
<<<<<<< Updated upstream
  @media (min-width: 440px) {
    border-radius: 30px;
=======
  @media (min-width: 431px) {
>>>>>>> Stashed changes
    height: 6vh;
    border-radius: 18px;
  }
  .ok{
  width: 90%;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    height: 5.5vh;
  }

`;

export const LogoutClickButton = styled.button`
  width: 45%;
  margin: 15px 10px 10px 5px;
  font-size: 1.125rem;
  border: none;
  background-color: #ED6243;
  color: white;
<<<<<<< Updated upstream
  @media (min-width: 440px) {
    border-radius: 30px;
=======
  @media (min-width: 431px) {
>>>>>>> Stashed changes
    height: 6vh;
    border-radius: 18px;
  }
  @media (max-width: 430px) {
    border-radius: 15px;
    height: 5.5vh;
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
