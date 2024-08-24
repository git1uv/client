import React from 'react'
import * as S from './TestResult.style'

import Simmaeum from '../../../assets/chatbot/test/Simmaeum.png'
import Banbani from '../../../assets/chatbot/test/Banbani.png'
import Neuranee from '../../../assets/chatbot/test/Neuranee.png'

import { chatbotInfo, chatbotInfo2 } from '../../../datas/chatbot'
import { useNavigate } from 'react-router-dom'

export default function TestResult() {
  const result = localStorage.getItem('result');
  const isTestStart = true;

  const navigate = useNavigate();

  return (
    <S.App isTestStart={isTestStart}>
      <S.Container>
        <S.ResultBox>
          T/F의 성향이 {result}% {100-result}%인
        </S.ResultBox>
        <h1>나에게 맞는 심터 캐릭터는</h1>
        {result >= 70 
        ? <img src={Neuranee} alt='chatbot' />
        : result >= 40 ? <img src={Banbani} alt='chatbot' /> 
        : <img src={Simmaeum} alt='chatbot' />  }
        <S.speechBubble>
        {result >= 70 
        ? (
          <>
            <h2>{chatbotInfo[2]}</h2>
            <p>{chatbotInfo2[2]}</p>
          </>
        ) : result >= 40 ? (
          <>
            <h2>{chatbotInfo[1]}</h2>
            <p>{chatbotInfo2[1]}</p>
          </>
        ): (
          <>
            <h2>{chatbotInfo[0]}</h2>
            <p>{chatbotInfo2[0]}</p>
          </>
        )}
        </S.speechBubble>
        <S.BtnBox>
          <button onClick={() => navigate('/챗봇 선택하는 페이지')}>다른 캐릭터 보러가기</button>
          <button onClick={() => navigate('/chatbot')}>대화를 시작할까?</button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  )
}
