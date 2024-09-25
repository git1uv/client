import React, { useEffect, useRef, useState } from 'react'
import * as S from './ChatbotMobile.style'
import icon from '../../../../assets/chatbot/loading_icon.gif' // 나중에 꼭 바꾸기!!!

export default function ChattingBox({message, counseling, loading}) {
  
  const chatbot = localStorage.getItem('result');
  const [animatedMessage, setAnimatedMessage] = useState(''); // 타이핑 중인 메시지

    // 더미데이터
  const chatEndRef = useRef(null); // 스크롤을 위해 ref 생성

  useEffect(() => {
    // 메시지가 추가될 때마다 스크롤을 최하단으로 이동
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);

  useEffect(() => {
    if (!loading && message.length > 0) {
      const latestMessage = message[message.length - 1];
      
      // 사용자가 보낸 메시지가 아닌 경우 (챗봇 메시지에만 타이핑 애니메이션 적용)
      if (!latestMessage.isUser) {
        let index = 0;
        setAnimatedMessage(''); // 초기화
        
        const interval = setInterval(() => {
          setAnimatedMessage((prev) => prev + latestMessage.msg[index]);
          index++;

          // 메시지를 모두 타이핑하면 멈춤
          if (index === latestMessage.msg.length) {
            clearInterval(interval);
          }
        }, 50); // 글자마다 50ms 간격으로 타이핑

        return () => clearInterval(interval); // 컴포넌트 unmount 시 타이핑 멈춤
      }
    }
  }, [message, loading]);

  const displayChatbotBubble = (value, index) => {
    return (
      <S.ChatbotBubble key={index}>
        {loading && index === message.length - 1 ? (
          <img src={icon} alt="loading icon" />
        ) : (
          index === message.length - 1 ? animatedMessage : value.msg
        )}
      </S.ChatbotBubble>
    );
  };

  return (
    <S.ChattingBox>
         { 
        message.map((value, index) => {
          return (
            (value.isUser ?
              <S.UserBubble chatbot={chatbot}>{String(value.msg)}</S.UserBubble>
              :  ( displayChatbotBubble(value, index) )
            )
          )
        })
      }
      <div ref={chatEndRef} /> {/* 스크롤을 위한 빈 div */}
    </S.ChattingBox>
  )
}
