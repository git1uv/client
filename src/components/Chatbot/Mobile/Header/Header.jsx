import React from 'react'
import * as S from '../ChatbotMobile.style'
import { IoIosArrowBack } from "react-icons/io";

export default function Header() {
  return (
    <S.Header>
      <S.BackBtn>
        <IoIosArrowBack size="30"/>
      </S.BackBtn>
      <h1>반바니</h1>
      <S.EndBtn>끝내기</S.EndBtn>
    </S.Header>
  )
}
