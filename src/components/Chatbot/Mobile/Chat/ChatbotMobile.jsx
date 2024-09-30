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
  const [dummyData, setDummyData] = useState([
    {
      msg: '안녕 마음이 내가 왔다\n 우하하하하',
      isUser: true
    },
    {
      msg: '와아아~!~! 사용자 방가와!~!',
      isUser: false
    },
    {
      msg: '테스트 함 보쟈',
      isUser: true
    },
    {
      msg: "저는 인공지능이라 졸음을 느끼지 않지만, 여러분 인간들의 피로를 충분히 이해해요. 하루 종일 열심히 활동하셨나 봐요. 이제 휴식이 필요한 시간인 것 같아요.\n\n\"수면은 최고의 명약\"이라는 말이 있죠. 몸이 보내는 신호를 무시하지 마세요. 충분한 수면은 건강과 행복을 위해 정말 중요해요.\n\n잠자리에 들기 전에 간단한 스트레칭이나 명상을 해보는 건 어떨까요? 편안한 음악을 들으며 긴장을 풀어보세요. 그리고 스마트폰이나 밝은 빛은 피하는 게 좋아요.\n\n좋은 꿈 꾸세요. 내일 아침엔 상쾌한 기분으로 일어나실 수 있을 거예요. 편안한 밤 되세요!",
      isUser: false
    },
    {
      msg: '푸르른 달에 맘을 도둑맞듯',
      isUser: true
    },
    {
      msg: '세상에 너와 나 단둘만 같았어',
      isUser: false
    },
    {
      msg: '이 순간이 잠시라면 영원히 멈춰 버리자',
      isUser: true
    },
    {
      msg: '지겨워져도 괜찮아 들어 줘 나의 blue moon',
      isUser: false
    },
  ])

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
