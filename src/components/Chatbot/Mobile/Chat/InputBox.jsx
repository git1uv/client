import React, { useEffect, useRef, useState } from "react";
import * as S from "./ChatbotMobile.style";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAnswer } from "../../../../redux/counseling";

export default function InputBox({
  message,
  setMessage,
  loading,
  setLoading,
  isTyping,
  openRedFlagModal,
  emotion,
  setEmotion,
}) {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const counselingLogIdLS = localStorage.getItem("counselingLogId");

  const inputRef = useRef(null); // input 요소에 대한 ref 생성

  const [input, setInput] = useState("");
  const [current, setCurrent] = useState(); // 보낼 문장

  const dispatch = useDispatch();
  const addNewMessage = (newMessage) => {
    setMessage((prevData) => [...prevData, newMessage]);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setCurrent(input);
      setMessage((prev) => [
        ...prev,
        {
          msg: input,
          isUser: true,
        },
      ]);
      inputRef.current.value = null;
      inputRef.current.focus(); // 전송 후 input에 포커스 유지
    }
    textClear();
    setInput(""); // input 상태를 초기화
    inputRef.current.focus(); // 전송 후 input에 포커스 유지
  };

  const textClear = () => {
    // input 창 초기화
    inputRef.current.value = null;
  };

  /* 사용자 메시지 보내기 API*/
  const postChatting = async () => {
    const loadingMessage = { msg: "", isUser: false, isLoading: true };
    setMessage((prevMessages) => [...prevMessages, loadingMessage]);

    setLoading(true);
    try {
      const res = await axios.post(
        `${serverURL}/api/v1/chatbot/chatting?counselingLogId=${counselingLogIdLS}`,
        {
          userMessage: current,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken} ${refreshToken}`,
          },
        }
      );
      dispatch(
        setAnswer({
          counselingLogId: res.data.data.counselingLogId,
          emotion: res.data.data.emotion,
          date: res.data.data.createdAt,
        })
      );
      // setEmotion(res.data.data.emotion);

      setMessage((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop(); // 마지막 로딩 메시지 제거
        updatedMessages.push({
          msg: res.data.data.message,
          isUser: false,
          isLoading: false,
        }); // 응답 메시지 추가
        return updatedMessages;
      });
      let redFlag = res.data.data.redFlag;

      if (redFlag === "true") {
        openRedFlagModal();
      }
      // console.log(res.data);
    } catch (err) {
      // console.log(err);
      window.alert("메시지 전송을 실패하였습니다. 다시 시도해주세요.");
      setMessage((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages.pop(); // 마지막 로딩 메시지 제거
        return updatedMessages;
      });
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  useEffect(() => {
    if (current !== undefined) {
      postChatting();
    }
  }, [current]);

  return (
    <S.InputBox>
      <input
        type="text"
        disabled={isTyping || loading}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="메시지를 입력하세요"
        ref={inputRef}
      />
      <button onClick={handleSendMessage}></button>
    </S.InputBox>
  );
}
