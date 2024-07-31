import React from 'react';
import * as Set from "../../components/Settings/Settings.change.style"
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const SettingsWrapper = styled.div`
  background-color: #F4F2EB;
  height: 100vh;
  weight: 100vw;
`;
function NameChange() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameSubmit = () => {
    // 닉네임 변경 API 호출
    navigate(-1);
  };
  return (
    <SettingsWrapper>
      <Set.Container>
        <Set.TopRow>
          <button onClick={() => navigate(-1)}>
          <FiChevronLeft size="2.5rem" color="#27272A" /></button>
          <p>닉네임 변경</p>
        </Set.TopRow>
        <Set.Explain>
          <p>변경할 닉네임을 입력하세요</p>
        </Set.Explain>
        <Set.NicknameChange>
            <input
            type="text"
            placeholder="1~10자의 한글/영문을 사용해주세요."
            value={nickname}
            onChange={handleNicknameChange}
          />
        </Set.NicknameChange>
        <Set.Button>
          <button onClick={handleNicknameSubmit} className='change'>변경하기</button>
        </Set.Button>
      </Set.Container>
    </SettingsWrapper>
    
  );
}

export default NameChange;