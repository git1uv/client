import React, { useEffect, useRef, useState } from 'react'
import * as S from './Chat.style'
import * as T from '../ChatbotBox/ChatbotBox.style'
import icon from '../../../../assets/chatbot/loading_icon.gif' // 나중에 꼭 바꾸기!!!
export default function Chat({message, counseling, loading, isTyping, setIsTyping}) {
  const chatbot = localStorage.getItem('result');
  const [animatedMessage, setAnimatedMessage] = useState(''); // 타이핑 중인 메시지
  const typingIndexRef = useRef(0); // 인덱스를 저장할 ref
  const intervalRef = useRef(null); // interval을 저장할 ref

  useEffect(() => {
    if (message.length > 0) {
      const latestMessage = message[message.length - 1];
      if (latestMessage.msg === '')
        return;
      if (!latestMessage.isUser) {
        if (!isTyping) {
          setAnimatedMessage(''); // 초기화
          setIsTyping(true); // 애니메이션 시작
          typingIndexRef.current = -1; // 인덱스 초기화

          intervalRef.current = setInterval(() => {
            setAnimatedMessage((prev) => prev + latestMessage.msg[typingIndexRef.current]);
            typingIndexRef.current++;

            // 메시지를 모두 타이핑하면 애니메이션 종료
            if (typingIndexRef.current+1 === latestMessage.msg.length) {
              clearInterval(intervalRef.current);
              setIsTyping(false); // 애니메이션 종료
            }
          }, 50);
        }
      } else {
        // 사용자가 보낸 메시지는 즉시 표시
        setAnimatedMessage(latestMessage.msg);
      }
    }
  }, [message]);


  // 로딩 상태일 때 챗봇 말풍선을 미리 띄워놓고 로딩 애니메이션을 표시
  const displayChatbotBubble = (value, index) => {
    return (
      <S.ChatbotBubble key={index}>
        {value.isLoading ? (
          <img src={icon} alt="loading icon" />
        ) : (
          index === message.length - 1 && !loading ? animatedMessage : value.msg
        )}
      </S.ChatbotBubble>
    );
  };

  return (
    <T.Container isChat={true} >
      {
        message.map((value, index) => {
          return (
            (value.isUser ? (
              <S.UserBubble key={index} chatbot={chatbot}>{value.msg}</S.UserBubble>
            ) : ( displayChatbotBubble(value, index) )
            )
          )
        })
      }
    </T.Container>
  )
}
