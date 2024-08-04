import React, { useState } from 'react';
import * as T from "../components/Trash/Trash.style";
import { useNavigate } from 'react-router-dom';


function Trash() {
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const navigate = useNavigate();


  const handleTrashClick = () => {
    setIsCard1Visible(true);
    setIsCard2Visible(true);
  };
  const handleCard2ButtonClick = () => {
    navigate('/trashpaper');
  };


  return (
    <T.Container>
      <T.Trash onClick={handleTrashClick}>
      </T.Trash>
      {isCard1Visible && <T.Card1 show={isCard1Visible} />}
      {isCard2Visible && (
        <>
          <T.Card2 show={isCard2Visible}>
          <T.Card2Button onClick={handleCard2ButtonClick}>
          </T.Card2Button>
          </T.Card2>
        </>
      )}
    </T.Container>
  );
}

export default Trash;