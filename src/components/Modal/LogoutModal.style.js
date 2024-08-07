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
  @media (min-width: 431px) {
    background: rgba(82, 82, 82, 0.3);
    backdrop-filter: blur(2.5px);
  }
`;

export const LogoutModal = styled.div`
  position: fixed;
  background-color: white;
  z-index: 91;
  padding: 20px;
  border-radius: 24px;
  text-align: center;
  width: 74%; 
  .sub{
    font-size:1.25rem;
    margin: 0;
    color: #52525B;
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
  .warning{
    font-size: 1rem;
    color: #A1A1AA;
    margin:0;
  }
  @media (min-width: 431px) {
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
  margin-top: 1vh;
  height: 8vh;
  @media (min-width: 431px) {
  margin-top: 5px;
  }
`;

export const CancelButton = styled.button`
  width: 45%;
  margin: 15px 5px 10px 10px;
  font-size: 1.125rem;
  border: none;
  background-color: #E8E9EB;
  color: black;
  @media (min-width: 431px) {
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
  @media (min-width: 431px) {
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
