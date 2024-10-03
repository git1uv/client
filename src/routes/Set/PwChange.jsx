import React, { useState, useEffect }  from 'react';
import * as S from "../../components/Settings/Settings.style"
import * as Set from "../../components/Settings/Settings.change.style"
import { FiChevronLeft } from "react-icons/fi";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PwChangeModal from '../../components/Modal/PwChangeModal';

const SettingsWrapper = styled.div`
  background-color: #EEECE3;
  height: 89.7vh;
  weight: 100vw;
`;
function PWChange() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [currentPwVisible, setCurrentPwVisible] = useState(false);
  const [newPwVisible, setNewPwVisible] = useState(false);
  const [confirmPwVisible, setConfirmPwVisible] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPwError, setCurrentPwError] = useState(false);
  const [newPwError, setNewPwError] = useState(false);
  const [confirmPwError, setConfirmPwError] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
  };

  const toggleCurrentPwVisibility = () => setCurrentPwVisible(!currentPwVisible);
  const toggleNewPwVisibility = () => setNewPwVisible(!newPwVisible);
  const toggleConfirmPwVisibility = () => setConfirmPwVisible(!confirmPwVisible);

  const handlePWSubmit = async () => {

    if (!accessToken) {
      setErrorMessage('로그인이 필요합니다.');
      return;
    }
    let isValid = true;
    
    if (!validatePassword(newPw)) {
      setErrorMessage('새 비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.');
      setNewPwError(true);
      isValid = false;
    } else {
      setNewPwError(false);
    }

    if (newPw !== confirmPw) {
      setErrorMessage('새 비밀번호와 재확인 비밀번호가 일치하지 않습니다.');
      setConfirmPwError(true);
      isValid = false;
    } else {
      setNewPwError(false);
      setConfirmPwError(false);
    }
    if (!isValid) {
      setAllValid(false);
      return;
    }

    try {
      const response = await axios.patch(`${serverURL}/api/v1/setting/password`, {
        oldPassword: currentPw,
        newPassword: newPw,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken} ${refreshToken}`
        },
      }
    );

      if (response.status === 200) {
        setAllValid(true);
        setErrorMessage('');
        setSuccessModal(true);
        setCurrentPwError(false); 
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403 || error.response.data.message === '기존 비밀번호가 일치하지 않습니다.') {
          setErrorMessage('기존 비밀번호 불일치');
          setCurrentPwError(true);
        } else {
          // console.log('서버 응답 에러 메시지:', error.response); 
          setErrorMessage('비밀번호 변경 실패');
        }
      } else {
        // console.log('서버 응답 에러 메시지:', error.response); 
        setErrorMessage('비밀번호 변경 실패');
      }
    }
  };

  const handleCurrentPwChange = (e) => {
    setCurrentPw(e.target.value);
    setCurrentPwError(false); 
  };
  const handleNewPwChange = (e) => {
    setNewPw(e.target.value);
    setNewPwError(false); 
  };
  const handleConfirmPwChange = (e) => {
    setConfirmPw(e.target.value);
    setConfirmPwError(false); 
  };

  useEffect(() => {
    if (newPw && !validatePassword(newPw)) {
      setNewPwError(true);
      setErrorMessage('새 비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.');
    } else {
      setNewPwError(false);
      setErrorMessage('');
    }
  }, [newPw]);

  return (
    <SettingsWrapper>
      <Set.Container>
        <S.TopRow>
          <button onClick={() => navigate(-1)}>
            <FiChevronLeft size="2.5rem" color="#27272A" />
          </button>
          <p>비밀번호 변경</p>
        </S.TopRow>
        <S.Explain>
          <p>변경할 비밀번호를 입력하세요</p>
        </S.Explain>
        <Set.Text>
          <p className='title'>기존 비밀번호</p>
        </Set.Text>
        <Set.PwChange>
          <input
            type={currentPwVisible ? 'text' : 'password'}
            value={currentPw}
            onChange={handleCurrentPwChange}
            className={currentPwError ? 'error' : allValid ? 'success' : ''}
          />
          <button onClick={toggleCurrentPwVisibility}>
            {currentPwVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </Set.PwChange>
        <Set.Text>
          <p className={currentPwError ? 'confirm visible' : 'confirm'}>비밀번호가 일치하지 않습니다.</p>
          <p className='title'>새로운 비밀번호</p>
        </Set.Text>
        <Set.PwChange>
          <input
            type={newPwVisible ? 'text' : 'password'}
            placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요."
            value={newPw}
            onChange={handleNewPwChange}
            className={newPwError || confirmPwError ? 'error' : allValid ? 'success' : ''}
          />
          <button onClick={toggleNewPwVisibility}>
            {newPwVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </Set.PwChange>
        <Set.Text>
          {newPwError ? (
            <p className='confirm visible'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요.</p>
          ) : confirmPwError ? (
            <p className='confirm visible'>비밀번호가 일치하지 않습니다.</p>
          ) : (
            <p className='confirm' />
          )}
          <p className='title'>비밀번호 재확인</p>
        </Set.Text>
        <Set.PwChange>
          <input
            type={confirmPwVisible ? 'text' : 'password'}
            value={confirmPw}
            onChange={handleConfirmPwChange}
            className={newPwError || confirmPwError ? 'error' : allValid ? 'success' : ''}
          />
          <button onClick={toggleConfirmPwVisibility}>
            {confirmPwVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </Set.PwChange>
        <Set.Text>
        {newPwError ? (
            <p className='confirm visible'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요.</p>
          ) : confirmPwError ? (
            <p className='confirm visible'>비밀번호가 일치하지 않습니다.</p>
          ) : (
            <p className='confirm' />
          )}
        </Set.Text>
        <Set.Button>
          <button onClick={handlePWSubmit} className='change'>변경하기</button>
        </Set.Button>
      </Set.Container>

      {successModal && (
        <PwChangeModal 
          isVisible={successModal} 
          onClose={() => {
            setSuccessModal(false);
            navigate(`/main`); }
          } 
        />
      )}

    </SettingsWrapper>
  );
}

export default PWChange;