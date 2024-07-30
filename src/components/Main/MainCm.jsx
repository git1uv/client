import React from 'react'
import * as S from "./Main.style"
import { useNavigate } from 'react-router-dom'

export default function MainCm() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Room>
      <S.Trash onClick={() => navigate('/trash')}/>
      <S.Airplane />
      </S.Room>
    </S.Container>
    
  )
}
