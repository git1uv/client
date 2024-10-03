import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Firework from '../../../assets/CalendarImg/firework.webp';

const GifModalWrapper = styled.div`
  position: fixed;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 30%;
  @media (max-width: 430px) {
    left: 0;
  }
  @media (min-width: 431px) {
    left: 15%;
  }
`;
const GifContainer = styled.div`
  display: flex;
`;
const GifImage = styled.img`
  @media (max-width: 430px) {
    width: 100vw;  
    height: auto;
  }
  @media (min-width: 431px) {
    width: 25vw;  
    height: auto;
  }
`;

const GifModal = ({ isVisible, onClose }) => {
  const [GifSrc, setGifSrc] = useState('');

  useEffect(() => {
    if (isVisible) {
      setGifSrc(`${Firework}?${new Date().getTime()}`);
    
      const closeTimer = setTimeout(() => {
        onClose();
      }, 2000); 

      return () => {
        clearTimeout(closeTimer);
      };
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <GifModalWrapper onClick={onClose}>
    <GifContainer>
      {GifSrc && <GifImage  src={GifSrc} alt="GIF" />}
    </GifContainer>
  </GifModalWrapper>

  );
};

export default GifModal;
