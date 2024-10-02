import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const serverURL = process.env.REACT_APP_SERVER_URL;
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: serverURL,
  headers: {
    Authorization: `Bearer ${accessToken} ${refreshToken}`,
  },
});

// 토큰 재발급 함수
const getNewToken = async() => {
  
  console.log('토큰 재발급 중...');
  console.log(`Bearer ${accessToken} ${refreshToken}`)
  try {
    const res = await apiClient.get(`/api/v1/reissue`);
    const newAccessToken = res.data.data.accessToken;
    const newRefreshToken = res.data.data.refreshToken;

    // 새로 받은 토큰을 로컬 스토리지에 저장
    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };

  } catch (error) {
    console.log('Refresh token failed', error);
    // 리프레시 토큰이 만료되었거나 실패했을 경우, 로그인 페이지로 리다이렉트
    // window.location.href = '/login';
    return null;
  }
};

// 요청 인터셉터: 매 요청마다 토큰을 자동으로 넣어줌
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      config.headers.Authorization = `Bearer ${accessToken} ${refreshToken}`;
    } else {
      console.log("토큰이 존재하지 않음");
    }
    return config;
  }, 
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 에러 처리
apiClient.interceptors.response.use(
  (response) => response, // 응답이 성공일 경우 그대로 리턴
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response.data.data.includes("JWT expired")&& !originalRequest._retry) {
      originalRequest._retry = true;

      const newTokens = await getNewToken();
      if (newTokens) {
        const { accessToken, refreshToken } = newTokens;  // 두 개의 토큰 구조 분해 할당
        
        // 새로운 토큰을 Authorization 헤더에 추가
        originalRequest.headers.Authorization = `Bearer ${accessToken} ${refreshToken}`;
        
        // 원래 요청을 새로운 토큰을 사용하여 다시 요청
        return apiClient(originalRequest);
      } else {
        console.log('토큰 재발급 실패: 로그인 페이지로 리다이렉트'); // 재발급 실패 로그 추가
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
