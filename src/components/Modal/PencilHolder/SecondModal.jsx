import React, { useRef } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';
import Airplane from '../../../assets/pencilHolder/airplane.gif'

const SecondModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.AirplaneImage src={Airplane} alt="gif" />
        <M.LogoutModalTitle>종이비행기를 보냈어요.</M.LogoutModalTitle>
        <br />
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>홈으로 돌아가기</M.CancelButton>
          <M.LogoutClickButton onClick={onConfirm}>더 작성하기</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default SecondModal;
