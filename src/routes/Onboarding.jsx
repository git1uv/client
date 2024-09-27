import React, { useEffect } from 'react';
import onboarding from '../assets/onboarding/onboarding.webp';
import onboardingMobile from '../assets/onboarding/onboardingMobile.webp';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import theme from '../constants/theme'

const RESPONSIVE_SIZE = theme;

const App = styled.div`
    position: relative; 
    overflow-y: auto; 
    height: auto;
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        height: 30dvh;
    }
  }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    display: block;
    
`;

const Button = styled.button`
    position: absolute; 
    bottom: 0.5%;
    left: 50%;
    transform: translateX(-50%); 
    background: transparent;
    width: 70%;
    height: 3%;
    border: none;
    border: 1px solid black;
    margin-bottom: 7.9%;
    
    @media (max-width: 430px) {
        margin-bottom: 18%;
        width: 92%;
        height: 2.6%;
    }
`;


export default function Onboarding() {
    const navigate = useNavigate();
    useEffect(() => {
        // 컴포넌트가 마운트될 때 스크롤을 최상단으로 이동
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <BrowserView>
            <App>
                <Img src={onboarding} alt="Onboarding" />
                <Button onClick={() => navigate('/login')} />
            </App>
        </BrowserView>
        <MobileView>
            <App>
                <Img src={onboardingMobile} alt="Onboarding" />
                <Button onClick={() => navigate('/login')} />
            </App>
        </MobileView>
    </>
  );
}
