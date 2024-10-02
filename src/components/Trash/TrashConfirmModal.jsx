import React, { useRef, useState, useEffect } from 'react';
import * as M from '../Modal/LogoutModal.style';
import x from '../../assets/x.webp';

const TrashConfirmModal = ({ isVisible, onClose, onConfirm }) => {
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
        <M.LogoutModalTitle>작성을 완료할까요?</M.LogoutModalTitle>
        <p className='sub'>작성한 내용은 감정 쓰레기통에 버리자마자 없어지며, 이 작업은 되돌릴 수 없어요.</p>
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니오</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>확인</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default TrashConfirmModal;