import axios from 'axios';
import { getLocalStorage } from './tokenInstance'; // 리프레시 토큰을 불러오는 함수

export const refreshTokenRequest = async () => {
  const refreshToken = getLocalStorage('refreshToken');
  
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/reissue`, {
      refreshToken,
    });

    return response.data.data; // 새로운 토큰들을 반환 (액세스 토큰, 리프레시 토큰)
  } catch (error) {
    console.log('토큰 재발급 요청 실패', error);
    throw error;
  }
};
