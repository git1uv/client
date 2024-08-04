import React from 'react'
import * as S from "./PencilHolder.style"

export default function PencilHolderCm() {
  return (
    <S.Container>
      <S.Title>
        <h1>익명의 심터러에게 편지를 보내보세요!</h1>
        <p>편지는 익명으로 보내지며, 랜덤의 사용자에게 전송됩니다! </p>
        <p>익명의 편지로 따뜻한 마음을 전해주세요~</p>
      </S.Title>
      <S.Letter>
        <h3>표시할 이름</h3>
        <input placeholder='ex) 팟팅인간(최대 10자)'></input>
        
        <h3>보낼 내용</h3>
        <textarea placeholder='최대 150자'></textarea>

        <button>보내기</button>
      </S.Letter>
    </S.Container>
  )
}
