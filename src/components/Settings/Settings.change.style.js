import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 20;
  background-color: #FAF9F5;
  width: 40vw;
  height: 89.7vh;
  flex-direction: column;
  padding: 0;
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
  @media (min-width: 431px) {
    margin: 10.3vh auto 0;
  }
`;


export const Explain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column; 
  align-items: flex-start; 
  font-size: 1.67rem;
  margin: 10px 0 0 0;
  p {
    margin: 2vh 2vh 2vh 3.5vw;
    @media (max-width: 430px) {
    margin-left: 5.3vw
  }
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center; /* 아이템들을 수평으로 정렬 */
  width: 100%;
  height: 7.3vh;
  padding: 15px 0;
  position: relative;
  justify-content: center; 
  background-color: transparent;
  border-bottom: 1px solid #F4F4F5;
  p {
    position: absolute;
    font-weight: bold;
    flex-grow: 1;
    text-align: center; 
    margin: 0; 
    font-size: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
  }

  button {
    padding: 0 0 0 3.5vw;
    position: absolute;
    left: 0;
    font-size: 1.25rem;
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
    height: 5vh;
    padding: 10px 20px;
    font-size: 1rem;
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
    height: 4vh;
    padding: 10px 20px ;
    color: black;
    font-size: 1.125rem;
    border: 1px solid #D4D4D8;
    border-radius: 5px;
    background: #FFFFFF;
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
  margin: 1vh 3.5vw 4vh 3.5vw;
  button {
    padding: 0;
  }
  input {
    width: 100%;
    height: 4vh;
    padding: 10px 20px ;
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
  margin: 3vh 0 0 3.5vw;
  @media (max-width: 430px) {
    margin: 3vh 0 0 5.3vw;
  }
  }
  .confirm{
  font-size: 1rem;
  color: #A1A1AA;
  margin: 0 0 0 3.5vw;
  display: none;
  }
  @media (max-width: 430px) {
    margin: 0 1.8vw;
  }

  .confirm.visible {
    display: block;
  }
`;