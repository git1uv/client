import React, { useEffect, useState } from 'react'
import Mobile from '../components/Login/Mobile';
import Browser from '../components/Login/Browser';
import Modal from '../components/Login/FindPw/Modal';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Login() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }
  
  const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserView>
        <Browser openModal={openModal}/>
      </BrowserView>
      <MobileView>
        <Mobile openModal={openModal}/>
      </MobileView>
      <Modal isOpen={isModalOpen} closeModal={closeModal}/>
    </div>
  );
}
