import React from 'react'
import * as S from './ChatbotInfo.style'
import howto from '../../../../assets/chatbot/chatStart/howto.png.webp'
import func from '../../../../assets/chatbot/chatStart/function.png.webp'
import warning from '../../../../assets/chatbot/chatStart/warning.png.webp'

export default function ChatbotInfo() {
  return (
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
  )
}
