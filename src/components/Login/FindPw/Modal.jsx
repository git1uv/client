import React from 'react'
import * as S from "./Modal.style"
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({isOpen, closeModal}) {
  if (!isOpen) return null;

  return (
    <S.Container>
        <S.Modal>
          <S.Exit>
            <S.ExitIcon onClick={closeModal} />
          </S.Exit>
          <S.Box>
            <h1>비밀번호를 잊으셨나요?</h1>
            <p>임시 비밀번호를 메일로 보내드릴게요.</p>
            <input placeholder='가입할 때 사용한 이메일을 입력해주세요.'></input>
            <button>발송하기</button>
          </S.Box>
        </S.Modal>
    </S.Container>
  )
}
