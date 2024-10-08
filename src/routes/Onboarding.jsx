import React, { useEffect, useState } from 'react';
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
    background: #EEECE3;
  }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    display: block;
    
`;

const Button = styled.button`
    position: absolute; 
    bottom: calc(0.5%);
    left: calc(15%);
    
    background: transparent;
    width: 70%;
    height: 3%;
    border: none;
    // border: 1px solid black;
    margin-bottom: 7.9%;
    
    @media (max-width: 768px) {
        margin-bottom: 18%;
        width: 92%;
        height: 2.6%;
        bottom: calc(0.55%);
        left: calc(4%);
    }
`;


export default function Onboarding() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        // 컴포넌트가 마운트될 때 스크롤을 최상단으로 이동
        window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
        {isMobile ? (
            <App>
                <Img src={onboardingMobile} alt="Onboarding" />
                <Button onClick={() => navigate('/login')} />
            </App>
            ) : (
            <App>
                <Img src={onboarding} alt="Onboarding" />
                <Button onClick={() => navigate('/login')} />
            </App>
        )}
    </>
  );
}
