import React from 'react';
import * as S from "../../components/Settings/Settings.style"
import * as Set from "../../components/Settings/Settings.change.style"
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NameChangeModal from '../../components/Modal/NameChangeModal';

const SettingsWrapper = styled.div`
  background-color: #EEECE3;
  height: 89.7vh;
  weight: 100vw;
`;
function NameChange() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

  const isValidNickname = (nickname) => {
    const regex = /^[가-힣a-zA-Z]{1,10}$/;
    return regex.test(nickname);
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);

    if (isValidNickname(value)) {
      setErrorMessage('');
    } else {
      setErrorMessage('1~10자의 한글/영문을 사용해주세요.');
    }
  };

  const handleNicknameSubmit = async () => {

    if (!accessToken) {
      setErrorMessage('로그인이 필요합니다.');
      return;
    }
    try {
      const response = await axios.patch(
        `${serverURL}/api/v1/setting/nickname`,
        { nickname },
        {
          headers: {
            'Authorization': `Bearer ${accessToken} ${refreshToken}`
          },
        }
      );

      if (response.status === 200) {
        console.log('닉네임 변경 성공:', response.data);
        setIsModalVisible(true);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log('서버 응답 에러 메시지:', error.response); 
        setErrorMessage('닉네임 변경에 실패했습니다. 다시 시도해 주세요.');
      } else {
        console.error('닉네임 변경 실패:', error.message); 
        setErrorMessage('닉네임 변경에 실패했습니다. 다시 시도해 주세요.');
      }
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigate(`/main`); 
  };


  return (
    <SettingsWrapper>
      <Set.Container>
        <S.TopRow>
          <button onClick={() => navigate(-1)}>
          <FiChevronLeft size="2.5rem" color="#27272A" /></button>
          <p>닉네임 변경</p>
        </S.TopRow>
        <S.Explain>
          <p>변경할 닉네임을 입력하세요</p>
        </S.Explain>
        <Set.NicknameChange>
            <input
            type="text"
            maxlength="10"
            placeholder="1~10자의 한글/영문을 사용해주세요."
            value={nickname}
            onChange={handleNicknameChange}
            className= {isValidNickname(nickname) ? 'success' : 'error'}
          />
        </Set.NicknameChange>
        <Set.Button>
          <button onClick={handleNicknameSubmit} className='change'>변경하기</button>
        </Set.Button>
      </Set.Container>
      <NameChangeModal isVisible={isModalVisible} onClose={closeModal} />
    </SettingsWrapper>
    
  );
}

export default NameChange;