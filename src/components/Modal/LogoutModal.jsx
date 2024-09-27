import React, { useRef } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.webp';

const LogoutModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>로그아웃</M.LogoutModalTitle>
        <p className='sub'>로그아웃 하시겠습니까?</p>
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니오</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>로그아웃</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default LogoutModal;
