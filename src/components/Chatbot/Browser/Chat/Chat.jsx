import React, { useEffect, useState } from 'react'
import * as S from './Chat.style'
import * as T from '../ChatbotBox/ChatbotBox.style'
import icon from '../../../../assets/chatbot/loading_icon.gif' // 나중에 꼭 바꾸기!!!
export default function Chat({message, counseling, loading}) {
  const chatbot = localStorage.getItem('result');
  const [animatedMessage, setAnimatedMessage] = useState(''); // 타이핑 중인 메시지

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


  // 로딩 상태일 때 챗봇 말풍선을 미리 띄워놓고 로딩 애니메이션을 표시
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


// 마음아 나 배고파서 떡볶이 시켜먹으려고 했는데, 배달비 너무 비싸서 못 먹었어..ㅜ