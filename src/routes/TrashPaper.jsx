import React from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';

function TrashPaper() {
  const navigate = useNavigate();

  const handleThrowOutClick = () => {
    navigate('/trash');
  };

  return (
    <T.Container>
      <T.Paper>
        <textarea placeholder="Write your thoughts here..." />
        <T.ThrowOut onClick={handleThrowOutClick} />
      </T.Paper>
    </T.Container>
  );
}

export default TrashPaper;
