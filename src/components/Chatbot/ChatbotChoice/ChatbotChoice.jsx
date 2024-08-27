import React, { useState } from 'react'
import * as S from './ChatbotChoice.style'
import SlideInComponent from './Slider'; // 위에서 정의한 컴포넌트
import chatbotInfo from '../../../datas/chatbot';
import { useNavigate } from 'react-router-dom';

export default function ChatbotChoice() {
  const [chatbot, setChatbot] = useState(chatbotInfo[0]);
  const navigate = useNavigate();
  return (
  <S.App>
    <S.Title>나와 대화할 캐릭터는</S.Title>
    <SlideInComponent chatbot={chatbot} setChatbot={setChatbot} />
    <S.ChatbotInfo>
        <h2>{chatbot.title}</h2>
        <p>{window.innerWidth >= 430 ? chatbot.info : chatbot.mobile} </p>
        <button onClick={() => navigate('/chatbot')}>대화를 시작할까?</button>
      </S.ChatbotInfo>
  </S.App>
  )
}
