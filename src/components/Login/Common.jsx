import React, { useState } from 'react'
import * as S from "./Login.style"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Common() {
  const [pwVisible, setPwVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPwVisible(!pwVisible);
  };

  const navigate = useNavigate();

  return (
    <S.RightWrapper>
      <S.Title>
        <img src={logo} alt='logo' />
        <div/>
        <h5>맞춤형 챗봇 감정 케어 서비스</h5>
        <p>끙끙 앓던 자신의 고민을 부담없이 털어놔요</p>
      </S.Title>
      <S.Right>
        <S.InputBox>
          <S.Input>
            <p>이메일</p>
            <input placeholder='abc123@email.com'></input>
          </S.Input>
          <S.Input>
            <p>비밀번호</p>
            <input type={pwVisible ? 'text' : 'password'}
              placeholder='비밀번호'>
            </input>
            <button onClick={togglePasswordVisibility}>
              {pwVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </S.Input>
        </S.InputBox>
        <S.FindPw>
          <p>비밀번호를 잊으셨나요?</p>
          <button onClick={() => navigate('/findpw')}> 비밀번호 찾기</button>
        </S.FindPw>
        <S.LoginButton onClick={() => navigate('/main(임시라우팅)')}>로그인</S.LoginButton>
        <S.Divider/>
        <div/>
        <S.SocialLogin>
          <button></button>
          <button></button>
        </S.SocialLogin>
        <S.FindPw>
          <p>아직 회원이 아니신가요?</p>
          <button onClick={() => navigate('/signup')}> 회원가입</button>
        </S.FindPw>
      </S.Right>
    </S.RightWrapper>
  )
}