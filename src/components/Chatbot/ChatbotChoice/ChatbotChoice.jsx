import React, { useState } from 'react'
import * as S from './ChatbotChoice.style'
import * as T from '../../Test/TestResult/TestResult.style'
import chatbotInfo from '../../../datas/chatbot';
import { useNavigate } from 'react-router-dom';
import { SliderSwiper } from './SliderSwiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ChatbotChoice()  {
  const [chatbot, setChatbot] = useState(chatbotInfo[0]);
  const [index, setIndex] = useState();
  const navigate = useNavigate();

  const handleChoiceChatbot = () => {
    localStorage.setItem('result', chatbot.name)
    navigate('/chatbot');
  }

  return (
    <S.App>
      <S.Container>
        <S.Section />
        <S.Title>나와 대화할 캐릭터는</S.Title>
        <S.SliderWrapper>
          <SliderSwiper 
            setChatbot={setChatbot}
            chatbotInfo={chatbotInfo}
            setIndex={setIndex}
          />
        </S.SliderWrapper>
        <S.ChatbotInfo>
          <T.SpeechBubble isChoice={true}>
            <S.TextContainer>
              <h2>{chatbot.title}</h2>
              <p>{window.innerWidth >= 430 ? chatbot.info : chatbot.mobile}</p>
            </S.TextContainer>
          </T.SpeechBubble>
          <button onClick={handleChoiceChatbot}>대화를 시작할까?</button>
        </S.ChatbotInfo>
      </S.Container>
    </S.App>
  )
}
