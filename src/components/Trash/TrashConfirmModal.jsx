import React, { useRef } from 'react';
import * as M from '../Modal/LogoutModal.style';
import x from '../../assets/x.png';

const TrashConfirmModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
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