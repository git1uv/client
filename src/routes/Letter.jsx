import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import { FaHeart, FaTrash} from "react-icons/fa";
import Letter from '../components/Modal/Letter/ChatLetter';
import styled from "styled-components";

const LetterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function Mailbox() {
  const [isLetterModalVisible, setLetterModalVisible] = useState(false);
  const handleLetterClick = () => {
    setLetterModalVisible(true);
  };


  return (
    <LetterWrapper>
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
            <L.LetterContainer>
              <L.CheckBox></L.CheckBox>
              <L.Letter>
                <L.ChatBox>
                  <L.Chatbot>
                    <L.RedDot></L.RedDot>
                  </L.Chatbot>
                </L.ChatBox>
                <L.TextBox>
                  <L.Title></L.Title>
                  <L.Date></L.Date>
                </L.TextBox>
                <L.Heart></L.Heart>
              </L.Letter>
            </L.LetterContainer>
          </L.Letters>
      </L.Mailbox>
      {isLetterModalVisible && <Letter setLetterModal={setLetterModalVisible} />}
    </L.Container>
    </LetterWrapper>
  );
}

export default Mailbox;

