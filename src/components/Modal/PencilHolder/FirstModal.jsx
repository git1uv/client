import React, { useRef } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';

const FirstModal = ({ isVisible, onClose, onConfirm, name, content }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>보내시겠습니까?</M.LogoutModalTitle>
        <p className='sub'>보내고 난 뒤에는 확인, 수정이 불가합니다.</p>
        <p className='sub'>부적절한 내용을 보낼 시</p>
        <p className='sub'>서비스 이용이 제한될 수 있습니다.</p>
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
