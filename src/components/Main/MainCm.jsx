import React from 'react'
import * as S from "./Main.style"
import trash from '../../assets/Main/trash.png'
import calendar from '../../assets/Main/calendar.png'
import { useNavigate } from 'react-router-dom'

export default function MainCm() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Room>

      <S.Trash onClick={() => navigate('/trash')}/>
      </S.Room>
    </S.Container>
    
  )
}
