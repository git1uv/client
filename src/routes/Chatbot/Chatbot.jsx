import React from 'react';
import * as S from './Chatbot.style'
import Chair from '../../assets/chatbot/ChairWeb.png'
import Simmaeum from '../../assets/chatbot/Simmaeum.png'
import Banbani from '../../assets/chatbot/Banbani.png'
import Neuranee from '../../assets/chatbot/Neuranee.png'

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
        <S.Container>
          <S.Title>
            <p>챗봇과 대화하기</p>
          </S.Title>
          <S.InfoBox>
            <S.Infos></S.Infos>
            <S.Infos></S.Infos>
            <S.Infos></S.Infos>
          </S.InfoBox>
          <S.Warning>
            <h3>* 놀라지 마세요!</h3>
            <p>대화 도중 더 전문적인 상담이 필요한 경우 알려드립니다.</p>
          </S.Warning>
        </S.Container>
      </S.Bottom>
    </S.App>
  );
}