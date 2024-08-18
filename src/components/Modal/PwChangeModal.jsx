import React, { useRef } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.png';

const LogoutModal = ({ isVisible, onClose}) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>비밀번호 변경</M.LogoutModalTitle>
        <p className='sub'>비밀번호가 변경되었습니다</p>
        <M.ModalActions>
          <M.CancelButton className='ok' onClick={onClose} >확인</M.CancelButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default LogoutModal;