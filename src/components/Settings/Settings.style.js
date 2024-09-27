import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 20;
  background-color: white;
  width: 38.125rem;
  height: 80vh;
  flex-direction: column;
  padding: 0 0 5vh 0;
  margin: 10.3vh auto 0;
  button {
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

  }
  @media (max-width: 430px) {
    width: 100vw; 
    height: 78vh;
    margin: 0 auto;
  }
  @media (min-width: 431px) and (max-width: 550px) {
    width: 30rem; 
  }
`;


export const Explain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column; 
  align-items: flex-start; 
  font-size: 1.875rem;
  color: #27272A;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
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
  height: 9vh;
  padding: 15px 0;
  position: relative;
  justify-content: center; 
  background-color: transparent;
  border-bottom: 1px solid #F4F4F5;
  flex-shrink: 0;
  p {
    position: absolute;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
    flex-grow: 1;
    text-align: center; 
    margin: 0; 
    font-size: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  button {
    background-color: transparent;
    padding: 0 0 0 3.5vw;
    position: absolute;
    left: 0;
    font-size: 1.25rem;
  }

`;

export const Title = styled.div`
  background-color: transparent;
  font-weight: bold;
  font-size: 1.25rem;
  color: #A1A1AA;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.5px;
  margin: 2vh 0 1vh 3.5vw;
  @media (max-width: 430px) {
    margin-left: 5.3vw
  }
`;


export const NicknameChange = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 0 0 2vh 3.5vw;

  button {
    background-color: transparent;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
    color: black;
  }
  }

  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const PwChange = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 0 0 0.5vh 3.5vw;
  button {
    background-color: transparent;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
    color: black;
  }
  }
  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const FAQ = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 0 0 2vh 3.5vw;
  button {
    background-color: transparent;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
    color: black;
  }
  }
  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const Ask = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 0 0 2vh 3.5vw;
  button {
    background-color: transparent;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
    color: black;
  }
  }
  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 0 0 2vh 3.5vw;
  button {
    background-color: transparent;
    padding: 0;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
    color: black;
  }
  }
  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const LogOut = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 1.3vh 0 2vh 3.5vw;
  button {
    background-color: transparent;
    padding: 0;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    color: #ED6243;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
  }
  }
  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const DeleteID = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  margin: 0 0 2vh 3.5vw;
  button {
    background-color: transparent;
    padding: 0;
    color: #A1A1AA;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    @media (max-width: 430px) {
    margin-left: 1.8vw;
  }
  }
  .right-icon{
    background-color: transparent;
    margin-left: auto;
    margin-right: 3.5vw;
    color: #A1A1AA;
    font-size: 1.5rem;
    @media (max-width: 430px) {
    margin-right: 5.3vw
  }
  }
`;

export const DeveloperInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: transparent;
    padding: 0;
    text-align: left;
    font-size: 0.875rem;
    color: #A1A1AA;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    border: none;
  }
  @media (max-width: 430px) {
    left: 5.3%;
    margin: 1vh 0 0 5.3vw;
  }
  @media (min-width: 431px) {
    margin: 0 0 2vh 31vw;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px; 
  background-color: #D4D4D8;
  margin: 5px 0;
`;

export const Footer = styled.div`
  margin: 3vh 0 0 0;
  display: flex;
  align-items: flex-start;
  z-index: 20;
  background-color: #EEECE3;
  weight: 100vw;
  height: auto;
  @media (max-width: 430px) {
    height: 22vh; 
    margin: 0; 
  }
`;