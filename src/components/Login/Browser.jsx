import React from 'react'
import * as S from "./Login.style"
import Common from './Common'

export default function Browser({openModal}) {
  return (
    <S.Container>
      <Common openModal={openModal}/>
    </S.Container>
  )
}
