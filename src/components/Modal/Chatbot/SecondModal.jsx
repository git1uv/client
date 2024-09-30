import React, { useEffect, useRef, useState } from 'react';
import * as M from '../LogoutModal.style';
import x from '../../../assets/x.webp';
import write from '../../../assets/chatbot/writeAni.gif'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import solution, { setSolution } from '../../../redux/solution';
import { useNavigate } from 'react-router-dom';

const SecondModal = ({ isVisible, onClose, onConfirm }) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const counselingId = localStorage.getItem('counselingLogId');

  const outside = useRef();
  const counseling = useSelector((state) => state.counseling);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const endChatting = async() => {
    setLoading(true);
    try {
      const res = await axios.get(`${serverURL}/api/v1/chatbot/exit?counselingLogId=${counselingId}`, {
        headers: {
          'Authorization' : `Bearer ${accessToken} ${refreshToken}`
        }
      });
      console.log(res.data);
      dispatch(setSolution({
        counselingLogId: counselingId,
        chatbotType: res.data.data.chatbotType,
        title: res.data.data.title,
        summary: res.data.data.summary,
        suggestion: res.data.data.suggestion,
        solutions: res.data.data.solutions,
        endedAt: res.data.data.endedAt,
      }))
      setLoading(false);
      onClose();
      navigate(`/chatbot/${counselingId}`, { state: { fromModal: true } });
    } catch(err) {
      window.alert('상담일지를 만드는 데 에러가 발생했어요. 다시 시도해주세요.');
      onClose();
      console.log(err);
    }
  }

  useEffect(() => {
    if (isVisible)
      endChatting();
  }, [isVisible])

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
