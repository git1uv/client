import React, { useEffect, useState } from 'react';
import Browser from '../components/PencilHolder/Browser';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile from '../components/PencilHolder/Mobile';

function PencilHolder() {
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
  );
}

export default PencilHolder;