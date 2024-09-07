import styled from 'styled-components';
import {mailbox, mailbox_mobile, allO, allX, notreadO, notreadX, favoriteO, favoriteX} from "../../assets/letterImg/icons";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  @media (max-width: 430px) {
    background-image: url(${mailbox_mobile});
  }
  @media (min-width: 431px){
    background-image: url(${mailbox});}
`;

export const Mailbox = styled.div`
  
`;

export const TopRow = styled.div`
  
`;
export const Delete = styled.div`
  
`;
export const SeeAll = styled.div`
  
`;
export const Favorites = styled.div`
  
`;
export const NotRead = styled.div`
  
`;
export const Letters = styled.div`
  
`;
export const LetterContainer = styled.div`
  
`;
export const CheckBox = styled.div`
  
`;
export const Letter = styled.div`
  
`;
export const ChatBox = styled.div`
  
`;
export const Chatbot = styled.div`
  
`;
export const RedDot = styled.div`
  
`;
export const TextBox = styled.div`
  
`;
export const Title = styled.div`
  
`;
export const Date = styled.div`
  
`;
export const Heart = styled.div`
  
`;


