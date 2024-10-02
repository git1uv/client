import React, { useRef, useState, useEffect } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.webp';

const NameChangeModal = ({ isVisible, onClose}) => {
  const outside = useRef();
  const [open, setOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setOpen(true); 
      setFadingOut(false);
    } else {
      setFadingOut(true);
      setTimeout(() => {
        setOpen(false);
      }, 350);
    }
  }, [isVisible]);

  if (!open) {
    return null;
  }

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal fadingOut={fadingOut}>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>닉네임 변경</M.LogoutModalTitle>
        <p className='sub'>닉네임이 변경되었습니다</p>
        <M.ModalActions>
          <M.OKButton className='ok' onClick={onClose} >확인</M.OKButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default NameChangeModal;