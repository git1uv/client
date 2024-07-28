import React, { useState } from 'react'
import * as S from "./Login.style"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Common({openModal}) {
  const [pwVisible, setPwVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPwVisible(!pwVisible);
  };

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <img src={logo} alt='logo' />
          <section/>
          <h1>맞춤형 챗봇 감정 케어 서비스</h1>
          <h2>끙끙 앓던 자신의 고민을 부담없이 털어놔요</h2>
        </S.Title>
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
        <S.Null />
        <S.LoginButton onClick={() => navigate('/main(임시라우팅)')}>로그인</S.LoginButton>
        <S.FindPw>
          <h6>비밀번호를 잊으셨나요?</h6>
          <button onClick={openModal}> 비밀번호 찾기</button>
        </S.FindPw>
        <S.Divider/>
        <div/>
        <S.SocialLogin>
          <button></button>
          <button></button>
        </S.SocialLogin>
        <S.FindPw>
          <h6>아직 회원이 아니신가요?</h6>
          <button onClick={() => navigate('/signup')}> 회원가입</button>
        </S.FindPw>
      </S.Wrapper>
    </S.Container>
  )
}