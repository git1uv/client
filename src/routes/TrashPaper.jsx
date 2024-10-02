import React,{useState} from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';
import TrashConfirmModal from '../components/Trash/TrashConfirmModal';
import DeletePaperModal from '../components/Trash/DeletePaperModal';


function TrashPaper() {
  const navigate = useNavigate();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isThrownOutModalVisible, setIsThrownOutModalVisible] = useState(false);
  const [paperContent, setPaperContent] = useState('');

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

  return (
    <T.Container>
      <T.PaperSection>
      <T.Paper>
        <textarea 
        value={paperContent}
        onChange={(e) => setPaperContent(e.target.value)}
        placeholder="감정 쓰레기통에 오늘 있었던 일, 감정을 적어보세요! &#13;&#10;써주신 내용은 어디에도 저장되지 않고, ‘버리기’를 누르면 소멸됩니다..! 🗑️" />
      </T.Paper>
      </T.PaperSection>
      <T.ButtonSection>
      <T.ThrowOut onClick={handleThrowOutClick} />
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
