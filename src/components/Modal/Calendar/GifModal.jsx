import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Firework from '../../../assets/CalendarImg/firework.gif';

const GifModalWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /* 투명 모달 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const GifContainer = styled.div`
  display: flex;
`;
const GifImage = styled.img`
  width: 100vw;  
  height: auto;
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
