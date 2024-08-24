import React, { useRef, useState } from 'react'
import * as S from './ChatbotBox.style'
import ChatbotInfo from '../ChatbotInfo/ChatbotInfo'
import Chat from '../Chat/Chat'

export default function ChatbotBox() {
  const [isChat, setIsChat] = useState(false);
  const [sentence, setSentence] = useState();
  const inputRef = useRef(null);
  const [sendSentence, setSendSentence] = useState();

  const textClear = () => {
    inputRef.current.value = null;
  }
  const ChangeChat = () => {
    if (!isChat) {
      setIsChat(true);
    }
    textClear();
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      ChangeChat();
      setSendSentence(sentence)
      textClear();
    }
  }

  const ChangeInput = (e) => {
    setSentence(e.target.value);
  }

  return (
    <S.Container>
      {isChat ? (
        <Chat sentence={sendSentence} />
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
          onKeyDown={handleKeyPress}
          ref={inputRef}
        />
        <button onClick={ChangeChat} />
      </S.InputBox>
    </S.Container>
  )
}
