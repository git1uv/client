import React, { useState } from 'react'
import * as S from "./Modal.style"
import axios from 'axios';

export default function FirstModal({isOpen, closeModal, setIsSecondOpen}) {
  const [email, setEmail] = useState('');
  
  const postTempPw = async() => {
    try { 
      const res = await axios.patch(
        `/api/v1/login/temp-pw`,
        {email: email} 
      )
      console.log(res);
      if (res.status === 403)
        window.alert('존재하지 않는 이메일이에요.');
      else
        closeFirstModal();

    } catch(err) {
      console.log(err);
    }
  }

  const closeFirstModal = () => {
    closeModal();
    setIsSecondOpen(true);
  }

  if (!isOpen) return null;
  return (
    <S.Container>
        <S.Modal>
          <S.Exit>
            <S.ExitIcon onClick={closeModal} />
          </S.Exit>
          <S.Box>
            <S.Title id="first">비밀번호를 잊으셨나요?</S.Title>
            <p>임시 비밀번호를 메일로 보내드릴게요.</p>
            <input 
              placeholder='가입할 때 사용한 이메일을 입력해주세요.'
              onChange={(e) => {setEmail(e.target.value)}}></input>
            <S.PostBtn id="first" onClick={closeFirstModal}>발송하기</S.PostBtn>
          </S.Box>
        </S.Modal>
    </S.Container>
  )
}
