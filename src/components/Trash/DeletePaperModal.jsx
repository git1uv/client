import React, { useState, useEffect, useRef } from 'react';
import * as M from '../Modal/LogoutModal.style';
import x from '../../assets/x.webp';
import { useNavigate } from 'react-router-dom';
import gif from '../../assets/trashImg/delete.webp';

const DeletePaperModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();
  const navigate = useNavigate();
  const [gifSrc, setGifSrc] = useState(gif);
  const [open, setOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setGifSrc(`${gif}?${new Date().getTime()}`);
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
        <M.DeleteGif src={gifSrc} alt="GIF" /> 
        <M.LogoutModalTitle>작성한 내용을 쓰레기통에 버렸어요!</M.LogoutModalTitle>
        <M.ModalActions>
          <M.CancelButton onClick={() => navigate('/main')}>홈으로 돌아가기</M.CancelButton>
          <M.LogoutClickButton onClick={onClose}>더 작성하기</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default DeletePaperModal;