import React, { useRef } from 'react';
import * as M from './LogoutModal.style';
import x from '../../assets/x.webp';

const DeleteModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>탈퇴하기</M.LogoutModalTitle>
        <p className='sub'>정말 탈퇴할까요?</p>
        <p className='warning'>탈퇴할 시, 모든 활동과 기록이 사라져요.</p>
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니오</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>탈퇴</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default DeleteModal;