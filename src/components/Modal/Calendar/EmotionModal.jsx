import React, { useState, useRef, useEffect } from 'react';
import * as M from './EmotionModal.style';
import x from '../../../assets/x.png';
import axios from 'axios';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9,img10, img11, img12, img13, img14, img15, img16} from '../../../assets/CalendarImg/icons';

const EmotionModal = ({ isVisible, onClose, calendarID, setEmotion}) => {
  const outside = useRef();
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
  const emotionNames = ['Laughing', 'Excited', 'Passionate', 'Peaceful', 'Angry', 'Crying', 'Dissatisfied', 'Disappointed', 'Inlove', 'Sick', 'Proud', 'Tired', 'Surprised', 'Anxious', 'Happy', 'Embarrassed'];

  if (!isVisible) return null;

  // 예시 데이터
  const handleEmotionSelect = (emotionName) => {
    setEmotion(emotionName); 
    onClose(); 
  };

  /**
  const handleEmotionSelect = async (emotionName) => {
    try {
      const response = await axios.patch(`/api/v1/calendar/today/${calendarID}/emotion`, {
        emotion: emotionName,
      });
      if (response.status === 200) {
        setEmotion(emotionName); 
        onClose();
      } else {
        console.error('감정 저장 실패');
      }
    } catch (error) {
      console.error('감정 저장 중 오류 발생', error);
    }
  };*/

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