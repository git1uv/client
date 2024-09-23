import React, { useEffect, useRef, useState } from 'react'
import Simmaeum from '../../../../assets/chatbot/result/Simmaeum.png'
import Banbani from '../../../../assets/chatbot/result/Banbani.png'
import Neuranee from '../../../../assets/chatbot/result/Neuranee.png'
import { useDispatch, useSelector } from 'react-redux';

import Icon1 from '../../../../assets/chatbot/result/journal1.png'
import Icon2 from '../../../../assets/chatbot/result/journal2.png'
import Icon3 from '../../../../assets/chatbot/result/journal3.png'

import * as S from './ResultMobile.style'

export default function ResultMobile() {
    const [chatbot, setChatbot] = useState('');
  const componentRef = useRef(null); 
  const chatResult = useSelector((state) => state.chatResult);
  const solution = useSelector((state) => state.solution);
  let [endDate, setEndDate] = useState('2024 / 09 / 04');
  
  const dispatch = useDispatch();

  let result = localStorage.getItem('result');
  let receivedToken = localStorage.getItem('token');
  let counselingLogId = localStorage.getItem('counselingLogId');

  useEffect(() => {
    // getCounseling(); /* 특정 상담일지 가져오기 API */
    if (result === 'Simmaeum')
      setChatbot('심마음');
    else if (result === 'Banbani')
      setChatbot('반바니');
    else
      setChatbot('뉴러니');
  }, [])

  const contentData = [
    {
      icon: Icon1,
      title: "네가 가진 고민은 이런 거야",
      content: solution.summary,
    },
    {
      icon: Icon2,
      title: "내 생각은 이런 것이야",
      content: solution.suggestion,
    },
    {
      icon: Icon3,
      title: "이것을 하면 기분이 좋아질 거야",
      content: solution.solutions.map((sol) => sol.content),
    },
  ];

  return (
    <S.App>
       <S.Container>
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
        {contentData.map((data, index) => (
            <S.ContentBox key={index}>
                <S.Title>
                    <img src={data.icon} alt='아이콘' />
                    <h2>{data.title}</h2>
                </S.Title>
                <S.Content>
                {Array.isArray(data.content) ? (
                    data.content.map((text, idx) => (
                    <div key={idx}>
                        <p>{text}</p>
                    </div>
                    ))
                ) : (
                    <p>{data.content}</p>
                )}
                </S.Content>
            </S.ContentBox>
            ))}
        </S.Bottom>
       </S.Container>
    </S.App>
  )
}
