import React, { useEffect, useState } from 'react'
import * as S from "./Login.style"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import axios from 'axios';

export default function Common({openModal}) {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const K_REST_API_KEY = process.env.REACT_APP_REST_API_KEY
  const K_REDIRECT_URI = "http://localhost:3000/oauth";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwVisible, setPwVisible] = useState(false);

  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  }

  const togglePasswordVisibility = () => {
    setPwVisible(!pwVisible);
  };


  function saveLocalStorage(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } 

  /* 로그인 API : 연결하면 주석 풀기 */
  const postLogin = async() => {
    try {
      const res = await axios.post(`${serverURL}/api/v1/login/general`, {
        email: email,
        password: pw,
      })
      let data = res.data.data;
      let accessToken = data.token.accessToken; 
      let refreshToken = data.token.refreshToken;
      saveLocalStorage(accessToken, refreshToken);
      navigate('/main')
    } catch(err) {
      console.log(err);
    }
  }


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
            <input 
              placeholder='abc123@email.com'
              onChange={(e) => {setEmail(e.target.value)}}
            ></input>
          </S.Input>
          <S.Input>
            <p>비밀번호</p>
            <input 
              type={pwVisible ? 'text' : 'password'}
              placeholder='비밀번호'
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  postLogin();
                }
              }}
            ></input>
            <button onClick={togglePasswordVisibility}>
              {pwVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </S.Input>
        </S.InputBox>
        <S.Null />
        <S.LoginButton 
          onClick={postLogin}>로그인</S.LoginButton>
        <S.FindPw>
          <h6>비밀번호를 잊으셨나요?</h6>
          <button onClick={openModal}>비밀번호 찾기</button>
        </S.FindPw>
        <S.Divider/>
        <div/>
        <S.SocialLogin>
          <button onClick={handleKakaoLogin}></button>
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