import React, { useState } from 'react'
import Mobile from '../components/Login/Mobile';
import Browser from '../components/Login/Browser';
import FirstModal from '../components/Login/FindPw/FirstModal';
import { BrowserView, MobileView } from 'react-device-detect';
import SecondModal from '../components/Login/FindPw/SecondModal';

export default function Login() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const openFirstModal = () => {
    setIsFirstOpen(true);
  }
  const closeFirstModal = () => {
    setIsFirstOpen(false);
  }
  const closeSecondModal = () => {
    setIsSecondOpen(false);
  }

  return (
    <div className="App">
      <BrowserView>
        <Browser openModal={openFirstModal}/>
      </BrowserView>
      <MobileView>
        <Mobile openModal={openFirstModal}/>
      </MobileView>
      <FirstModal 
        isOpen={isFirstOpen} 
        closeModal={closeFirstModal} 
        setIsSecondOpen={setIsSecondOpen}
      />
      <SecondModal 
        isOpen={isSecondOpen}
        closeModal={closeSecondModal}
      />
    </div>
  );
}