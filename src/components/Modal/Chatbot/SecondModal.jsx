import React, { useEffect, useRef } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.png';
import write from '../../../assets/chatbot/writeAni.gif'

const SecondModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose(); // 3초 후에 onClose 호출
      }, 3000);

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;
  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.AirplaneImage src={write} alt="gif" />
        <M.LogoutModalTitle>챗봇이 일지를 작성하고 있어요!</M.LogoutModalTitle>
        {/* <br /> */}
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default SecondModal;
