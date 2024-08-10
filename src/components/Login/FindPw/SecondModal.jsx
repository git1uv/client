import React from 'react'
import * as S from "./Modal.style"

export default function SecondModal({isOpen, closeModal}) {

  if (!isOpen) return null;
  return (
    <S.Container>
        <S.Modal>
          <S.Exit>
            <S.ExitIcon onClick={closeModal} />
          </S.Exit>
          <S.Box>
            <S.Title id="second">임시 비밀번호를 보내드렸어요.</S.Title>
            <S.PostBtn id="second" onClick={closeModal}>닫기</S.PostBtn>
          </S.Box>
        </S.Modal>
    </S.Container>
  )
}
