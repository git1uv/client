import React, { useState, useEffect } from 'react';
import axios from 'axios';
import x from '../../../assets/x.webp';
import d from '../../../assets/letterImg/button_delete.webp'
import * as C from './ChatLetter.style';
import DeleteLetterModal from './DeleteLetter';
import FBackground from '../../../assets/letterImg/letter_f.webp';
import TBackground from '../../../assets/letterImg/letter_t.webp';
import HBackground from '../../../assets/letterImg/letter_half.webp';
import Resizer from 'react-image-file-resizer';

const fetchBlobFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

function Letter({mailId, content, createdAt, chatbotType, setLetterModal, handleDelete, isVisible}) {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);  
    const [open, setOpen] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);
    const [optimizedImages, setOptimizedImages] = useState({});

    const optimizeImages = async () => {
      const resizedImages = {};
      const imageList = [
        { name: 'FBackground', src: FBackground, maxWidth: 800, maxHeight: 800 },
        { name: 'TBackground', src: TBackground, maxWidth: 800, maxHeight: 800 },
        { name: 'HBackground', src: HBackground, maxWidth: 800, maxHeight: 800 },
      ];
      for (const img of imageList) {
        try {
          const blob = await fetchBlobFromUrl(img.src);
          const resizedImage = await new Promise((resolve) => {
            Resizer.imageFileResizer(
              blob,
              img.maxWidth,
              img.maxHeight,
              'AVIF',
              90,
              0,
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

    const getBackgroundImage = () => {
      if (chatbotType === 'F') return optimizedImages.FBackground;
      if (chatbotType === 'T') return optimizedImages.TBackground;
      return optimizedImages.HBackground;
    };
  
    return (
        <C.ModalBg>
            <C.ModalContainer>
                <C.Modal fadingOut={fadingOut} backgroundImage={getBackgroundImage()}>
                    <C.DeleteButton onClick={() => setDeleteModalVisible(true)}><img src={d} alt='delete' /></C.DeleteButton>
                    <C.ModalCloseButton onClick={() => setLetterModal(false)}><img src={x} alt='x' /></C.ModalCloseButton>
                    <C.Text>{content}</C.Text>
                    <C.Date>{createdAt}</C.Date>
                </C.Modal>
            </C.ModalContainer>
            {isDeleteModalVisible && (
                <DeleteLetterModal
                isVisible={isDeleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={() => {
                    handleDelete(mailId); 
                    setLetterModal(false);
                }}
                />
            )}
        </C.ModalBg>
    );
    }
    

export default Letter;