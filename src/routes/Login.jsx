import React, { useEffect, useState } from 'react'
import Mobile from '../components/Login/Mobile';
import Browser from '../components/Login/Browser';
import FirstModal from '../components/Login/FindPw/FirstModal';
import { BrowserView, MobileView } from 'react-device-detect';
import SecondModal from '../components/Login/FindPw/SecondModal';

export default function Login() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const openFirstModal = () => {
    setIsFirstOpen(true);
  }
  const closeFirstModal = () => {
    setIsFirstOpen(false);
  }
  const closeSecondModal = () => {
    setIsSecondOpen(false);
  }

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
      {isMobile ? <Mobile openModal={openFirstModal}/> :  <Browser openModal={openFirstModal}/>}
      <FirstModal 
        isOpen={isFirstOpen} 
        closeModal={closeFirstModal} 
        setIsSecondOpen={setIsSecondOpen}
      />
      <SecondModal 
        isOpen={isSecondOpen}
        closeModal={closeSecondModal}
      />
    </>
        );
}