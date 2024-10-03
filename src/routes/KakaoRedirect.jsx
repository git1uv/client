import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccount } from "../redux/user";
import loading from '../assets/chatbot/test/loading.webp'
import * as S from '../components/Test/TestContent/TestContent.style'

export default function KakaoRedirect() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function saveLocalStorage(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } 

  const fetchKakaoData = async() => {
    // setError(null); // 에러 초기화
    try {
      const res = await axios.post(`${serverURL}/api/v1/login/kakao?code=${code}`, {});
      console.log(res.data);

      let data = res.data.data; 
      let accessToken = data.token.accessToken; 
      accessToken = accessToken.replace(/"/g, '');

      let refreshToken = data.token.refreshToken;
      refreshToken = refreshToken.replace(/"/g, '');

      saveLocalStorage(accessToken, refreshToken);

      dispatch(setAccount({
        email: data.email,
        loginType: data.loginType
      }))

      if (data.member)
        navigate("/main");
      else 
        navigate("/signup/nickname");
    } catch (error) {
      // setError(error.response); // 에러 상태 저장
      console.log(error);

    }
  };

  useEffect(() => {
    fetchKakaoData();
  }, []);

  return (
    <S.Loading>
      <img src={loading} alt='로딩창'/>
    </S.Loading>
  );
}
