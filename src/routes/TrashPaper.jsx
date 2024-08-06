import React,{useState} from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';
import TrashConfirmModal from '../components/Trash/TrashConfirmModal';
import DeletePaperModal from '../components/Trash/DeletePaperModal';


function TrashPaper() {
  const navigate = useNavigate();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isThrownOutModalVisible, setIsThrownOutModalVisible] = useState(false);

  const handleThrowOutClick = () => {
    setIsConfirmModalVisible(true);
  };

  const handleConfirmClick = () => {
    setIsConfirmModalVisible(false);
    setIsThrownOutModalVisible(true);
  };

  const handleCloseModals = () => {
    setIsConfirmModalVisible(false);
    setIsThrownOutModalVisible(false);

  };

  return (
    <T.Container>
      <T.Paper>
        <textarea placeholder="Write your thoughts here..." />
      </T.Paper>
      <T.ThrowOut onClick={handleThrowOutClick} />
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
