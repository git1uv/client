import React, { useEffect, useState } from 'react'
import * as S from "./Login.style"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.webp'
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import Resizer from 'react-image-file-resizer';
import backgroundImg from "../../assets/backgroundImg.avif"


export default function Common({openModal}) {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  // 카카오 로그인 관련 데이터
  const K_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID
  const K_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_CLIENT_ID}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
  
  // 구글 로그인 관련 데이터
  const G_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const G_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URL
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${G_CLIENT_ID}&redirect_uri=${G_REDIRECT_URI}&response_type=code&scope=email`;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwVisible, setPwVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState('');


  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  }

  const handleGoogleLogin = () => {
    window.location.href = googleURL;
  }

  const togglePasswordVisibility = () => {
    setPwVisible(!pwVisible);
  };

  const resizeImage = (image) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        image,
        800, // 원하는 가로 크기
        600, // 원하는 세로 크기
        "avif", // 변환할 포맷
        100, // 품질
        0, // 회전
        (uri) => {
          resolve(uri);
        },
        "base64" // 반환 형식
      );
    });
  };
  const processImage = async () => {
    // AVIF 파일을 이미지 객체로 생성
    const img = new Image();
    img.src = backgroundImg; // AVIF 파일 경로
  
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Canvas의 데이터를 Blob으로 변환
      canvas.toBlob(async (blob) => {
        if (blob) {
          const resizedImage = await resizeImage(blob); // 리사이즈 실행
          setBackgroundImage(resizedImage); // 상태 업데이트
          // resizedImage를 사용하여 배경으로 설정할 수 있음
        }
      }, 'image/png', 1);
    };
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
      window.alert('가입되지 않은 이메일이거나 비밀번호가 맞지 않습니다.');
      console.log(err);
    }
  }

  const login = useGoogleLogin({
    clientId: G_CLIENT_ID,
    onSuccess: res => {
      console.log(res);
      localStorage.setItem('accessToken', res.access_token);
      navigate('/main')
      // 구글 로그인 성공 시 처리할 로직
    },
    onError: err => {
      console.log(err);
      // 구글 로그인 실패 시 처리할 로직
    },
  });

  useEffect(() => {
    if (email !== '' && pw !== '')
      setIsValid(true);
  }, [email, pw])

  useEffect(() => {
    processImage(); // 컴포넌트가 마운트될 때 이미지 처리
  }, []);

  return (
      <S.Container bgImage={backgroundImage}>
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
            disabled={!isValid}
            onClick={postLogin}>로그인</S.LoginButton>
          <S.FindPw>
            <h6>비밀번호를 잊으셨나요?</h6>
            <button onClick={openModal}>비밀번호 찾기</button>
          </S.FindPw>
          <S.Divider/>
          <div/>
          <S.SocialLogin>
            <button onClick={handleKakaoLogin} />
            {/* <button onClick={login} /> */}
          </S.SocialLogin>
          <S.FindPw>
            <h6>아직 회원이 아니신가요?</h6>
            <button onClick={() => navigate('/signup')}> 회원가입</button>
          </S.FindPw>
        </S.Wrapper>
      </S.Container>
  )
}