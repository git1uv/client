import React, { useRef } from 'react';
import * as M from './LogoutModal.style';
import { FiX } from "react-icons/fi";

const LogoutModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><FiX /></M.ModalCloseButton>
        <M.LogoutModalTitle>비밀번호 변경</M.LogoutModalTitle>
        <p className='sub'>비밀번호가 변경되었섭니다</p>
        <M.ModalActions>
          <M.CancelButton onClick={onClose} >확인</M.CancelButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default LogoutModal;