import React, { useRef, useState, useEffect } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';

const DeleteLetterModal = ({ isVisible, onClose, onConfirm }) => {
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
        <M.LogoutModalTitle>삭제하기</M.LogoutModalTitle>
        <p className='sub'>정말 삭제할까요?</p>
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니오</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>삭제</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default DeleteLetterModal;