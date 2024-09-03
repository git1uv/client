import React, { useState } from 'react'
import * as S from './TestResult.style'

import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png'
import Banbani from '../../../assets/chatbot/test/Banbani.png'
import Neuranee from '../../../assets/chatbot/test/Neuranee.png'

import chatbotInfo from '../../../datas/chatbot'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function TestResult() {
  const result = localStorage.getItem('result');
  const score = localStorage.getItem('score');
  const userId = localStorage.getItem('userId');

  const isTestStart = true;

  const [chatbot, setChatbot] = useState();

  const navigate = useNavigate();

  /* 테스트 통해서 정해진 챗봇 설정 API */
  // const patchChatbot = async() => {
  //   if (result === 'Neuranee')
  //     setChatbot('T');
  //   else if (result === 'Banbani')
  //     setChatbot('H');
  //   else
  //     setChatbot('F');
  //   try {
  //     const res = await axios.patch(`/api/v1/chatbot/update/${userId}`, {
  //       'chatbot': chatbot
  //     });
  //     navigate('/chatbot');
  //     console.log(res.message);
  //   } catch(err) {
  //     if (err.response.code === 'MEMBER4001')
  //       console.log('MEMBER4001 : 사용자가 없습니다');
  //   }
  // }

  return (
    <S.App isTestStart={isTestStart}>
      <S.Container>
        <S.ResultBox>
          T/F의 성향이 {score}% {100-score}%인
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
          <button onClick={() => navigate('/chatbot')}>대화를 시작할까?</button>
          {/* <button onClick={patchChatbot()}>대화를 시작할까?</button> */}
        </S.BtnBox>
      </S.Container>
    </S.App>
  )
}
