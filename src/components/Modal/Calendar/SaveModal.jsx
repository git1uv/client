import React, { useState, useRef, useEffect  } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.png';

const SaveModal = ({ isVisible, onClose}) => {
  const outside = useRef();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose(); 
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <p className='sub'>일기가 저장되었습니다</p>
        <M.ModalActions>
          <M.CancelButton className='ok' onClick={onClose}>확인</M.CancelButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default SaveModal;