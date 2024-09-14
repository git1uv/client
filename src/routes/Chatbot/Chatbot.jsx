import React, { useState } from 'react';
import * as S from './Chatbot.style'
import Chair from '../../assets/chatbot/chatStart/ChairWeb.png'
import Simmaeum from '../../assets/chatbot/chatStart/Simmaeum.png'
import Banbani from '../../assets/chatbot/chatStart/Banbani.png'
import Neuranee from '../../assets/chatbot/chatStart/Neuranee.png'

import ChatbotBox from '../../components/Chatbot/ChatbotBox/ChatbotBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FirstModal from '../../components/Modal/Chatbot/FirstModal';
import SecondModal from '../../components/Modal/Chatbot/SecondModal';

export default function Chatbot() {
  const result = localStorage.getItem('result');
  const navigate = useNavigate();
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  }
  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  }
  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);

    // 종이비행기 작성 API
    // postAirplane(); 
  }
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
    navigate('/chatbot/result');
  }
  const addWriting = () => {
    window.location.reload();
  }
  
  return (
    <S.App>
      <S.Top> 
        <S.Chair src={Chair} alt="상담의자"/>
        {result === 'Simmaeum'
          ? <S.Character src={Simmaeum} alt='chatbot' />
          : result === 'Banbani' ? <S.Character src={Banbani} alt='chatbot' /> 
          : <S.Character src={Neuranee} alt='chatbot' /> 
        }
      </S.Top>
      <S.Bottom>
        <S.Header>
          <S.BackBtn/>
          {result === 'Simmaeum'
            ? <h1>심마음</h1>
            : result === 'Banbani' ? <h1>반바니</h1>
            : <h1>뉴러니</h1> 
          }
          <button onClick={openFirstModal}>끝내기</button>
        </S.Header>
        <ChatbotBox />
      </S.Bottom>
      <FirstModal
        isVisible={isFirstModalOpen} 
        onClose={closeFirstModal} 
        onConfirm={openSecondModal}
      />
      <SecondModal
        isVisible={isSecondModalOpen} 
        onClose={closeSecondModal} 
        onConfirm={addWriting}
      />
    </S.App>
  );
}