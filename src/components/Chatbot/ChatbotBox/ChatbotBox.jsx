import React, { useRef, useState } from 'react'
import * as S from './ChatbotBox.style'
import ChatbotInfo from '../ChatbotInfo/ChatbotInfo'
import Chat from '../Chat/Chat'
import axios from 'axios';

export default function ChatbotBox() {
  const [isChat, setIsChat] = useState(false);
  const [sentence, setSentence] = useState();
  const [sendSentence, setSendSentence] = useState();
  const [counseling, setCounseling] = useState({
    counselingId: 1,
    emotion: '평온',
    message: [],
  })

  const inputRef = useRef(null);

  const receivedToken = localStorage.getItem('token');

  const textClear = () => {
    inputRef.current.value = null;
  }
  const ChangeChat = () => {
    if (!isChat) {
      setIsChat(true);
    }
    textClear();
    // postChatting(); // 사용자 메시지 보내기 API
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      ChangeChat();
      setSendSentence(sentence);
      textClear();
      // postChatting();  // 사용자 메시지 보내기 API
    }
  }

  const ChangeInput = (e) => {
    setSentence(e.target.value);
  }

  /* 사용자 메시지 보내기 API*/
  // const postChatting = async() => {
  //   try {
  //     const res = await axios.post(`/api/v1/chatbot/chatting`, {
  //       userMessage: sendSentence,
  //     }, {
  //       headers: {
  //         'Authorization': `Bearer ${receivedToken}`
  //       }
  //     })
  //     console.log(res.data);
  //     setCounseling((prev) => ({
  //       ...prev, // 기존 객체의 나머지 필드들 유지
  //       counselingId: res.data.counselingId,
  //       emotion: res.data.emotion,
  //       message: [...prev.message, ...res.data.message], // 기존 message 배열에 새로운 message 배열을 추가
  //     }));
      
  //   } catch(err) {
  //     console.log(err);
  //     window.alert('메시지 전송을 실패하였습니다. 다시 시도해주세요.');
  //   }
  // }

  return (
    <S.Container>
      {isChat ? (
        <Chat sentence={sendSentence} counseling={counseling}/>
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
      <S.InputBox>
        <input
          placeholder='고민부터 털어놓고 싶은 것, 오늘 있었던 일 등 뭐든 말해보아요!'
          onChange={ChangeInput}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <button onClick={ChangeChat} />
      </S.InputBox>
    </S.Container>
  )
}
