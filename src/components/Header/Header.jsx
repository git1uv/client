import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as H from './Header.style';
import * as M from './Menu.style';
import { FiMenu, FiX } from "react-icons/fi";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import symbol from '../../assets/headerImg/symbol.png'
import logotype from '../../assets/headerImg/logotype.png'
import setting from '../../assets/headerImg/Settings_big.png'
import login_signup_button from '../../assets/headerImg/login_signup_button.png';
import trash from '../../assets/headerImg/감쓰.png'
import cal from '../../assets/headerImg/달력.png'
import logout from '../../assets/headerImg/로그아웃.png'
import pencil from '../../assets/headerImg/연필꽂이.png'
import chat from '../../assets/headerImg/챗봇.png'
import letter from '../../assets/headerImg/편지.png'
import LogoutModal from '../Modal/LogoutModal';

function HeaderBar({ isLoggedIn, setIsLoggedIn, showHeader = true }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [modal, setModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const outside = useRef();

    const handleLogout = () => {
        setLogoutModal(true);
    };

    const confirmLogout = () => {
        setLogoutModal(false);
        setIsLoggedIn(false);
        // 로그아웃 로직
        navigate('/main'); 
        
    };
    /** {!isLoggedIn ? (
        <H.HeaderEnd>
            <H.HeaderButton onClick={() => navigate('/login')}><img src={login_signup_button} alt='login_signup_button'></img></H.HeaderButton>
        </H.HeaderEnd>
    ) : (
        <></>)} */
    if (!showHeader) return null;
    
    return (
        <H.Header>
            <H.HeaderWrapper>
                <H.HeaderStart>
                    <H.HeaderHome onClick={() => navigate('/main')}><img src={symbol} alt='symbol'></img></H.HeaderHome>
                    {isMobile ? (
                        <H.HeaderTitleMobile onClick={() => navigate('/main')}><img src={logotype} alt='logotype'></img></H.HeaderTitleMobile>
                    ) : (
                        <H.HeaderTitle onClick={() => navigate('/main')}><img src={logotype} alt='logotype'></img></H.HeaderTitle>
                    )}
                </H.HeaderStart>
                
                        {isMobile ? (
                            <nav>
                                <H.MenuButton onClick={() => setModal(true)}><FiMenu /></H.MenuButton>
                            </nav>
                        ) : (
                            <>
                            <H.HeaderCenter>
                                <H.HeaderForm onSubmit={(e) => e.preventDefault()}>
                                    <H.HeaderButton onClick={() => navigate('/chatbot')} active={location.pathname === '/chatbot'}>챗봇</H.HeaderButton>
                                    <H.HeaderButton onClick={() => navigate('/calendar')} active={location.pathname === '/calendar'}>달력</H.HeaderButton>
                                    <H.HeaderButton onClick={() => navigate('/trash')} active={location.pathname === '/trash'}>감정쓰레기통</H.HeaderButton>
                                    <H.HeaderButton onClick={() => navigate('/letter')} active={location.pathname === '/letter'}>편지</H.HeaderButton>
                                    <H.HeaderButton onClick={() => navigate('/pencilholder')} active={location.pathname === '/pencilholder'}>연필꽂이</H.HeaderButton>
                                </H.HeaderForm>
                            </H.HeaderCenter>
                            <H.HeaderEnd>
                                <H.HeaderButton onClick={() => navigate('/settings')}><img src={setting} alt='setting'></img></H.HeaderButton>
                            </H.HeaderEnd>
                            </>
                        )}
                    
            </H.HeaderWrapper>
            {modal && (
                <M.ModalBg ref={outside} onClick={(e) => { if(e.target === outside.current) setModal(false); }}>
                    <M.Modal>
                        <M.ModalCloseButton onClick={() => setModal(false)}><FiX /></M.ModalCloseButton>
                        <M.ButtonContainer>
                            <M.ModalButton onClick={() => { navigate('/chatbot'); setModal(false); }}><img src={chat} alt='chatbot'></img>챗봇</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/trash'); setModal(false); }}><img src={trash} alt='trash'></img>감정쓰레기통</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/calendar'); setModal(false); }}><img src={cal} alt='calendar'></img>달력</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/letter'); setModal(false); }}><img src={letter} alt='letter'></img>편지</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/pencilholder'); setModal(false); }}><img src={pencil} alt='pencil'></img>연필꽂이</M.ModalButton>
                            <M.ModalDivider />
                            <M.ModalButton onClick={() => { navigate('/settings'); setModal(false); }}><img src={setting} alt='setting'></img>설정</M.ModalButton>
                            <M.LogoutButton onClick={handleLogout}><img src={logout} alt='logout'></img>로그아웃</M.LogoutButton>
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

export default HeaderBar;
