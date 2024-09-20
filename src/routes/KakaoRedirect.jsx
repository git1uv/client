import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirect() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  let navigate = useNavigate();

  function saveLocalStorage(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } 

  const fetchKakaoData = async () => {
    try {
      const res = await axios.post(`${serverURL}/api/v1/login/kakao?code=${code}`, {});
      console.log(res.data);

      let data = res.data.data;
      let accessToken = data.token.accessToken; 
      let refreshToken = data.token.refreshToken;
      saveLocalStorage(accessToken, refreshToken);
      if (data.is_member)
        navigate("/main");
      else 
        navigate("/signup/nickname");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchKakaoData();
  }, []);

  return (
    <div>
      <h2> 진행 중입니다...</h2>
      <h2> 진행 중입니다...</h2>
      <h2> 진행 중입니다...</h2>
      <h2> 진행 중입니다...</h2>
      <h2> 진행 중입니다...</h2>
      <h2> 진행 중입니다...</h2>
      <h2> 진행 중입니다...</h2>
    </div>
  );
}
