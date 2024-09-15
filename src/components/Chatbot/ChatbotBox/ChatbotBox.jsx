import React, { useRef, useState } from 'react'
import * as S from './ChatbotBox.style'
import ChatbotInfo from '../ChatbotInfo/ChatbotInfo'
import Chat from '../Chat/Chat'
import axios from 'axios';

export default function ChatbotBox() {
  const [isChat, setIsChat] = useState(false); // 채팅 시작 여부
  const [message, setMessage] = useState([]); // 사용자와 챗봇이 보낸 메시지들
  const [input, setInput] = useState(); // input 값
  const [current, setCurrent] = useState(); // 보낼 문장
  const [counseling, setCounseling] = useState({
    counselingId: 1,
    emotion: '평온',
  }) // 챗봇의 상태와 상담일지 ID

  const inputRef = useRef(null);

  const receivedToken = localStorage.getItem('token');

  const textClear = () => { // input 창 초기화
    inputRef.current.value = null;
  }

  const ChangeChat = () => { // 채팅 화면으로 변경
    if (!isChat) {
      setIsChat(true);
    }
    textClear();
    // postChatting(); // 사용자 메시지 보내기 API
  }

  const handleKeyPress = (e) => { // 엔터키 누르면 메시지 전송
    if (e.key === 'Enter') {
      ChangeChat();
      setMessage((prev) => [...prev, {
        msg: input,
        isUser: true,
      }]);
      setCurrent(input);
      textClear();
      // postChatting();  // 사용자 메시지 보내기 API
      console.log(message)
    }
  }

  const ChangeInput = (e) => {
    setInput(e.target.value);
  }

  /* 사용자 메시지 보내기 API*/
  const postChatting = async() => {
    try {
      const res = await axios.post(`/api/v1/chatbot/chatting`, {
        userMessage: current,
      }, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
        }
      })
      console.log(res.data);
      setCounseling({
        counselingId: res.data.counselingId,
        emotion: res.data.emotion,
      });
      setMessage((prev) => [...prev, {
        msg: res.data.message,
        isUser: false
      }]);
    } catch(err) {
      console.log(err);
      window.alert('메시지 전송을 실패하였습니다. 다시 시도해주세요.');
    }
  }

  return (
    <S.Container>
      {isChat ? (
        <Chat message={message} counseling={counseling}/>
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
