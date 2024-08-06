import React from 'react'
import * as S from "./PencilHolder.style"
import Pencil from '../../assets/pencilHolder/Pencil.png'

export default function PencilHolderCm() {
  return (
    <S.Container>
      <S.SizedBox/>
      <S.Wrapper>
        <S.Title>
          <h1>익명의 심터러에게 편지를 보내보세요!</h1>
          <p>편지는 익명으로 보내지며, 랜덤의 사용자에게 전송됩니다! </p>
          <p>익명의 편지로 따뜻한 마음을 전해주세요~</p>
        </S.Title>
        <section/>
        <S.Letter>
          <S.Wrapper>
            <S.WriteBox>
              <h3>표시할 이름</h3>
              <input placeholder='ex) 팟팅인간(최대 10자)'></input>
            </S.WriteBox>
            <S.WriteBox>
              <h3>보낼 내용</h3>
              <textarea placeholder='최대 150자'></textarea>
            </S.WriteBox>
            <S.SendBtn>
              <S.PencilIcon>
                <img src={Pencil} alt='icon'/>
              </S.PencilIcon>
              <p>보내기</p>
            </S.SendBtn>
          </S.Wrapper>
        </S.Letter>
      </S.Wrapper>
    </S.Container>
  )
}
