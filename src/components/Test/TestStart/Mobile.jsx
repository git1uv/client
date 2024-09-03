import React, { useState } from 'react'
import * as S from './Test.style.js'
import testBots from '../../../assets/chatbot/test/testBots.png'
import { useNavigate } from 'react-router-dom';

export default function Mobile() {
    const isTestStart = false;
    const navigate = useNavigate();
  return (
    <S.App isTestStart={isTestStart}>
      <S.Container isTestStart={isTestStart}>
          <S.TextBox>
            <h2 id="title">대화할 캐릭터의 성격을 고르기 위한</h2>
            <h1 id="title">T/F 성격 테스트하기</h1>
            <p>
                공감과 조언, 둘 다 받는 유형 중<br/>
                자신에게 맞는 캐릭터를 선택하기 위한 테스트입니다.<br/>
                자신의 성향을 알고 있다면 바로 캐릭터를 선택해<br/>
                시작해도 상관없어요.<br/>
            </p>
          </S.TextBox>
          <S.ImgBox>
            <img src={testBots} alt='챗봇들' />
          </S.ImgBox>
          <S.BtnBox>
            <button onClick={() => navigate('/test/content')}>테스트 시작</button>
            <button onClick={() => navigate('/chatbot/choice')}>건너뛰기</button>
          </S.BtnBox>
      </S.Container>
    </S.App>
  )
}
