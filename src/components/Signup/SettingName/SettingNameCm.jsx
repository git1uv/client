import React, { useState } from 'react'
import * as S from "../Signup/Signup.style"
import * as T from "../../Login/Login.style"
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import notCheck from '../../../assets/notCheck.png'
import check from '../../../assets/Check.png'

export default function SettingNameCm() {
  const navigate = useNavigate();
  
  const regexName = /^[a-zA-Z가-힣]{1,10}$/;
  const [nickname, setNickname] = useState('');
  const [errors, setErrors] = useState({ nickname: '' });

  const validateNickname = (nickname) => regexName.test(nickname);

  const handleChange = (e) => {
    const { value } = e.target;
    setNickname(value);
    if (value === '') {
      setErrors(prev => ({ ...prev, nickname: '' }));
    } else if (validateNickname(value)) {
      setErrors(prev => ({ ...prev, nickname: '' }));
    } else {
      setErrors(prev => ({ ...prev, nickname: '닉네임은 1~10자의 한글 또는 영문이어야 합니다.' }));
    }
  };

  const handleSubmit = () => {
    if (!validateNickname(nickname)) {
      setErrors({ nickname: '닉네임은 1~10자의 한글 또는 영문이어야 합니다.' });
      return;
    }
    navigate('/login');
  };

  return (
    <S.Container>
      <S.Title>
        <img src={logo} alt='로고' />
        <section />
        <p>회원가입</p>
      </S.Title>
      <S.Wrapper>
        <S.Box>
          <S.Input>
            <S.Nickname>
              <h6>닉네임</h6> 
              <h6 style={{color: 'grey'}}> 챗봇이 당신을 부르게 될 1~10자의 한글/영문을 사용해 주세요.</h6>
            </S.Nickname>
            <S.PwInputBox>
              <input
                name="nickname"
                placeholder="닉네임을 입력해주세요"
                value={nickname}
                onChange={handleChange}
              />
              {errors.nickname === '' && nickname ? (
                <img src={check} alt='check' />
              ) : (
                errors.nickname !== '' ? (
                  <img src={notCheck} alt='notCheck' />
                ) : (
                  <S.CheckNull />
                )
              )}
            </S.PwInputBox>
            {errors.nickname && <p>{errors.nickname}</p>}
          </S.Input>
        </S.Box>
        <T.LoginButton onClick={handleSubmit}>가입하기</T.LoginButton>
        <S.TermsBox>
          <p>회원가입 하시면</p>
          <button onClick={() => navigate('/terms')}>이용약관</button>
          <p>에 동의하는 것으로 간주됩니다.</p>
        </S.TermsBox>
        <S.Divider/>
        <S.TermsBox>
          <p>회원이신가요?</p>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </S.TermsBox>
      </S.Wrapper>
    </S.Container>
  )
}
