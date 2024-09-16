import React, { useEffect, useRef } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.png';
import write from '../../../assets/chatbot/writeAni.gif'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import solution, { setSolution } from '../../../redux/solution';
import { useNavigate } from 'react-router-dom';

const SecondModal = ({ isVisible, onClose, onConfirm }) => {
  const outside = useRef();
  const counseling = useSelector((state) => state.counseling);
  const counseling_log_id = counseling.counselingLogId;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const endChatting = async() => {
    try {
      const res = await axios.get(`/api/v1/chatbot/exit/${counseling_log_id}`);
      console.log(res.data);
      dispatch(setSolution({
        counselingLogId: counseling_log_id,
        title: res.data.title,
        summary: res.data.summary,
        suggestion: res.data.suggestion,
        solutions: res.data.solutions,
        endedAt: res.data.endedAt,
      }))
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose(); // 3초 후에 onClose 호출
        endChatting();
        navigate('/chatbot/result');
      }, 3000);

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;
  return (
    <M.LogoutModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.LogoutModal>
        <M.AirplaneImage src={write} alt="gif" />
        <M.LogoutModalTitle>챗봇이 일지를 작성하고 있어요!</M.LogoutModalTitle>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default SecondModal;
