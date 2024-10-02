import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as H from './Header.style';
import setting from '../../assets/headerImg/Settings_big.webp';
import logo from '../../assets/logo.webp';
import login from '../../assets/headerImg/login_signup_button.webp';

function WebHeader({isMain}) {
    const navigate = useNavigate();
    const location = useLocation();

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
                {location.pathname !== '/' && (
                <H.HeaderCenter>
                    <H.HeaderForm onSubmit={(e) => e.preventDefault()}>
                        <H.HeaderButton onClick={() => navigate('/chatbot/choice')} active={location.pathname === '/chatbot/choice'}>챗봇</H.HeaderButton>
                        <H.HeaderButton onClick={() => navigate('/calendar')} active={location.pathname === '/calendar'}>달력</H.HeaderButton>
                        <H.HeaderButton onClick={() => navigate('/trash')} active={location.pathname === '/trash'}>감정쓰레기통</H.HeaderButton>
                        <H.HeaderButton onClick={() => navigate('/letter')} active={location.pathname === '/letter'}>편지</H.HeaderButton>
                        <H.HeaderButton onClick={() => navigate('/pencilholder')} active={location.pathname === '/pencilholder'}>연필꽂이</H.HeaderButton>
                    </H.HeaderForm>
                </H.HeaderCenter>
                )}
                {location.pathname !== '/' ? (
                <H.HeaderEnd>
                    <H.HeaderButton onClick={() => navigate('/settings')}><img src={setting} alt='setting' /></H.HeaderButton>
                </H.HeaderEnd>
                ) : (
                <H.HeaderEnd>
                    <H.HeaderButton onClick={() => navigate('/login')}><img src={login} alt='login' className='login'/></H.HeaderButton>
                </H.HeaderEnd>
                )}
            </H.HeaderWrapper>
        </H.Header>
    );
}

export default WebHeader;
