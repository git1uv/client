import React, { useEffect, useRef, useState } from 'react'
import * as S from './ChatbotResult.style'
import Moment from 'moment'
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

import Simmaeum from '../../../assets/chatbot/result/Simmaeum.png'
import Banbani from '../../../assets/chatbot/result/Banbani.png'
import Neuranee from '../../../assets/chatbot/result/Neuranee.png'

import Icon1 from '../../../assets/chatbot/result/journal1.png'
import Icon2 from '../../../assets/chatbot/result/journal2.png'
import Icon3 from '../../../assets/chatbot/result/journal3.png'

export default function ChatbotResult() {
  const [chatbot, setChatbot] = useState('');
  const componentRef = useRef(null); 
  const chatResult = useSelector((state) => state.chatResult);

  const formatDate = Moment().format('YYYY / MM / DD');
  console.log(formatDate);

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
      <S.Container ref={componentRef}>
        <S.Top>
          <S.Header>
            <img src={result === 'Simmaeum' ? Simmaeum : result === 'Banbani' ? Banbani : Neuranee} alt="Character" />
          </S.Header>
          <S.TitleBox>
            <S.Name>
              <div>{chatbot}의 일지</div>
              {/* <div>{chatbot}의 일지 : 심마음과 반바니가 싸워서 속상해</div> */}
              <h3>{formatDate}</h3>
            </S.Name>
            <section>{chatResult.title}</section>
          </S.TitleBox>
        </S.Top>
        <S.Bottom>
          <S.ContentBox>
            <S.Title>
              <img src={Icon1} alt='아이콘'/>
              <h2>네가 가진 고민은 이런 거야</h2>
            </S.Title>
            <S.Content>
              <p>{chatResult.content.first}</p>
            </S.Content>
          </S.ContentBox>
          <S.ContentBox>
            <S.Title>
            <img src={Icon2} alt='아이콘'/>
              <h2>내 생각은 이런 것이야</h2>
            </S.Title>
            <S.Content>
              <p>{chatResult.content.second}</p>
            </S.Content>
          </S.ContentBox>
          <S.ContentBox>
            <S.Title>
            <img src={Icon3} alt='아이콘'/>
              <h2>이것을 하면 기분이 좋아질 거야</h2>
            </S.Title>
            <S.Content>
              <div>
                <p>{chatResult.content.third[0]}</p>
              </div>
              <section />
              <div>
                <p>{chatResult.content.third[1]}</p>
              </div>
              <section />
              <div>
                <p>{chatResult.content.third[2]}</p>
              </div>
            </S.Content>
          </S.ContentBox>
        </S.Bottom>
      </S.Container>
      <S.BtnBox>
        <button onClick={handleDownload}></button>
        <button>종료하기</button>
      </S.BtnBox>
    </S.App>
  )
}
