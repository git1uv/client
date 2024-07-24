import React from 'react'
import * as S from "./Login.style"
import test from '../../assets/testImg.jpeg'
import Common from './Common'

export default function PCView() {
  return (
    <S.Container>
      <S.Left>
        <img src={test} alt='test'></img>
      </S.Left>
      <Common />
    </S.Container>  
  )
}
