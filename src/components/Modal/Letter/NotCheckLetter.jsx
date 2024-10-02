import React, { useState, useRef, useEffect  } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';

const CheckModal = ({ isVisible, onClose}) => {
  const [opacity, setOpacity] = useState(1);
  const outside = useRef();

  useEffect(() => {
    if (isVisible) {
      const fadeOut = setTimeout(() => {
        setOpacity(0); 
      }, 1000); 
      const timer = setTimeout(() => {
        onClose(); 
      }, 1500); 
      return () => {
        clearTimeout(fadeOut);
        clearTimeout(timer);
      };
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg 
    ref={outside} 
    onClick={(e) => { if (e.target === outside.current) onClose(); }}
    style={{ opacity, transition: 'opacity 1s ease' }} 
    >
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>편지를 선택해주세요</M.LogoutModalTitle>
        <M.ModalActions>
          <M.OKButton onClick={onClose}>확인</M.OKButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default CheckModal;