import React, { useEffect, useState } from 'react'
import * as S from './ChatbotResult.style'
import Moment from 'moment'
import { useSelector } from 'react-redux';

import Simmaeum from '../../../assets/chatbot/result/Simmaeum.png'
import Banbani from '../../../assets/chatbot/result/Banbani.png'
import Neuranee from '../../../assets/chatbot/result/Neuranee.png'

import Icon1 from '../../../assets/chatbot/result/journal1.png'
import Icon2 from '../../../assets/chatbot/result/journal2.png'
import Icon3 from '../../../assets/chatbot/result/journal3.png'

export default function ChatbotResult() {
  const [chatbot, setChatbot] = useState('');
  const chatResult = useSelector((state) => state.chatResult);

  const formatDate = Moment().format('YYYY / MM / DD');
  console.log(formatDate);

  let result = localStorage.getItem('result');
  useEffect(() => {

    if (result === 'Simmaeum')
      setChatbot('심마음');
    else if (result === 'Banbani')
      setChatbot('반바니');
    else
      setChatbot('뉴러니');
  }, [])
  return (
    <S.App>
      <S.Container>
        <S.Top>
          <S.Header>
            <img src={result === 'Simmaeum' ? Simmaeum : result === 'Banbani' ? Banbani : Neuranee} alt="Character" />
          </S.Header>
          <S.Name>
            <div>{chatbot}의 일지</div>
            <h3>{formatDate}</h3>
          </S.Name>
        </S.Top>
      <S.Bottom>
        <S.ContentBox>
          <S.Title>
            <img src={Icon1} alt='아이콘'/>
            <h2>네가 가진 고민은 이런 거야</h2>
          </S.Title>
          <div>
            <p>{chatResult.first}</p>
          </div>
        </S.ContentBox>
        <S.ContentBox>
          <S.Title>
          <img src={Icon2} alt='아이콘'/>
            <h2>내가 생각하는 제안은 이런 것이야</h2>
          </S.Title>
          <div>
            <p>{chatResult.second}</p>
          </div>
        </S.ContentBox>
        <S.ContentBox>
          <S.Title>
          <img src={Icon3} alt='아이콘'/>
            <h2>이것을 하면 기분이 좋아질 거야</h2>
          </S.Title>
          <div>
            <p>{chatResult.third[0]}</p>
          </div>
          <div>
            <p>{chatResult.third[1]}</p>
          </div>
          <div>
            <p>{chatResult.third[2]}</p>
          </div>
        </S.ContentBox>
      </S.Bottom>
    </S.Container>
    </S.App>
  )
}
