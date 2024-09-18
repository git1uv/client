import React, { useEffect, useState } from 'react';
import * as S from './Chatbot.style'
import Chair from '../../assets/chatbot/chatStart/ChairWeb.png'
import SimmaeumImg from '../../assets/chatbot/chatStart/Simmaeum.png'
import BanbaniImg from '../../assets/chatbot/chatStart/Banbani.png'
import NeuraneeImg from '../../assets/chatbot/chatStart/Neuranee.png'

import { Simmaeum, Banbani, Neuranee } from '../../datas/emotion'


import ChatbotBox from '../../components/Chatbot/ChatbotBox/ChatbotBox';
import { useNavigate } from 'react-router-dom';
import FirstModal from '../../components/Modal/Chatbot/FirstModal';
import SecondModal from '../../components/Modal/Chatbot/SecondModal';
import { useSelector } from 'react-redux';

export default function Chatbot() {
  const result = localStorage.getItem('result');
  let counseling = useSelector((state) => state.counseling)
  const navigate = useNavigate();
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [emotion, setEmotion] = useState(Simmaeum.basic);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  }
  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  }
  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  }
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  }

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
        setEmotion(select.love);
    }
  }

  useEffect(() => {
    changeFace();
  }, [counseling.emotion])

  return (
    <S.App>
      <S.Top> 
        <S.Chair src={Chair} alt="상담의자"/>
        {result === 'Simmaeum'
          ? <S.Character src={SimmaeumImg} alt='chatbot' />
          : result === 'Banbani' ? <S.Character src={BanbaniImg} alt='chatbot' /> 
          : <S.Character src={NeuraneeImg} alt='chatbot' /> 
        }
        <S.Emotion src={emotion}></S.Emotion>
      </S.Top>
      <S.Bottom>
        <S.Header>
          <S.BackBtn onClick={() => navigate('/main')}/>
          <S.SpeechBubble id='back'>
            <h1>홈으로 돌아가기</h1>
            <p>대화내역이 사라져요</p>
          </S.SpeechBubble>
          {result === 'Simmaeum'
            ? <h1>심마음</h1>
            : result === 'Banbani' ? <h1>반바니</h1>
            : <h1>뉴러니</h1> 
          }
          <button onClick={openFirstModal}>끝내기</button>
          <S.SpeechBubble id='end'>
            <h1>다음 단계로!</h1>
            <p>내용을 바탕으로 <br/> 일지를 작성해줘요.</p>
          </S.SpeechBubble>
        </S.Header>
        <ChatbotBox  
          changeFace={changeFace}
        />
      </S.Bottom>
      <FirstModal
        isVisible={isFirstModalOpen} 
        onClose={closeFirstModal} 
        onConfirm={openSecondModal}
      />
      <SecondModal
        isVisible={isSecondModalOpen} 
        onClose={closeSecondModal} 
      />
    </S.App>
  );
}