import React, { useEffect, useState } from 'react'
import Mobile from '../components/Login/Mobile';
import Browser from '../components/Login/Browser';

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
      <div>
        {isMobile ? <Mobile /> : <Browser />}
      </div>
    );
}
