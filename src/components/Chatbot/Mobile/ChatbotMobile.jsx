import React from 'react'
import * as S from './ChatbotMobile.style'
import Header from './Header'
import ChattingBox from './ChattingBox'
import ChatbotBox from './ChatbotBox'
import InputBox from './InputBox'
export default function ChatbotMobile() {
  return (
    <S.App>
      <Header />
      <ChattingBox />
      <ChatbotBox />
      <InputBox />
    </S.App>
  )
}
