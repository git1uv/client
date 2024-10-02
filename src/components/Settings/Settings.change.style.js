import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 20;
  background-color: #FAF9F5;
  width: 38.125rem;
  height: 89.7vh;
  flex-direction: column;
  padding: 0;
  margin: 10.3vh auto 0;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

  }
  @media (max-width: 430px) {
    width: 100vw; 
    height: 100vh;
    margin: 0 auto;
  }
  @media (min-width: 431px) and (max-width: 550px) {
    width: 30rem; 
  }
`;


export const Button = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    margin: 2vh 3.5vw;
  .change{
    width: 100%;
    top: 50%;
    height: 6.5vh;
    padding: 10px 20px;
    font-size: 1rem;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.45px;
    background-color: #FBEEA0;
    color: black;
    border: none;
    border-radius: 15px;
    text-align: center; 
    @media (max-width: 430px) {
    margin: 0 1.8vw;
  }
  }
`;

export const NicknameChange = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  align-items: center;
  margin: 3.5vh 3.5vw;

  input {
    width: 100%;
    height: 6vh;
    padding: 10px 20px ;
    color: black;
    font-size: 1.125rem;
    font-family: Pretendard;
    border: 1px solid #D4D4D8;
    border-radius: 5px;
    background: #FFFFFF;
    &.error {
      border-color: #ED6243;
    }
    &.success {
      border-color: #95DD98;
    }
    @media (max-width: 430px) {
    margin: 0 1.8vw;
  }

  }
`;

export const PwChange = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  align-items: center;
  margin: 1vh 3.5vw 2vh 3.5vw;
  button {
    padding: 0;
  }
  input {
    width: 95%;
    height: 6vh;
    padding: 10px 20px;
    margin: 0 10px 0 0;
    color: black;
    font-size: 1.125rem;
    border: 1px solid #D4D4D8;
    border-radius: 5px;
    background: #FFFFFF;
    &.error {
      border-color: #ED6243;
    }
    &.success {
      border-color: #95DD98;
    }
    @media (max-width: 430px) {
    margin: 0 1.8vw;
    }
  }
`;

export const Text = styled.div`
  background-color: transparent;
  .title{
    font-size: 1.125rem;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.54px;
    margin: 3vh 0 0 3.5vw;
    @media (max-width: 430px) {
      margin: 3vh 0 0 5.3vw;
    }
  }
  .confirm{
    display: none;
  }
  .confirm.visible {
    font-size: 1rem;
    color: #A1A1AA;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.48px;
    margin: 0 0 0 3.5vw;
    display: block;
  }
  @media (max-width: 430px) {
    margin: 0 1.8vw;
  }
`;