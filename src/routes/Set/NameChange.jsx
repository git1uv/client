import React from 'react';
import * as S from "../../components/Settings/Settings.style"
import * as Set from "../../components/Settings/Settings.change.style"
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const SettingsWrapper = styled.div`
  background-color: #EEECE3;
  height: 89.7vh;
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