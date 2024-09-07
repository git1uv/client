import React, { useState, useRef, useEffect } from 'react';
import * as M from './EmotionModal.style';
import x from '../../../assets/x.png';

const EmotionModal = ({ isVisible, onClose}) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.ModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.Modal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
      </M.Modal>
    </M.ModalBg>
  );
};

export default EmotionModal;