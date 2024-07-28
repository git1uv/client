import React from 'react'
import * as S from "./Modal.style"

export default function Modal({isOpen, closeModal}) {
  if (!isOpen) return null;

  return (
    <S.Container>
        <S.Modal>
            모달
            <button onClick={closeModal}></button>
        </S.Modal>
    </S.Container>
  )
}
