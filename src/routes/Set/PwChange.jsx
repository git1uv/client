import React from 'react';
import * as Set from "../../components/Settings/Settings.change.style"
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PwChangeModal from '../../components/Modal/PwChangeModal'


const SettingsWrapper = styled.div`
  background-color: #EEECE3;
  height: 89.7vh;
  weight: 100vw;
`;
function PWChange() {
  const navigate = useNavigate();
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPwError, setCurrentPwError] = useState(false);
  const [newPwError, setNewPwError] = useState(false);
  const [confirmPwError, setConfirmPwError] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const [SucceessModal, setSuccessModal] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
  };

  const handlePWSubmit = () => {
    let isValid = true;

    if (currentPw !== 'your_current_password') {
      setErrorMessage('기존 비밀번호가 일치하지 않습니다.');
      setCurrentPwError(true);
      isValid = false;
    } else {
      setCurrentPwError(false);
    }
    
    if (!validatePassword(newPw)) {
      setErrorMessage('새 비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.');
      setNewPwError(true);
      isValid = false;
    } else {
      setNewPwError(false);
    }

    if (newPw !== confirmPw) {
      setErrorMessage('새 비밀번호와 재확인 비밀번호가 일치하지 않습니다.');
      setNewPwError(true);
      setConfirmPwError(true);
      isValid = false;
    } else {
      setNewPwError(false);
      setConfirmPwError(false);
    }

    if (isValid) {
      setAllValid(true);
      setErrorMessage('');
      // 비밀번호 변경 API 호출
      navigate(-1);
    } else {
      setAllValid(false);
    }
  };

  return (
    <SettingsWrapper>
      <Set.Container>
        <Set.TopRow>
          <button onClick={() => navigate(-1)}>
            <FiChevronLeft size="2.5rem" color="#27272A" />
          </button>
          <p>비밀번호 변경</p>
        </Set.TopRow>
        <Set.Explain>
          <p>변경할 비밀번호를 입력하세요</p>
        </Set.Explain>
        <Set.Text>
          <p className='title'>기존 비밀번호</p>
        </Set.Text>
        <Set.PwChange>
          <input
            type="password"
            value={currentPw}
            onChange={(e) => setCurrentPw(e.target.value)}
            className={currentPwError ? 'error' : allValid ? 'success' : ''}
          />
        </Set.PwChange>
        <Set.Text>
          <p className={currentPwError ? 'confirm visible' : 'confirm'}>기존 비밀번호가 일치하지 않습니다.</p>
          <p className='title'>새로운 비밀번호</p>
        </Set.Text>
        <Set.PwChange>
          <input
            type="password"
            placeholder="8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요."
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            className={newPwError ? 'error' : allValid ? 'success' : ''}
          />
        </Set.PwChange>
        <Set.Text>
          <p className={newPwError ? 'confirm visible' : 'confirm'}>비밀번호가 일치하지 않습니다.</p>
          <p className='title'>비밀번호 재확인</p>
        </Set.Text>
        <Set.PwChange>
          <input
            type="password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            className={confirmPwError ? 'error' : allValid ? 'success' : ''}
          />
        </Set.PwChange>
        <Set.Text>
          <p className={confirmPwError ? 'confirm visible' : 'confirm'}>비밀번호가 일치하지 않습니다.</p>
        </Set.Text>
        <Set.Button>
          <button onClick={handlePWSubmit} className='change'>변경하기</button>
        </Set.Button>
      </Set.Container>
    </SettingsWrapper>
  );
}

export default PWChange;