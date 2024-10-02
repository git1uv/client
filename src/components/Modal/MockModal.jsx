import React, { useRef } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.webp';

const MockModal = ({ isVisible, onClose}) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>추후 업데이트 예정이에요 😊</M.LogoutModalTitle>
        <M.ModalActions>
          <M.OKButton onClick={onClose} >확인</M.OKButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default MockModal;