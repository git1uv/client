import React from 'react'
import * as S from './ChatbotMobile.style'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const result = localStorage.getItem('result');
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.BackBtn>
        <IoIosArrowBack size="30" onClick={() => navigate(-1)}/>
      </S.BackBtn>
        <h1>
          {result === 'Simmaeum'
            ? <h1>심마음</h1>
            : result === 'Banbani' ? <h1>반바니</h1>
            : <h1>뉴러니</h1> 
          }
        </h1>
      <S.EndBtn>끝내기</S.EndBtn>
    </S.Header>
  )
}
