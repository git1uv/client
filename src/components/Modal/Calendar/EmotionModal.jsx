import React, { useState, useRef, useEffect } from 'react';
import * as M from './EmotionModal.style';
import x from '../../../assets/x.webp';
import axios from 'axios';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9,img10, img11, img12, img13, img14, img15, img16} from '../../../assets/CalendarImg/icons';
import Resizer from 'react-image-file-resizer';

const images = [
  { src: img1, name: 'laughing' },
  { src: img2, name: 'excited' },
  { src: img3, name: 'passionate' },
  { src: img4, name: 'peaceful' },
  { src: img5, name: 'angry' },
  { src: img6, name: 'crying' },
  { src: img7, name: 'dissatisfied' },
  { src: img8, name: 'disappointed' },
  { src: img9, name: 'inlove' },
  { src: img10, name: 'sick' },
  { src: img11, name: 'proud' },
  { src: img12, name: 'tired' },
  { src: img13, name: 'surprised' },
  { src: img14, name: 'anxious' },
  { src: img15, name: 'happy' },
  { src: img16, name: 'embarrassed' },
];

const fetchBlobFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

const EmotionModal = ({ isVisible, onClose, calendarId, setEmotion}) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const outside = useRef();
  const [optimizedImages, setOptimizedImages] = useState({});
  //const isImagesLoaded = useRef(false); // 이미지 로드 여부를 추적

  const [open, setOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const optimizeImages = async () => {
    const resizedImages = {};
    for (const img of images) {
      try {
        const blob = await fetchBlobFromUrl(img.src);
        const resizedImage = await new Promise((resolve) => {
          Resizer.imageFileResizer(
            blob,
            70, // 최대 너비
            70, // 최대 높이
            'AVIF', // 출력 형식
            90, // 품질
            0, // 회전
            (uri) => resolve(uri),
            'blob'
          );
        });
        resizedImages[img.name] = URL.createObjectURL(resizedImage);
      } catch (error) {
        console.error(`Failed to resize image ${img.name}:`, error);
      }
    }
    setOptimizedImages(resizedImages);
  };

  useEffect(() => {
    if (isVisible) {
      setOpen(true); 
      setFadingOut(false);
      optimizeImages();
    } else {
      setFadingOut(true);
      setTimeout(() => {
        setOpen(false);
      }, 350);
    }
  }, [isVisible]);

  if (!open) {
    return null;
  }

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
        // console.error('감정 저장 실패');
      }
    } catch (error) {
      // console.error('감정 저장 중 오류 발생', error);
    }
  };

  return (
    <M.ModalBg ref={outside} onClick={(e) => { if (e.target === outside.current) onClose(); }}>
      <M.Modal fadingOut={fadingOut}>
        <M.ModalCloseButton onClick={onClose}><img src={x} alt='x' /></M.ModalCloseButton>
        <M.EmotionContainer>
          {Object.entries(optimizedImages).map(([name, src], index) => (
            <M.EmotionImg key={index} onClick={() => handleEmotionSelect(name)}>
              <img src={src} alt={name} />
            </M.EmotionImg>
          ))}
        </M.EmotionContainer>
      </M.Modal>
    </M.ModalBg>
  );
};

export default EmotionModal;