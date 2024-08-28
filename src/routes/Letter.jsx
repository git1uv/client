import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import { FaHeart, FaTrash} from "react-icons/fa";
import Letter from '../components/Modal/Letter/ChatLetter';

function Mailbox() {
  const [isLetterModalVisible, setLetterModalVisible] = useState(false);
  const handleLetterClick = () => {
    setLetterModalVisible(true);
  };


  return (
    <L.Container>
      <L.Mailbox>
          <L.TopRow>
            <L.SeeAll>
              <button></button>
            </L.SeeAll>
            <L.Favorites>
              <button></button>
            </L.Favorites>
            <L.NotRead>
              <button onClick={handleLetterClick}><FaHeart /></button>
            </L.NotRead>
            <L.Delete>
              <button></button>
            </L.Delete>
          </L.TopRow>
          <L.Letters>
          </L.Letters>
      </L.Mailbox>
      {isLetterModalVisible && <Letter setLetterModal={setLetterModalVisible} />}
    </L.Container>
  );
}

export default Mailbox;

