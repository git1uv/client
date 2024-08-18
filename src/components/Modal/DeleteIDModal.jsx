import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as M from './LogoutModal.style';
import x from '../../assets/x.png';

const DeleteModal = ({ isVisible, onClose }) => {
  const outside = useRef();
  const navigate = useNavigate();

  const handleDelete = async () => {
    /**try {
      const response = await axios.patch('/api/v1/setting/delete-account');

      if (response.status === 200) {
        navigate('/');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('사용자 탈퇴 실패: ', error);
    }*/
  };

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
          <M.LogoutClickButton onClick={handleDelete}>탈퇴</M.LogoutClickButton>
        </M.ModalActions>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default DeleteModal;