import React from 'react';
import * as Set from "../../components/Settings/Settings.style"
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoutModal from '../../components/Modal/LogoutModal';
import DeleteIDModal from '../../components/Modal/DeleteIDModal';

const fetchUserNickname = async () => {
  //api 가져오기
  return '000';
};
const SettingsWrapper = styled.div`
  background-color: #EEECE3;
  height: 89.7vh;
  weight: 100vw;
`;

function Settings() {
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);

  const confirmLogout = () => {
    setLogoutModal(false);
    // 로그아웃 로직 추가
    navigate('/login'); 
  };
  const confirmDeleteAccount = () => {
    setDeleteAccountModal(false);
    // 탈퇴 로직 추가
    navigate('/');
  };

  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const getNickname = async () => {
      const fetchedNickname = await fetchUserNickname();
      setNickname(fetchedNickname);
    };
    getNickname();
  }, []);
  return (
    <SettingsWrapper>
      <Set.Container>
        <Set.TopRow isSettings>
          <button onClick={() => navigate(-1)}>
          <FiChevronLeft size="2.5rem" color="#27272A" /></button>
          <p>설정</p>
        </Set.TopRow>
        <Set.Explain>
          <p>{nickname}님</p>
        </Set.Explain>
        <Set.Title>
          <p>프로필</p>
        </Set.Title>
        <Set.NicknameChange>
          <button onClick={() => navigate('/namechange')}>닉네임 변경</button>
          <button onClick={() => navigate('/namechange')} className="right-icon"><FiChevronRight /></button>
        </Set.NicknameChange>
        <Set.PwChange>
            <button onClick={() => navigate('/pwchange')}>비밀번호 변경</button>
            <button onClick={() => navigate('/pwchange')} className="right-icon"><FiChevronRight /></button>
        </Set.PwChange>
        <Set.Divider/>
        <div/>
        <Set.Title>
          <p>고객센터</p>
        </Set.Title>
        <Set.FAQ>
            <button onClick={() => navigate('/faq')}>FAQ</button>
            <button onClick={() => navigate('/faq')} className="right-icon"><FiChevronRight /></button>
        </Set.FAQ>
        <Set.Ask>
            <button onClick={() => navigate('/ask')}>문의하기</button>
            <button onClick={() => navigate('/ask')} className="right-icon"><FiArrowUpRight /></button>
        </Set.Ask>
        <Set.Information>
            <button onClick={() => navigate('/simterinformation')}>심터 정보</button>
            <button onClick={() => navigate('/simterinformation')} className="right-icon"><FiChevronRight /></button>
        </Set.Information>
        <Set.Divider/>
        <div/>
        <Set.LogOut>
            <button onClick={() => setLogoutModal(true)}> 로그아웃 </button>
            <button onClick={() => setLogoutModal(true)} className="right-icon"><FiChevronRight /></button>
        </Set.LogOut>
        <LogoutModal
        isVisible={logoutModal}
        onClose={() => setLogoutModal(false)}
        onConfirm={confirmLogout}
      />
        <Set.DeleteID>
            <button onClick={() => setDeleteAccountModal(true)}> 서비스 탈퇴 </button>
            <button onClick={() => setDeleteAccountModal(true)} className="right-icon"><FiChevronRight /></button>
        </Set.DeleteID>
        <DeleteIDModal
        isVisible={deleteAccountModal}
        onClose={() => setDeleteAccountModal(false)}
        onConfirm={confirmDeleteAccount}
      />
      </Set.Container>
      <Set.Footer>
          <Set.DeveloperInformation>
            <button onClick={() => navigate('/developer')}> 
              깃러브
              <br />
              개발자 정보
            </button>
          </Set.DeveloperInformation>
        </Set.Footer>
    </SettingsWrapper>
    
  );
}

export default Settings;
