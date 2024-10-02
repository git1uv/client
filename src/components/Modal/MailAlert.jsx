import React, { useRef, useState, useEffect } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.webp';
import postMail from '../../assets/main/postMail.webp'

const MailAlert = ({ isVisible, onClose, onConfirm }) => {
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
        <M.AirplaneImage src={postMail} alt="gif" />
        <M.LogoutModalTitle>새로운 편지가 도착했어요!</M.LogoutModalTitle>
        <p className='sub'>편지함으로 이동할까요?</p>
        <br />
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니요</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>네</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default MailAlert;