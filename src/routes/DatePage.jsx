import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Browser from '../components/Calendar/Browser';
import Mobile from '../components/Calendar/Mobile';

function DatePage() {
  const { date } = useParams(); 
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
    <div className="App">
      {isMobile ? (
        <Mobile date={date} /> 
      ) : (
        <Browser date={date} /> 
      )}
    </div>
  );
}

export default DatePage;