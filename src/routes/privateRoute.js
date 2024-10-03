import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLogined = localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');

  if (!isLogined) {
    window.alert('이 페이지는 로그인해야만 이용하실 수 있어요. 로그인 후 다시 시도해 주세요 😊');
  }

  return (
    isLogined ? <Outlet /> : <Navigate to='/login'/>
  )
}