import React from 'react'
import * as S from './ChatbotMobile.style'
import chair from '../../../assets/chatbot/chatStart/ChairWeb.png'
import SimmaeumImg from '../../../assets/chatbot/chatStart/Simmaeum.png'
import BanbaniImg from '../../../assets/chatbot/chatStart/Banbani.png'
import NeuraneeImg from '../../../assets/chatbot/chatStart/Neuranee.png'

export default function ChatbotBox() {
  const result = localStorage.getItem('result');

  return (
    <S.ChatbotBox>
      <S.Chair src={chair} alt='chair'/>
      {result === 'Simmaeum'
        ? <S.Character src={SimmaeumImg} alt='chatbot' />
        : result === 'Banbani' ? <S.Character src={BanbaniImg} alt='chatbot' /> 
        : <S.Character src={NeuraneeImg} alt='chatbot' /> 
      }
    </S.ChatbotBox>
  )
}
