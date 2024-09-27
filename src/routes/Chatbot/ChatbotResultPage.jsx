import React, { useEffect, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import Browser from '../../components/Chatbot/ChatbotResult/ChatbotResult'
import Mobile from '../../components/Chatbot/Mobile/Result/ResultMobile.jsx'
export default function ChatbotResultPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
        {isMobile ? <Mobile /> :  <Browser />}
    </>
  )
}
