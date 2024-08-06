import React, { useState } from 'react'
import Mobile from '../components/Login/Mobile';
import Browser from '../components/Login/Browser';
import Modal from '../components/Login/FindPw/Modal';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

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