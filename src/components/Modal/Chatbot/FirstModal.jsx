import React, { useRef, useState, useEffect } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';
import axios from 'axios';

const FirstModal = ({ isVisible, onClose, onConfirm, name, content }) => {
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
        <M.LogoutModalTitle>정말 대화를 끝낼건가요?</M.LogoutModalTitle>
        <p className='sub' style={{fontSize:'1rem'}}>지금까지의 대화 내용을 바탕으로</p>
        <p className='sub' style={{fontSize:'1rem'}}>챗봇이 일지를 작성해줘요.</p>
        <br />
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니오</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>보내기</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default FirstModal;
