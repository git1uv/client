import React, { useEffect, useState } from 'react'
import MobileView from '../components/Signup/Signup/MobileView';
import PCView from '../components/Signup/Signup/PCView';

export default function Signup() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      <div>{isMobile ? <MobileView /> : <PCView />}</div>
    );
}
