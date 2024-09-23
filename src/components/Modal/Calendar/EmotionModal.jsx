import React, { useState, useRef, useEffect } from 'react';
import * as M from './EmotionModal.style';
import x from '../../../assets/x.png';
import axios from 'axios';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9,img10, img11, img12, img13, img14, img15, img16} from '../../../assets/CalendarImg/icons';

const EmotionModal = ({ isVisible, onClose, calendarId, setEmotion}) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const outside = useRef();
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
  const emotionNames = ['laughing', 'excited', 'passionate', 'peaceful', 'angry', 'crying', 'dissatisfied', 'disappointed', 'inlove', 'sick', 'proud', 'tired', 'surprised', 'anxious', 'happy', 'embarrassed'];

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

  if (!isVisible) return null;

  const handleEmotionSelect = async (emotionName) => {
    try {
      const response = await axios.patch(`${serverURL}/api/v1/calendar/today/${calendarId}/emotion`, {
        emotion: emotionName,
      },{
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        },
      });
      if (response.data.code === '200') {
        setEmotion(emotionName); 
        onClose();
      } else {
        console.error('감정 저장 실패');
      }
    } catch (error) {
      console.error('감정 저장 중 오류 발생', error);
    }
  };

  return (
    <M.ModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.Modal>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.EmotionContainer>
          {images.map((img, index) => (
            <M.EmotionImg key={index} onClick={() => handleEmotionSelect(emotionNames[index])}>
              <img src={img} alt={`${index + 1}`} />
            </M.EmotionImg>
          ))}
        </M.EmotionContainer>
      </M.Modal>
    </M.ModalBg>
  );
};

export default EmotionModal;