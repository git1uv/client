import React, { useEffect, useRef, useState } from 'react'
import * as S from './ChatbotResult.style'
import Moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

import Simmaeum from '../../../assets/chatbot/result/Simmaeum.png'
import Banbani from '../../../assets/chatbot/result/Banbani.png'
import Neuranee from '../../../assets/chatbot/result/Neuranee.png'

import Icon1 from '../../../assets/chatbot/result/journal1.png'
import Icon2 from '../../../assets/chatbot/result/journal2.png'
import Icon3 from '../../../assets/chatbot/result/journal3.png'
import axios from 'axios';
import { setSolution } from '../../../redux/solution';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ChatbotResult() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const counselingLogId = localStorage.getItem('counselingLogId');


  const [chatbot, setChatbot] = useState('');
  const componentRef = useRef(null); 
  const chatResult = useSelector((state) => state.chatResult);
  const solution = useSelector((state) => state.solution);
  let [endDate, setEndDate] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); 
  
  const handleDownload = async () => {
    if (!componentRef.current) return;

    try {
        const canvas = await html2canvas(componentRef.current, { scale: 2 });
        canvas.toBlob((blob) => {
            if (blob !== null) {
                saveAs(blob, "Counseling diary.png");
            }
        });
    } catch (error) {
        console.error("Error converting div to image:", error);
    }

};

  let result = localStorage.getItem('result');

  /* 특정 상담일지 가져오기 API 구현*/
  const getCounseling = async() => {
    try {
      const res = await axios.get(`${serverURL}/api/v1/chatbot/counselinglog/${counselingLogId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        }
      });
      console.log(res.data);
      let data = res.data.data
      dispatch(setSolution({
        counselingLogId: data.counselingLogId,
        title: data.title,
        summary: data.summary,
        suggestion: data.suggestion,
        solutions: data.solutions,
        endedAt: data.endedAt,
      }));
      const formatDate = res.data.endedAt.format('YYYY / MM / DD');
      setEndDate(formatDate);

      console.log(formatDate);

    } catch(err) {
      console.log(err);
    }
  }

  
  useEffect(() => {
    // getCounseling(); /* 특정 상담일지 가져오기 API */
    if (result === 'Simmaeum')
      setChatbot('심마음');
    else if (result === 'Banbani')
      setChatbot('반바니');
    else
      setChatbot('뉴러니');
  }, [])

  useEffect(() => {
    const isNavigatedFromChatbot = location.state && location.state.fromModal; // 특정 로직: 모달에서 네비게이션 여부

    if (!isNavigatedFromChatbot) {
      getCounseling(); // 달력에서 접근할 때 호출
    }
  }, [location]); 
  return (
    <S.App>
      <S.Container ref={componentRef}>
        <S.Top>
          <S.Header>
            <img src={result === 'Simmaeum' ? Simmaeum : result === 'Banbani' ? Banbani : Neuranee} alt="Character" />
          </S.Header>
          <S.TitleBox>
            <S.Name>
              <div>{chatbot}의 일지</div>
              <h3>{endDate}</h3>
            </S.Name>
            <section>{solution.title}</section>
          </S.TitleBox>
        </S.Top>
        <S.Bottom>
          <S.ContentBox>
            <S.Title>
              <img src={Icon1} alt='아이콘'/>
              <h2>네가 가진 고민은 이런 거야</h2>
            </S.Title>
            <S.Content>
              <p>{solution.summary}</p>
            </S.Content>
          </S.ContentBox>
          <S.ContentBox>
            <S.Title>
            <img src={Icon2} alt='아이콘'/>
              <h2>내 생각은 이런 것이야</h2>
            </S.Title>
            <S.Content>
              <p>{solution.suggestion}</p>
            </S.Content>
          </S.ContentBox>
          <S.ContentBox>
            <S.Title>
            <img src={Icon3} alt='아이콘'/>
              <h2>이것을 하면 기분이 좋아질 거야</h2>
            </S.Title>
            <S.Content>
              <div>
                <p>{solution.solutions[0].content}</p>
              </div>
              <section />
              <div>
                <p>{solution.solutions[1].content}</p>
              </div>
              <section />
              <div>
                <p>{solution.solutions[2].content}</p>
              </div>
            </S.Content>
          </S.ContentBox>
        </S.Bottom>
      </S.Container>
      <S.BtnBox>
        <button onClick={handleDownload}></button>
        <button onClick={() => navigate('/main')}>종료하기</button>
      </S.BtnBox>
    </S.App>
  )
}
