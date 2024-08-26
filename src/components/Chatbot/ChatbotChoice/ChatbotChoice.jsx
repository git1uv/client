import React, { useState } from 'react'
import * as S from './ChatbotChoice.style'
import SlideInComponent from './Slider'; // 위에서 정의한 컴포넌트

export default function ChatbotChoice() {
  return (
  <S.App>
    <h1>나와 대화할 캐릭터는</h1>
    <SlideInComponent />
  </S.App>
  )
}
