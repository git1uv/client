import React, { useEffect, useState } from 'react'
import MobileView from '../components/Login/MobileView';
import PCView from '../components/Login/PCView';

export default function Login() {
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
