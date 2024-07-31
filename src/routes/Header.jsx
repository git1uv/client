import React, { useEffect, useState } from 'react'
import MobileView from '../components/Header/MobileView';
import PCView from '../components/Header/PCView';

export default function Header() {
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