import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Redirect() {
  const code = new URL(window.location.href).searchParams.get("code");
  let navigate = useNavigate();

  function saveLocalStorage(token) {
    localStorage.setItem('token', token);
  }

  const fetchKakaoData = async () => {
    try {
      const res = await axios.post(`/api/v1/login/kakao?authCode=${code}`, {});
      console.log(res.data);
      const receivedToken = res.data.token;
      saveLocalStorage(receivedToken);
      // if (res.data.is_member)
      //   navigate("/main");
      // else 
      //   navigate("/signup/nickname");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKakaoData();
  }, []);

  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h2> 진행 중입니다...</h2>
    </div>
  );
}
