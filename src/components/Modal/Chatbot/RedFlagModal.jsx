import React, { useRef } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';
import axios from 'axios';

const RedFlagModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();
 
  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>대화 속 내용에</M.LogoutModalTitle>
        <M.LogoutModalTitle>도움이 필요해보여요.</M.LogoutModalTitle>
        <p className='sub' style={{fontSize:'1rem', marginBottom:'0.5rem'}}>도움받기를 선택하시면 </p>
        <p className='sub' style={{fontSize:'1rem'}}>전문적인 상담이 가능한 기관으로 연결해드립니다.</p>
        <br />
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>괜찮아요</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>도움받기</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default RedFlagModal;
