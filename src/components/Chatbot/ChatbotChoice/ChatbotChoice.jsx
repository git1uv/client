import React, { useEffect, useState } from 'react'
import * as S from './ChatbotChoice.style'
import * as T from '../../Test/TestResult/TestResult.style'
import chatbotInfo from '../../../datas/chatbot';
import { useNavigate } from 'react-router-dom';
import { SliderSwiper } from './SliderSwiper';

import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

export default function ChatbotChoice()  {
  const [chatbot, setChatbot] = useState(chatbotInfo[0]);
  const [index, setIndex] = useState();
  const navigate = useNavigate();

  const handleChoiceChatbot = () => {
    if (chatbot.name === 'Simmaeum')
      localStorage.setItem('result', 'F');
    else if (chatbot.name === 'Banbani')
      localStorage.setItem('result', 'H');
    else
      localStorage.setItem('result', 'T');
    navigate('/chatbot');
    console.log(chatbot.name);
  }
  const userId = localStorage.getItem('userId');


  /* 사용할 default 챗봇 가져오기 API */
  // const getDefaultChatbot = async() => {
  //   try {
  //     const res = await axios.get(`api/v1/chatbot/${userId}`);
  //     localStorage.setItem('result', res.data.chatbot);
  //   } catch(err) {
  //     if (err.response.status === 500)
  //       console.log('ERROR500 : 디폴트 챗봇 불러오기에 실패하였습니다.')
  //   }
  // }

  // useEffect(() => {
  //   getDefaultChatbot();
  // }, []);

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
          <button onClick={() => handleChoiceChatbot()}>대화를 시작할까?</button>
        </S.ChatbotInfo>
      </S.Container>
    </S.App>
  )
}
