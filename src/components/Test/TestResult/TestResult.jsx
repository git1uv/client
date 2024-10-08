import React, { useState } from 'react'
import * as S from './TestResult.style'

import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png.webp'
import Banbani from '../../../assets/chatbot/test/Banbani.png.webp'
import Neuranee from '../../../assets/chatbot/test/Neuranee.png.webp'

import chatbotInfo from '../../../datas/chatbot'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import apiClient from '../../../constants/tokenInstance'

export default function TestResult() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const result = localStorage.getItem('result');
  const score = localStorage.getItem('score');
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const isTestStart = true;

  const [chatbot, setChatbot] = useState();
  

  const navigate = useNavigate();

  const postSelectedChatbot = async() => {
    if (result === 'Neuranee')
      setChatbot('T');
    else if (result === 'Banbani')
      setChatbot('H');
    else
      setChatbot('F');

    try {
      const res = await apiClient.post(`/api/v1/chatbot/session`, {
        chatbotType: chatbot
      });
      // console.log(res.data);
      localStorage.setItem('counselingLogId', res.data.data.counselingLogId);
      navigate('/chatbot');
    } catch(err) {
        // console.log(err);
        // console.log('서버 에러, 관리자에게 문의 바랍니다.');
    }
  }

  return (
    <S.App isTestStart={isTestStart}>
      <S.Container>
        <S.ResultBox>
        {result === 'Neuranee'
        ? '공감형보다는 현실적인 조언을 좋아하는'
        : result === 'Banbani' ? '공감도 하면서 현실적인 조언도 주는'
        : '현실적인 조언보다는 공감을 좋아하는'  }
        </S.ResultBox>
        <h1>나에게 맞는 심터 캐릭터는</h1>
        {result === 'Neuranee'
        ? <img src={Neuranee} alt='chatbot' />
        : result === 'Banbani' ? <img src={Banbani} alt='chatbot' /> 
        : <img src={Simmaeum} alt='chatbot' />  }
        <S.SpeechBubble>
        {result === 'Neuranee'
        ? (
          <>
            <h2>{chatbotInfo[2].title}</h2>
            <p>{window.innerWidth >= 430 ? chatbotInfo[2].info : chatbotInfo[2].mobile} </p>
          </>
        ) : result === 'Banbani' ? (
          <>
            <h2>{chatbotInfo[1].title}</h2>
            <p>{window.innerWidth >= 430 ? chatbotInfo[1].info : chatbotInfo[1].mobile} </p>
          </>
        ): (
          <>
            <h2>{chatbotInfo[0].title}</h2>
            <p>{window.innerWidth >= 430 ? chatbotInfo[0].info : chatbotInfo[0].mobile} </p>
          </>
        )}
        </S.SpeechBubble>
        <S.BtnBox>
          <button onClick={() => navigate('/chatbot/choice')}>다른 캐릭터 보러가기</button>
          <button onClick={() => postSelectedChatbot()}>대화를 시작할까?</button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  )
}
