import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function GoogleRedirect() {
  const G_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

  let navigate = useNavigate();

	function saveLocalStorage(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } 

  return (
    <>
      <GoogleOAuthProvider clientId={G_CLIENT_ID}>
        <GoogleLogin
           onSuccess={(res) => {
            console.log(res);                        
          }}
          onFailure={(err) => {
              console.log(err);
          }}       
        />
      </GoogleOAuthProvider>
    </>
  )
}
