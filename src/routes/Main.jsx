import React, { useEffect, useState } from 'react'
import Browser from '../components/Main/Browser/MainCm'
import Mobile from '../components/Main/Mobile/MainMobile'

export default function Main() {

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
  );

}
