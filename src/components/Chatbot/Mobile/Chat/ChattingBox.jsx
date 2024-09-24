import React, { useEffect, useRef, useState } from 'react'
import * as S from './ChatbotMobile.style'
import icon from '../../../../assets/chatbot/loading_icon.gif' // 나중에 꼭 바꾸기!!!

export default function ChattingBox({message, counseling, loading}) {
  
  const chatbot = localStorage.getItem('result');
    // 더미데이터
  const chatEndRef = useRef(null); // 스크롤을 위해 ref 생성

  useEffect(() => {
    // 메시지가 추가될 때마다 스크롤을 최하단으로 이동
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);

  return (
    <S.ChattingBox>
         { 
        message.map((value, index) => {
          return (
            (value.isUser ?
              <S.UserBubble chatbot={chatbot}>{String(value.msg)}</S.UserBubble>
              :  <S.ChatbotBubble key={index}>
              {loading && index === message.length - 1 ? ( // 마지막 응답이 로딩 중일 때
                <img src={icon} alt="loading icon" />
              ) : (
                String(value.msg) // 문자열로 변환
              )}
            </S.ChatbotBubble>
            )
          )
        })
      }
      <div ref={chatEndRef} /> {/* 스크롤을 위한 빈 div */}
    </S.ChattingBox>
  )
}
