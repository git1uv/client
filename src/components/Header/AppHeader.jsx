import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as H from './Header.style';
import * as M from './Menu.style';
import { FiMenu } from "react-icons/fi";
import logo from '../../assets/logo.webp';
import x from '../../assets/x.webp';
import trash from '../../assets/headerImg/감쓰.webp';
import cal from '../../assets/headerImg/달력.webp';
import pencil from '../../assets/headerImg/연필꽂이.webp';
import chat from '../../assets/headerImg/챗봇.webp';
import letter from '../../assets/headerImg/편지.webp';
import setting from '../../assets/headerImg/Settings_big.webp';
import logout from '../../assets/headerImg/로그아웃.webp';
import LogoutModal from '../Modal/LogoutModal';

function AppHeader({ isMain, isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const outside = useRef();

    const handleLogout = () => {
        setLogoutModal(true);
    };

    const confirmLogout = () => {
        setLogoutModal(false);
        setIsLoggedIn(false);
        navigate('/main');
    };

    return (
        <H.Header isMain={isMain}>
            <H.HeaderWrapper>
                <H.HeaderStart>
                    <H.HeaderHome onClick={() => navigate('/main')}><img src={logo} alt='logo' /></H.HeaderHome>
                </H.HeaderStart>
                <H.HeaderEnd>
                <H.MenuButton onClick={() => setModal(true)}><FiMenu size='30'/></H.MenuButton>
                </H.HeaderEnd>
            </H.HeaderWrapper>
            {modal && (
                <M.ModalBg ref={outside} onClick={(e) => { if(e.target === outside.current) setModal(false); }}>
                    <M.Modal>
                        <M.ModalCloseButton onClick={() => setModal(false)}><img src={x} alt='x' /></M.ModalCloseButton>
                        <M.ButtonContainer>
                            <M.ModalButton onClick={() => { navigate('/test'); setModal(false); }}><img src={chat} alt='chatbot' />챗봇</M.ModalButton>
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
