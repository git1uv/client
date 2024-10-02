import React, { useEffect, useState } from 'react'
import * as S from "../Signup/Signup.style"
import * as T from "../../Login/Login.style"
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.webp'
import notCheck from '../../../assets/notCheck.webp'
import check from '../../../assets/Check.webp'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function SettingNameCm() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const regexName = /^[a-zA-Z가-힣]{1,10}$/;
  const [nickname, setNickname] = useState('');
  const [errors, setErrors] = useState({ nickname: '' });
  
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const user = useSelector((state) => state.user);
  const validateNickname = (nickname) => regexName.test(nickname);

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const handleChange = (e) => {
    const { value } = e.target;
    setNickname(value);
    if (value === '') {
      setErrors(prev => ({ ...prev, nickname: '' }));
    } else if (validateNickname(value)) {
      setErrors(prev => ({ ...prev, nickname: '' }));
    } else {
      setErrors(prev => ({ ...prev, nickname: '1~10자의 한글/영문을 사용해주세요.' }));
    }
  };

  const handleSubmit = async() => {
    if (!validateNickname(nickname)) {
      setErrors({ nickname: '닉네임은 1~10자의 한글 또는 영문이어야 합니다.' });
      return;
    }
    /* 회원가입 API : 연결하면 주석 풀기 */
    if (user.loginType === "general")
      await postRegister();
    else
      await postSocialLogin();
  };


  /* 일반 회원가입 API : 연결하면 주석 풀기 */
  const postRegister = async() => {
    console.log('email : ', user.email);
    console.log('password : ', user.password);
    console.log('nickname : ', nickname);
    console.log('loginType : ', user.loginType);
    try {
      const res = await axios.post(`${serverURL}/api/v1/register/general`, {
        email: user.email,
        password: user.password,
        nickname: nickname,
        loginType: user.loginType
      })
      console.log(res.data);
      window.alert('심터에 오신 것을 환영합니다! 로그인창으로 이동합니다 :)');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }
  /* 소셜 로그인 회원가입 API : 연결하면 주석 풀기 */
  const postSocialLogin = async() => {
    try {
      const res = await axios.post(`${serverURL}/api/v1/register/social`, {
        nickname: nickname,
        email: user.email,
        loginType: user.loginType,
        token: {
          grantType: 'Bearer',
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      })
      console.log(res.data);
      // window.alert('심ㅌ터에 오신 것을 환영합니다! 로그인창으로 이동합니다 :)');
      navigate('/main');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <T.Container>
      <T.Wrapper>
        <T.Title>
          <img src={logo} alt='로고' />
          <section />
          {user.loginType === 'general' && <h1>회원가입</h1>}
        </T.Title>
        <S.Box>
          <S.Input>
              <h6>닉네임</h6> 
            <S.PwInputBox>
              <input
                name="nickname"
                placeholder="챗봇이 당신을 어떤 이름으로 불러드리면 좋을까요?"
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
        <T.Null />
        <T.LoginButton onClick={handleSubmit}>가입하기</T.LoginButton>
        <S.TermsBox>
          <h6>회원가입 하시면</h6>
          <button onClick={() => navigate('/terms')}>이용약관</button>
          <h6>에 동의하는 것으로 간주됩니다.</h6>
        </S.TermsBox>
        <S.Divider/>
        <S.TermsBox>
          <h6>회원이신가요?</h6>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </S.TermsBox>
      </T.Wrapper>
    </T.Container>
  )
}
