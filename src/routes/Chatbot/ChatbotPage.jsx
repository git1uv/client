import React, { useEffect, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import Browser from '../../components/Chatbot/Browser/Chatbot/Chatbot.jsx'
import Mobile from '../../components/Chatbot/Mobile/Chat/ChatbotMobile.jsx'

export default function ChatbotPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? <Mobile /> :  <Browser />}
    </>
  )
}
