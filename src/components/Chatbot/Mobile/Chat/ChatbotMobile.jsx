import React, { useState } from 'react'
import * as S from './ChatbotMobile.style'
import Header from './Header'
import ChattingBox from './ChattingBox'
import ChatbotBox from './ChatbotBox'
import InputBox from './InputBox'
import FirstModal from '../../../Modal/Chatbot/FirstModal';
import SecondModal from '../../../Modal/Chatbot/SecondModal';
import counseling from '../../../../redux/counseling'
import RedFlagModal from '../../../Modal/Chatbot/RedFlagModal'

export default function ChatbotMobile() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isRedFlagModalOpen, setIsRedFlagModalOpen] = useState(false);

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // 타이핑 중

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
  const openRedFlagModal = () => {
    setIsRedFlagModalOpen(true);
  }
  const closeRedFlagModal = () => {
    setIsRedFlagModalOpen(false);
  }
  const connectCounseling = () => {
    window.location.href = 'https://www.ncmh.go.kr/ncmh/main.do';
  }

  return (
    <S.App>
      <Header openFirstModal={openFirstModal}/>
      <ChattingBox message={message} counseling={counseling} loading={loading} isTyping={isTyping} setIsTyping={setIsTyping}/>
      <ChatbotBox/>
      <InputBox 
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading} 
        isTyping={isTyping} 
        openRedFlagModal={openRedFlagModal}
      />
      <FirstModal
        isVisible={isFirstModalOpen} 
        onClose={closeFirstModal} 
        onConfirm={openSecondModal}
      />
      <SecondModal
        isVisible={isSecondModalOpen} 
        onClose={closeSecondModal} 
      />
      <RedFlagModal
        isVisible={isRedFlagModalOpen} 
        onClose={closeRedFlagModal} 
        onConfirm={connectCounseling}
      />
    </S.App>
  )
}
