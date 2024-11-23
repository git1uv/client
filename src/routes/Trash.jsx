import React, { useState, useEffect, useRef } from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowRoundDown } from "react-icons/io";
import Resizer from 'react-image-file-resizer';
import {trashImageMobile, backgroundImageMobile, backgroundImageWeb} from '../assets/trashImg/icons'

const fetchBlobFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

//react-image-file-resizer 적용
const resizeImage = (file, maxWidth, maxHeight, format = 'AVIF') =>
  new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      format,
      90, // 품질
      0, // 회전
      (uri) => resolve(uri),
      'blob', // 출력 타입
    );
  });

const optimizeImages = async () => {
  const resizedImages = {};
  const Images = [
    { name: 'backgroundImageMobile', url: backgroundImageMobile, maxWidth: 430, maxHeight: 900 },
    { name: 'backgroundImageWeb', url: backgroundImageWeb, maxWidth: 1920, maxHeight: 1200 },
    { name: 'trashImageMobile', url: trashImageMobile, maxWidth: 1920, maxHeight: 1200 },
    //{ name: 'card1ImageMobile', file: card1ImageMobileFile, maxWidth: 220, maxHeight: 200 },
    //{ name: 'card2ImageWeb', file: card2ImageWebFile, maxWidth: 250, maxHeight: 211 },
    // 필요한 다른 이미지 추가
  ];

  for (const image of Images) {
    try {
      const blob = await fetchBlobFromUrl(image.url); // URL에서 Blob 생성
      const resizedImage = await resizeImage(blob, image.maxWidth, image.maxHeight);
      resizedImages[image.name] = URL.createObjectURL(resizedImage);
    } catch (error) {
      console.error(`Failed to resize image ${image.name}:`, error);
    }
  }

  return resizedImages;
};

const card1Variants = {
  hidden: { y: '100%', opacity: 0, rotate: -6},
  visible: { 
    y: 0, 
    opacity: 1,
    rotate: -6, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 10, 
      bounce: 0.1,
    } 
  },
  exit: {
    opacity: 0,
    rotate: -6, 
    transition: { ease: 'easeOut', duration: 0.5 } 
  }
};

const card2Variants = {
  hidden: { y: '100%', opacity: 0, rotate: 6},
  visible: { 
    y: 0, 
    opacity: 1,
    rotate: 6, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 10, 
      bounce: 0.1,
    } 
  },
  exit: {
    opacity: 0,
    rotate: 6, 
    transition: { ease: 'easeOut', duration: 0.5 } 
  }
};

function Trash() {
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const navigate = useNavigate();

  const [optimizedImages, setOptimizedImages] = useState({});
  const isImagesLoaded = useRef(false); // 이미지 로드 여부를 추적

  const handleTrashClick = () => {
    setIsCard1Visible(true);
    setIsCard2Visible(true);
    setIsTextVisible(false);
  };
  const handleCard2ButtonClick = () => {
    setIsCard1Visible(false);
    setIsCard2Visible(false);
    setTimeout(() => {
      navigate('/trashpaper');
    }, 500); 
  };

  useEffect(() => {
    const fetchOptimizedImages = async () => {
      if (!isImagesLoaded.current) { // 아직 이미지 로드가 완료되지 않았다면
        const images = await optimizeImages();
        setOptimizedImages(images); // 상태를 업데이트
        isImagesLoaded.current = true; // 로드 완료 상태를 기록
      }
    };

    fetchOptimizedImages();
  }, []);

  if (!Object.keys(optimizedImages).length) {
    return <div>Loading...</div>; // 이미지 로딩 중
  }

  return (
    <T.Container
      backgroundImageMobile={optimizedImages.backgroundImageMobile}
      backgroundImageWeb={optimizedImages.backgroundImageWeb}
    >
      <T.CenterSection>
        <AnimatePresence>
          {isTextVisible && !isCard1Visible && !isCard2Visible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <T.Text>
                <p>눌러보세요</p>
                <IoIosArrowRoundDown size="60"/>
              </T.Text>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {isCard1Visible && (<T.Card1 
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={card1Variants}
              key="card1"/>)}
          {isCard2Visible && (
          <T.Card2 
            as={motion.div}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={card2Variants}
            key="card2">
            <T.Card2Button onClick={handleCard2ButtonClick} />
          </T.Card2>
        )}
        </AnimatePresence>
      </T.CenterSection>
      <T.BottomSection>
      <T.Trash onClick={handleTrashClick} 
        trashImageMobile={optimizedImages.trashImageMobile}
      />
      </T.BottomSection>
    </T.Container>
  );
}

export default Trash;