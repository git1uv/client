import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as H from './Header.style';
import * as M from './Menu.style';
import { FiMenu } from "react-icons/fi";
import logo from '../../assets/logo.webp';
import x from '../../assets/x.webp';
import trash from '../../assets/headerImg/trash.webp';
import cal from '../../assets/headerImg/calendar.webp';
import pencil from '../../assets/headerImg/pencil.webp';
import chat from '../../assets/headerImg/chat.webp';
import letter from '../../assets/headerImg/letter.webp';
import setting from '../../assets/headerImg/Settings_big.webp';
import logout from '../../assets/headerImg/logout.webp';
import LogoutModal from '../Modal/LogoutModal';
import login from '../../assets/headerImg/login_signup_button.webp';
import axios from 'axios';

function AppHeader({ isMain, setIsLoggedIn }) {
    const serverURL = process.env.REACT_APP_SERVER_URL;
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const outside = useRef();
    const location = useLocation();

    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken');
  
    const handleLogout = () => {
        setLogoutModal(true);
    };

    const confirmLogout = async() => {
    setLogoutModal(false);
    try {
      const res = await axios.delete(`${serverURL}/api/v1/logout`, {
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        }
      });
      if (res.status === 200) {
        localStorage.clear();
        navigate('/login');
      }
    } catch (err) {
    //   console.log(err);
    }
  };

    return (
        <H.Header isMain={isMain}>
            <H.HeaderWrapper>
            {location.pathname !== '/' ? (
                <H.HeaderStart>
                    <H.HeaderHome onClick={() => navigate('/main')}><img src={logo} alt='logo' /></H.HeaderHome>
                </H.HeaderStart>
                ) : (
                <H.HeaderStart>
                    <H.HeaderHome onClick={() => navigate('/login')}><img src={logo} alt='logo' /></H.HeaderHome>
                </H.HeaderStart>
                )}
                {location.pathname !== '/' ? (
                <H.HeaderEnd>
                    <H.MenuButton onClick={() => setModal(true)}><FiMenu size='30'/></H.MenuButton>
                </H.HeaderEnd>
                ) : (
                <H.HeaderEnd>
                    <H.HeaderButton onClick={() => navigate('/login')}><img src={login} alt='login' className='login'/></H.HeaderButton>
                </H.HeaderEnd>
                )}
            </H.HeaderWrapper>
            {modal && (
                <M.ModalBg ref={outside} onClick={(e) => { if(e.target === outside.current) setModal(false); }}>
                    <M.Modal>
                        <M.ModalCloseButton onClick={() => setModal(false)}><img src={x} alt='x' /></M.ModalCloseButton>
                        <M.ButtonContainer>
                            <M.ModalButton onClick={() => { navigate('/chatbot/choice'); setModal(false); }}><img src={chat} alt='chatbot choice' />챗봇</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/trash'); setModal(false); }}><img src={trash} alt='trash' />감정쓰레기통</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/calendar'); setModal(false); }}><img src={cal} alt='calendar' />달력</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/letter'); setModal(false); }}><img src={letter} alt='letter' />편지</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/pencilholder'); setModal(false); }}><img src={pencil} alt='pencil' />연필꽂이</M.ModalButton>
                            <M.ModalDivider />
                            <M.ModalButton onClick={() => { navigate('/settings'); setModal(false); }}><img src={setting} alt='setting' />설정</M.ModalButton>
                            <M.LogoutButton onClick={handleLogout}><img src={logout} alt='logout' />로그아웃</M.LogoutButton>
                        </M.ButtonContainer>
                    </M.Modal>
                </M.ModalBg>
            )}
            <LogoutModal
                isVisible={logoutModal}
                onClose={() => setLogoutModal(false)}
                onConfirm={confirmLogout}
            />
        </H.Header>
    );
}

export default AppHeader;
