import React, { useEffect, useRef, useState } from 'react';
import * as S from './Chatbot.style'
import * as T from '../ChatbotBox/ChatbotBox.style'
import Chair from '../../../../assets/chatbot/chatStart/ChairWeb.png'
import SimmaeumImg from '../../../../assets/chatbot/chatStart/Simmaeum.png'
import BanbaniImg from '../../../../assets/chatbot/chatStart/Banbani.png'
import NeuraneeImg from '../../../../assets/chatbot/chatStart/Neuranee.png'

import { Simmaeum, Banbani, Neuranee } from '../../../../datas/emotion'


import ChatbotBox from '../ChatbotBox/ChatbotBox';
import { useNavigate } from 'react-router-dom';
import FirstModal from '../../../Modal/Chatbot/FirstModal';
import SecondModal from '../../../Modal/Chatbot/SecondModal';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../../../redux/counseling';
import axios from 'axios';

export default function Chatbot() {
  const result = localStorage.getItem('result');
  let counseling = useSelector((state) => state.counseling)
  const navigate = useNavigate();
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [emotion, setEmotion] = useState(Simmaeum.basic);
  const [loading, setLoading] = useState(false); // 챗봇 응답 불러오는 중
  const inputRef = useRef(null);
  const [isChat, setIsChat] = useState(false); // 채팅 시작 여부
  const [message, setMessage] = useState([]); // 사용자와 챗봇이 보낸 메시지들
  const [input, setInput] = useState(); // input 값
  const [current, setCurrent] = useState(); // 보낼 문장


  const dispatch = useDispatch();

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  }
  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  }
  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  }
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  }

  // 감정 분석에 따른 챗봇의 표정 변화 구현 
  const changeFace = () => {
    let select = Simmaeum;
    if (result === 'Simmaeum')
      select = Simmaeum;
    else if (result === 'Banbani')
      select = Banbani;
    else
      select = Neuranee;

    switch(counseling.emotion) {
      case '평온':
        setEmotion(select.basic);
        break;
      case '웃음':
        setEmotion(select.smile);
        break;
      case '사랑':
        setEmotion(select.love);
        break;
      case '놀람':
        setEmotion(select.surprise);
        break;
      case '슬픔':
        setEmotion(select.sad);
        break;
      case '불편':
        setEmotion(select.awkward);
        break;
      case '화남':
        setEmotion(select.annoying);
        break;
      case '불안':
        setEmotion(select.anxiety);
        break;
      case '피곤':
        setEmotion(select.tired);
        break;
      default:
        setEmotion(select.love);
    }
  }

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

      // test
      dispatch(setAnswer(
        {
          counselingLogId: 1,
          emotion: '사랑',
          date: '',
        }
      ))
      console.log(message)
    }
  }

  const ChangeInput = (e) => {
    setInput(e.target.value);
  }
  const receivedToken = localStorage.getItem('token');

  /* 사용자 메시지 보내기 API*/
  const postChatting = async() => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/v1/chatbot/chatting`, {
        userMessage: current,
      }, {
        headers: {
          'Authorization': `Bearer ${receivedToken}`
        }
      })
      console.log(res.data);
      dispatch(setAnswer(
        {
          counselingLogId: res.data.counselingLogId,
          emotion: res.data.emotion,
          date: res.data.createdAt,
        }
      ))
      setMessage((prev) => [...prev, {
        msg: res.data.message,
        isUser: false
      }]);
      setLoading(false);
    } catch(err) {
      console.log(err);
      window.alert('메시지 전송을 실패하였습니다. 다시 시도해주세요.');
    }
  }

  useEffect(() => {
    changeFace();
  }, [counseling.emotion])

  return (
    <S.App>
      <S.Top> 
        <S.Chair src={Chair} alt="상담의자"/>
        {result === 'Simmaeum'
          ? <S.Character src={SimmaeumImg} alt='chatbot' />
          : result === 'Banbani' ? <S.Character src={BanbaniImg} alt='chatbot' /> 
          : <S.Character src={NeuraneeImg} alt='chatbot' /> 
        }
        <S.Emotion src={emotion}></S.Emotion>
      </S.Top>
      <S.Bottom>
        <S.Header>
          <S.BackBtn onClick={() => navigate('/main')}/>
          <S.SpeechBubble id='back'>
            <h1>홈으로 돌아가기</h1>
            <p>대화내역이 사라져요</p>
          </S.SpeechBubble>
          {result === 'Simmaeum'
            ? <h1>심마음</h1>
            : result === 'Banbani' ? <h1>반바니</h1>
            : <h1>뉴러니</h1> 
          }
          <button onClick={openFirstModal}>끝내기</button>
          <S.SpeechBubble id='end'>
            <h1>다음 단계로!</h1>
            <p>내용을 바탕으로 <br/> 일지를 작성해줘요.</p>
          </S.SpeechBubble>
        </S.Header>
        <ChatbotBox  
          changeFace={changeFace}
          loading={loading}
          setLoading={setLoading}
          isChat={isChat}
          message={message}
        />
      </S.Bottom>
      <T.InputBox>
        <input
          disabled={loading}
          placeholder='고민부터 털어놓고 싶은 것, 오늘 있었던 일 등 뭐든 말해보아요!'
          onChange={ChangeInput}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <button disabled={loading} onClick={ChangeChat} />
      </T.InputBox>
      <FirstModal
        isVisible={isFirstModalOpen} 
        onClose={closeFirstModal} 
        onConfirm={openSecondModal}
      />
      <SecondModal
        isVisible={isSecondModalOpen} 
        onClose={closeSecondModal} 
      />
    </S.App>
  );
}