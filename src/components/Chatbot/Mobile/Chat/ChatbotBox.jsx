import React, { useEffect, useState } from 'react'
import * as S from './ChatbotMobile.style'
import chair from '../../../../assets/chatbot/chatStart/ChairMobile.png.webp'
import SimmaeumImg from '../../../../assets/chatbot/chatStart/Simmaeum.png.webp'
import BanbaniImg from '../../../../assets/chatbot/chatStart/Banbani.png.webp'
import NeuraneeImg from '../../../../assets/chatbot/chatStart/Neuranee.png.webp'

import { Simmaeum, Banbani, Neuranee } from '../../../../datas/emotion'
import { useSelector } from 'react-redux'

export default function ChatbotBox({emotion, setEmotion}) {
  const result = localStorage.getItem('result');
  let counseling = useSelector((state) => state.counseling)


  // 감정 분석에 따른 챗봇의 표정 변화 구현 
  const changeFace = () => {
    let select = Simmaeum;
    if (result === 'Simmaeum')
      select = Simmaeum;
    else if (result === 'Banbani')
      select = Banbani;
    else
      select = Neuranee;

    switch(counseling.emotion) {
      case '평온':
        setEmotion(select.basic);
        break;
      case '웃음':
        setEmotion(select.smile);
        break;
      case '사랑':
        setEmotion(select.love);
        break;
      case '놀람':
        setEmotion(select.surprise);
        break;
      case '슬픔':
        setEmotion(select.sad);
        break;
      case '불편':
        setEmotion(select.awkward);
        break;
      case '화남':
        setEmotion(select.annoying);
        break;
      case '불안':
        setEmotion(select.anxiety);
        break;
      case '피곤':
        setEmotion(select.tired);
        break;
      default:
        setEmotion(select.basic);
    }
  }

  useEffect(() => {
    changeFace();
  }, [emotion])

  return (
    <S.ChatbotBox>
      <S.Chair src={chair} alt='chair'/>
      {result === 'Simmaeum'
        ? <S.Character src={SimmaeumImg} alt='chatbot' />
        : result === 'Banbani' ? <S.Character src={BanbaniImg} alt='chatbot' /> 
        : <S.Character src={NeuraneeImg} alt='chatbot' /> 
      }
      <S.Emotion src={emotion} />
    </S.ChatbotBox>
  )
}
