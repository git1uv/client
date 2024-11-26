import React,{useState, useEffect, useRef} from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';
import TrashConfirmModal from '../components/Trash/TrashConfirmModal';
import DeletePaperModal from '../components/Trash/DeletePaperModal';
import Resizer from 'react-image-file-resizer';
import {backgroundImageMobile, backgroundImageWeb, paperImageMobile, paperImageWeb, throwOutImageWeb, throwOutImageMobile} from '../assets/trashImg/icons'

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
    { name: 'paperImageMobile', url: paperImageMobile, maxWidth: 430, maxHeight: 900 },
    { name: 'paperImageWeb', url: paperImageWeb, maxWidth: 1920, maxHeight: 1200 },
    { name: 'throwOutImageWeb', url: throwOutImageWeb, maxWidth: 1920, maxHeight: 1200 },
    { name: 'throwOutImageMobile', url: throwOutImageMobile, maxWidth: 430, maxHeight: 900 },
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

function TrashPaper() {
  const navigate = useNavigate();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isThrownOutModalVisible, setIsThrownOutModalVisible] = useState(false);
  const [paperContent, setPaperContent] = useState('');

  const [optimizedImages, setOptimizedImages] = useState({});
  const isImagesLoaded = useRef(false); // 이미지 로드 여부를 추적

  const handleThrowOutClick = () => {
    setIsConfirmModalVisible(true);
  };

  const handleConfirmClick = () => {
    setIsConfirmModalVisible(false);
    setIsThrownOutModalVisible(true);
    setPaperContent('');
  };

  const handleCloseModals = () => {
    setIsConfirmModalVisible(false);
    setIsThrownOutModalVisible(false);
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
      <T.PaperSection>
      <T.Paper
        paperImageMobile={optimizedImages.paperImageMobile}
        paperImageWeb={optimizedImages.paperImageWeb}
      >
        <textarea 
        value={paperContent}
        onChange={(e) => setPaperContent(e.target.value)}
        placeholder="감정 쓰레기통에 오늘 있었던 일, 감정을 적어보세요! &#13;&#10;써주신 내용은 어디에도 저장되지 않고, ‘버리기’를 누르면 소멸됩니다..! 🗑️" />
      </T.Paper>
      </T.PaperSection>
      <T.ButtonSection>
      <T.ThrowOut 
        throwOutImageMobile={optimizedImages.throwOutImageMobile}
        throwOutImageWeb={optimizedImages.throwOutImageWeb}
        onClick={handleThrowOutClick} />
      </T.ButtonSection>
      <TrashConfirmModal
        isVisible={isConfirmModalVisible}
        onClose={handleCloseModals}
        onConfirm={handleConfirmClick}
      />

      <DeletePaperModal
        isVisible={isThrownOutModalVisible}
        onClose={handleCloseModals}
      />
    </T.Container>
  );
}

export default TrashPaper;
