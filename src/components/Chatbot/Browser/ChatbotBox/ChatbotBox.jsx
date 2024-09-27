import React, { useRef, useState } from 'react'
import * as S from './ChatbotBox.style'
import ChatbotInfo from '../ChatbotInfo/ChatbotInfo'
import Chat from '../Chat/Chat'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../../../redux/counseling';

export default function ChatbotBox({changeFace, loading, setLoading, isChat, message, isTyping, setIsTyping}) {
  const counseling = useSelector((state) => state.counseling);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const receivedToken = localStorage.getItem('token');

  return (
    <S.Container isChat={isChat}>
      {isChat ? (
        <Chat 
          message={message} 
          counseling={counseling} 
          loading={loading} 
          isTyping={isTyping} 
          setIsTyping={setIsTyping}
        />
      ) : (
        <>
          <S.Title>
            <h1>챗봇과 대화하기</h1>
          </S.Title>
          <ChatbotInfo />
          <S.Warning>
            <h3>* 놀라지 마세요!</h3>
            <p>대화 도중 더 전문적인 상담이 필요한 경우 알려드립니다.</p>
          </S.Warning>
        </>
      )}
    </S.Container>
  )
}
