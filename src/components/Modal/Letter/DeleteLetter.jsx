import React, { useRef } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.png';
import axios from 'axios';

const DeleteLetterModal = ({ isVisible, onClose, onConfirm, mailId }) => {
  const outside = useRef();

  const handleDelete = async () => {
    /**
    try {
      const response = await axios.post('/api/v1/mail', {
        mailIds: mailId,
      });

      if (response.data.code === "200") {
        onConfirm();
      } else {
        console.error('실패:', response.data.message);
      }
    } catch (error) {
      console.error('실패:', error);
    }*/
  };

  if (!isVisible) return null;

  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.LogoutModalTitle>삭제하기</M.LogoutModalTitle>
        <p className='sub'>정말 삭제할까요?</p>
        <M.ModalActions>
          <M.CancelButton onClick={onClose}>아니오</M.CancelButton>
          <M.LogoutClickButton onClick={handleDelete}>삭제</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default DeleteLetterModal;