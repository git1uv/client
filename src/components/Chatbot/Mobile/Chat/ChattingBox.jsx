import React, { useEffect, useRef, useState } from 'react'
import * as S from './ChatbotMobile.style'
import icon from '../../../../assets/chatbot/loading_icon.gif' // 나중에 꼭 바꾸기!!!

export default function ChattingBox({message, counseling, loading, isTyping, setIsTyping}) {
  
  const chatbot = localStorage.getItem('result');
  const [animatedMessage, setAnimatedMessage] = useState(''); // 타이핑 중인 메시지
  const typingIndexRef = useRef(0); // 인덱스를 저장할 ref
  const intervalRef = useRef(null); // interval을 저장할 ref

  const chatEndRef = useRef(null); // 스크롤을 위해 ref 생성

  // 메시지가 추가되거나 타이핑 애니메이션이 진행될 때마다 스크롤 최하단으로 이동
  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [message, animatedMessage]); //

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
