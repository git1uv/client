import React from 'react';
import * as S from './Chatbot.style'
import Chair from '../../assets/chatbot/ChairWeb.png'
import Simmaeum from '../../assets/chatbot/Simmaeum.png'
import Banbani from '../../assets/chatbot/Banbani.png'
import Neuranee from '../../assets/chatbot/Neuranee.png'
import howto from '../../assets/chatbot/howto.png'
import func from '../../assets/chatbot/function.png'
import warning from '../../assets/chatbot/warning.png'

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
            <h1>챗봇과 대화하기</h1>
          </S.Title>
          <S.InfoBox>
            <S.Infos id='howto'>
              <S.IconBox id='howto'>
                <img src={howto} alt='icon' />
                <h2>사용법</h2>
              </S.IconBox>
              <S.Info>
                <p>“나 오늘 이렇고 이런 일이 있었는데...”</p>
                <p>챗봇과 채팅을 통해 자신의 마음을 솔직하게 털어놓고 캐릭터의 일지를 통해 자신의 감정을 정리해보아요</p>
              </S.Info>
            </S.Infos>
            <S.Infos>
              <S.IconBox id='func'>
                <img src={func} alt='icon' />
                <h2>기능</h2>
              </S.IconBox>
              <S.Info id='func'>
                <p>현재 나의 감정을 마음껏 털어놓을 수 있어요 </p>
              </S.Info>
              <S.Info id='func'>
                <p>나의 상황에 대해 이 캐릭터가 공감/조언해줘요</p>
              </S.Info>
              <S.Info id='func'>
                <p>대화내용을 정리해주고 일지를 작성해줘요</p>
              </S.Info>
            </S.Infos>
            <S.Infos id='warning'>
              <S.IconBox id='warning'>
                <img src={warning} alt='icon' />  
                <h2>주의</h2>
              </S.IconBox>
              <S.Info></S.Info>
            </S.Infos>
          </S.InfoBox>
          <S.Warning>
            <h3>* 놀라지 마세요!</h3>
            <p>대화 도중 더 전문적인 상담이 필요한 경우 알려드립니다.</p>
          </S.Warning>
          <S.InputBox>
            <input
              placeholder='고민부터 털어놓고 싶은 것, 오늘 있었던 일 등 뭐든 말해보아요!'></input>
            <button />
          </S.InputBox>
        </S.Container>
      </S.Bottom>
    </S.App>
  );
}