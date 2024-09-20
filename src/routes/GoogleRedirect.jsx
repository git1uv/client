import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function GoogleRedirect() {
const serverURL = process.env.REACT_APP_SERVER_URL;

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  let navigate = useNavigate();

	function saveLocalStorage(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } 

	const fetchGoogleData = async() => {
		try {
			const res = await axios.post(`${serverURL}/api/v1/login/google?code=${code}`, {});
			console.log(res.data);

			let data = res.data.data;
      let accessToken = data.token.accessToken; 
      let refreshToken = data.token.refreshToken;
      saveLocalStorage(accessToken, refreshToken);
      if (data.is_member)
        navigate("/main");
      else 
        navigate("/signup/nickname");
		} catch(err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchGoogleData();
	}, [])
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
  )
}
