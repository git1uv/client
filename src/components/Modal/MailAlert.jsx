import React, { useRef } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.webp';
import postMail from '../../assets/main/postMail.webp'

const MailAlert = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
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