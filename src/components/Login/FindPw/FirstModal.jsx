import React, { useState } from 'react'
import * as S from "./Modal.style"
import axios from 'axios';

export default function FirstModal({isOpen, closeModal, setIsSecondOpen}) {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [email, setEmail] = useState('');
  
  const postTempPw = async() => {
    try { 
      const res = await axios.patch(`${serverURL}/api/v1/login/temp-pw`, {email: email})
      // console.log(res.data);
      if (res.status === 400)
        window.alert('존재하지 않는 이메일이에요.');
      else
        closeFirstModal();
    } catch(err) {
      // console.log(err);
      if (err.response.status === 400)
        window.alert('존재하지 않는 이메일이에요.');
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
            <S.PostBtn id="first" onClick={postTempPw}>발송하기</S.PostBtn>
          </S.Box>
        </S.Modal>
    </S.Container>
  )
}
