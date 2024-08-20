import React from 'react';
import * as S from './Chatbot.style'
import Chair from '../../assets/chatbot/ChairWeb.png'
import Simmaeum from '../../assets/chatbot/Simmaeum.png'
import Banbani from '../../assets/chatbot/Banbani.png'
import Neuranee from '../../assets/chatbot/Neuranee.png'

import ChatbotBox from '../../components/Chatbot/ChatbotBox/ChatbotBox';

export default function Chatbot() {
  return (
    <S.App>
      <S.Top>
        <S.Chair src={Chair} alt="상담의자"/>
        <S.Character src={Simmaeum} alt="챗봇 이미지"/>
      </S.Top>
      <S.Bottom>
        <S.Header>
          <S.BackBtn/>
          <h1>심마음</h1>
          <button>끝내기</button>
        </S.Header>
        <ChatbotBox />
      </S.Bottom>
    </S.App>
  );
}