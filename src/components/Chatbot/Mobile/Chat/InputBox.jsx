import React, { useRef, useState } from 'react'
import * as S from './ChatbotMobile.style'

export default function InputBox({setDummyData}) {
  const inputRef = useRef(null); // input 요소에 대한 ref 생성

  const [inputValue, setInputValue] = useState('');

  const addNewMessage = (newMessage) => {
    setDummyData(prevData => [
      ...prevData,
      newMessage
    ]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { msg: inputValue, isUser: true };
      addNewMessage(newMessage);
      setInputValue(''); // 입력 후 초기화
      inputRef.current.focus(); // 전송 후 input에 포커스 유지
    }
  };

  return (
    <S.InputBox>
      <input
        type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요"
          ref={inputRef}
        />
        <button onClick={handleSendMessage}></button>
    </S.InputBox>
  )
}
