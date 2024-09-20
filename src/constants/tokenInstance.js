import axios from 'axios';
import { refreshTokenRequest } from './auth'; // 리프레시 토큰으로 새로운 액세스 토큰을 발급받는 함수

// 로컬 스토리지에 토큰 저장
export const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  // 로컬 스토리지에서 토큰 불러오기
  export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  
  // 로컬 스토리지에서 토큰 삭제
  export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  
// 기본 axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, // 서버 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (헤더에 액세스 토큰 추가)
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getLocalStorage('accessToken'); // 저장된 액세스 토큰을 가져옴
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // 헤더에 토큰 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (401 에러 처리)
axiosInstance.interceptors.response.use(
  (response) => response, // 정상 응답일 때는 그대로 반환
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 
      
      try {
        // 리프레시 토큰으로 새로운 액세스 토큰을 요청
        const newTokens = await refreshTokenRequest();
        const newAccessToken = newTokens.accessToken;

        saveLocalStorage('accessToken', newAccessToken);
        saveLocalStorage('refreshToken', newTokens.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (tokenError) {
        console.log('토큰 재발급 실패', tokenError);
        window.alert('토큰이 만료되어, 시작 화면으로 이동합니다.')
        window.location.href = '/'; // 온보딩 페이지로 리다이렉트
        return Promise.reject(tokenError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
