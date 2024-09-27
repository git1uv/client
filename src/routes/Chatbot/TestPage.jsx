import React, { useEffect, useState } from 'react'
import Browser from '../../components/Test/TestStart/Browser'
import { BrowserView, MobileView } from 'react-device-detect'
import Mobile from '../../components/Test/TestStart/Mobile'

export default function TestPage() {
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
