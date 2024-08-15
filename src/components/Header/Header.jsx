import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as H from './Header.style';
import * as M from './Menu.style';
import { FiMenu, FiX, FiSquare } from "react-icons/fi";
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

function HeaderBar({ isLoggedIn, setIsLoggedIn }) {
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
        // 로그아웃 로직
        navigate('/main'); 
        
    };
    /** {!isLoggedIn ? (
        <H.HeaderEnd>
            <H.HeaderButton onClick={() => navigate('/login')}><img src={login_signup_button} alt='login_signup_button'></img></H.HeaderButton>
        </H.HeaderEnd>
    ) : (
        <></>)} */
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
                                    <H.HeaderButton onClick={() => navigate('/trash')} active={location.pathname === '/trash'}>감정쓰레기통</H.HeaderButton>
                                    <H.HeaderButton onClick={() => navigate('/calendar')} active={location.pathname === '/calendar'}>달력</H.HeaderButton>
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
                            <M.ModalButton onClick={() => { navigate('/chatbot'); setModal(false); }}><FiSquare />챗봇</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/trash'); setModal(false); }}><FiSquare />감정쓰레기통</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/calendar'); setModal(false); }}><FiSquare />달력</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/letter'); setModal(false); }}><FiSquare />편지</M.ModalButton>
                            <M.ModalButton onClick={() => { navigate('/pencilholder'); setModal(false); }}><FiSquare />연필꽂이</M.ModalButton>
                            <M.ModalDivider />
                            <M.ModalButton onClick={() => { navigate('/settings'); setModal(false); }}><FiSquare />설정</M.ModalButton>
                            <M.ModalButton onClick={handleLogout}><FiSquare />로그아웃</M.ModalButton>
                        </M.ButtonContainer>
                    </M.Modal>
                </M.ModalBg>
            )}
            {logoutModal && (
                <M.LogoutModalBg ref={outside} onClick={(e) => { if(e.target === outside.current) setLogoutModal(false); }}>
                <M.LogoutModal>
                    <M.LogoutModalTitle>로그아웃</M.LogoutModalTitle>
                    <p>로그아웃 하시겠습니까?</p>
                    <M.ModalActions>
                        <M.CancelButton onClick={() => setLogoutModal(false)}>아니오</M.CancelButton>
                        <M.LogoutButton onClick={confirmLogout}>로그아웃</M.LogoutButton>
                    </M.ModalActions>
                </M.LogoutModal>
            </M.LogoutModalBg>

            )}

      </H.Header>
    );
}

export default HeaderBar;
