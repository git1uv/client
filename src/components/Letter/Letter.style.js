import styled from 'styled-components';
import {bg, mailbox, mailbox_mobile, allO, allX, notreadO, notreadX, favoriteO, favoriteX, check, trash} from "../../assets/letterImg/icons";

export const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  @media (min-width: 431px){
    background-image: url(${bg});
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  z-index: 1;
  @media (max-width: 430px) {
    background-image: url(${mailbox_mobile});
    height: 100vh;
  }
  @media (min-width: 431px){
    background-image: url(${mailbox});
    height: 100vh;
`;

export const Mailbox = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 430px) {
    width: 90vw;
    height: 50vh;
  }
  @media (min-width: 431px){
    width: 46vw;
    height: 80vh;
  }
`;

export const TopRow = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  position: relative;
  @media (max-width: 430px) {
    height: 20%;
  }
  @media (min-width: 431px){
    height: 30%;
  }
`;
export const Delete = styled.div`
  z-index: 4;
  background-image: url(${trash});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 10%;
  @media (max-width: 430px) {
    right: 12%;
    width: 2.1rem;
    height: 2.1rem;
  }
  @media (min-width: 431px){
    right: 8%;
    width: 3.125rem;
    height: 3.125rem;
  }
`;
export const Favorites = styled.div`
  background-image: ${({ seeFavoritesActive }) => seeFavoritesActive ? `url(${favoriteO})` : `url(${favoriteX})`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 430px) {
    width: 4.17rem;
    height: 4.17rem;
    border-radius: 15px;
    margin: 8% 2% 2%;
  }
  @media (min-width: 431px){
    width: 6.68rem;
    height: 6.68rem;
    border-radius: 44px;
    margin: 5% 2%;
  }
`;
export const NotRead = styled.div`
  background-image: ${({ seeNotReadActive }) => seeNotReadActive ? `url(${notreadO})` : `url(${notreadX})`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 430px) {
    width: 4.17rem;
    height: 4.17rem;
    border-radius: 15px;
    margin: 8% 2% 2%;
  }
  @media (min-width: 431px){
    width: 6.68rem;
    height: 6.68rem;
    border-radius: 44px;
    margin: 5% 2%;
  }
`;
export const SeeAll = styled.div`
  background-image: ${({ seeAllActive }) => seeAllActive ? `url(${allO})` : `url(${allX})`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 430px) {
    width: 4.17rem;
    height: 4.17rem;
    border-radius: 15px;
    margin: 8% 2% 2%;
  }
  @media (min-width: 431px){
    width: 6.68rem;
    height: 6.68rem;
    border-radius: 44px;
    margin: 5% 2%;
  }
`;
export const LettersWrapper = styled.div`
  z-index: 3;
  display: flex;  
  justify-content: center;
  align-items: flex-start;
  border-radius: 55px;
  background-color: #280502;
  @media (max-width: 430px) {
    width: 81vw;
    height: 60%;
    margin-bottom: 20%;
  }
  @media (min-width: 431px){
    width: 44.62vw;
    height: 70%;
  }
`;
export const Letters = styled.div`
  height: 90%;
  z-index: 4;
  display: grid;
  flex-direction: column;
  overflow-y: auto;
  /* 스크롤바 전체 스타일 */
  &::-webkit-scrollbar {
    width: 25px;
  }

  /* 스크롤바 트랙 스타일 */
  &::-webkit-scrollbar-track {
    background-color: #727272;
    border-radius: 10px;
    border-left: 8px solid #350702;
    border-right: 8px solid #350702;
  }

  /* 스크롤바 핸들(thumb) 스타일 */
  &::-webkit-scrollbar-thumb {
    background-color: #D2D2D2;
    border-radius: 10px;
    background-clip: padding-box;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
  @media (max-width: 430px) {
    width: 72.9vw;
    grid-template-rows: repeat(auto-fill, 50px);
    row-gap: 1vh; 
    border-radius: 17px;
    margin-top: 3%;
    padding: 2% 0;
  }
  @media (min-width: 431px){
    width: 40.158vw;
    grid-template-rows: repeat(auto-fill, 100px);
    row-gap: 2vh; 
    border-radius: 55px;
    margin-top: 5%;
    padding: 2% 1% 1% 0;
  }
`;
export const LetterContainer = styled.div`
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 430px) {
    width: 78.57vw;
    height: 50px;
  }
  @media (min-width: 431px){
    width: 97%;
    height: 100px;
  }
`;
export const CheckBox = styled.div`
  z-index: 6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  @media (max-width: 430px) {
    width: 7%;
  }
  @media (min-width: 431px){
    width: 5%;
  }
`;
export const Check = styled.input.attrs({ type: 'checkbox' })`
  z-index: 7;
  display: flex;
  width: 1.375rem;
  height: 1.375rem;
  appearance: none;
  border: 3px solid #d9d9d9;
  border-radius: 50%;
  &:checked {
    background-image: url(${check});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    border: none;
  }
`;
export const Letter = styled.div`
  z-index: 6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  height: 100%;
  border-radius: 30px;
  background: #FBFBFB;
  position: relative;
  @media (max-width: 430px) {
    max-width: 240px;
  }
  @media (min-width: 431px) and (max-width: 1023px) {
    max-width: 270px;
  }
  @media (min-width: 1024px) and (max-width: 1130px) {
    max-width: 370px;
  }
  @media (min-width: 1131px) and (max-width: 1200px) {
    max-width: 400px;
  }
  @media (min-width: 1201px) and (max-width: 1260px) {
    max-width: 430px;
  }
  @media (min-width: 1261px) and (max-width: 1370px) {
    max-width: 470px;
  }
  @media (min-width: 1371px) and (max-width: 1470px) {
    max-width: 510px;
  }
  @media (min-width: 1471px) and (max-width: 1540px) {
    max-width: 540px;
  }
  @media (min-width: 1541px) and (max-width: 1600px) {
    max-width: 570px;
  }
  @media (min-width: 1601px) and (max-width: 1700px) {
    max-width: 600px;
  }
  @media (min-width: 1701px){
    max-width: 680px;
  }
`;
export const ChatBox = styled.div`
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;
export const Chatbot = styled.div`
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img{
    width: 60%;
    height: 80%;
    border-radius: 50%;
  }
`;
export const RedDot = styled.div`
  position: absolute;
  background-color: #ED6243;
  border-radius: 50%;
  @media (max-width: 430px) {
    top: 4%;
    right: 11%;
    width: 1rem;
    height: 1rem;
  }
  @media (min-width: 431px){
    top: 6%;
    right: 11%;
    width: 1.875rem;
    height: 1.875rem;
  }
`;
export const TextBox = styled.div`
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  height: 80%;
  width: 80%;
`;
export const Title = styled.div`
  color: #27272A;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  width: 90%;
  height: 40%;
  display: flex;
  text-align: center;
  align-items: center;
  overflow: hidden; 
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Date = styled.div`
  color: #52525B;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.48px;
  width: 90%;
  height: 40%;
  display: flex;
  text-align: flex-start;
  align-items: center;
`;
export const HeartBox = styled.div`
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fbfbfb;
  border-radius: 50%;
  @media (max-width: 430px) {
  top: -10%;
  right: -2%;
  width: 2.5rem;
  height: 2.5rem;
  }
  @media (min-width: 431px){
  top: -15%;
  right: -2%;
  width: 3.75rem;
  height: 3.75rem;
  }
`;
export const Heart = styled.div`
  z-index: 21;
  display: flex;
  img{
    @media (max-width: 430px) {
      width: 1.25rem;
      height: 1.16rem;
    }
    @media (min-width: 431px){
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;


