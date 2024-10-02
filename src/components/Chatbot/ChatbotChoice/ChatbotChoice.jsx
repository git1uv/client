import React, { useEffect, useState } from 'react'
import * as S from './ChatbotChoice.style'
import * as T from '../../Test/TestResult/TestResult.style'
import chatbotInfo from '../../../datas/chatbot';
import { useNavigate } from 'react-router-dom';
import { SliderSwiper } from './SliderSwiper';

import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import apiClient from '../../../constants/tokenInstance';

export default function ChatbotChoice()  {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const [chatbot, setChatbot] = useState(chatbotInfo[0]);
  const navigate = useNavigate();

  const handleChoiceChatbot = () => {
    localStorage.setItem('result', chatbot.name);
    postSelectedChatbot(); // API 연결
    navigate('/chatbot');
    console.log(chatbot.name);
  }

  /* 사용할 챗봇 선택 API */
  const postSelectedChatbot = async() => {
    let selectedChatbot;
    if (chatbot.name === 'Simmaeum')
      selectedChatbot = 'F'
    else if (chatbot.name === 'Banbani')
      selectedChatbot = 'H'
    else
      selectedChatbot = 'T'

    try {
      const res = await apiClient.post(`/api/v1/chatbot/session`, {
        chatbotType: selectedChatbot
      });
      console.log(res.data);
      localStorage.setItem('counselingLogId', res.data.data.counselingLogId);
    } catch(err) {
        console.log(err);
        console.log('서버 에러, 관리자에게 문의 바랍니다.');
    }
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
          />
        </S.SliderWrapper>
        <S.ChatbotInfo>
          <T.SpeechBubble isChoice={true}>
            <S.TextContainer>
              <h2>{chatbot?.title}</h2>
              <p>{window.innerWidth >= 430 ? chatbot?.info : chatbot?.mobile}</p>
            </S.TextContainer>
          </T.SpeechBubble>
          <S.BtnBox>
            <button onClick={() => navigate('/test')}>테스트로 챗봇 정하기</button>
            <button onClick={() => handleChoiceChatbot()}>대화를 시작할까?</button>
          </S.BtnBox>
        </S.ChatbotInfo>
      </S.Container>
    </S.App>
  )
}
