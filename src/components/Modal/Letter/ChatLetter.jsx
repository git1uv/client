import React, { useState, useEffect } from 'react';
import axios from 'axios';
import x from '../../../assets/x.png';
import d from '../../../assets/letterImg/delete.png';
import * as C from './ChatLetter.style';

function Letter({mailId, userID, content, createdAt, chatbotType, setLetterModal}) {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);  

    const handleDeleteClick = () => {
        setDeleteModalVisible(true);
      };

    return (
        <C.ModalBg>
            <C.ModalContainer>
                <C.Modal chatbotType={chatbotType}>
                    <C.DeleteButton><img src={d} alt='delete' /></C.DeleteButton>
                    <C.ModalCloseButton onClick={() => setLetterModal(false)}><img src={x} alt='x' /></C.ModalCloseButton>
                    <C.Text>{content}</C.Text>
                    <C.Date>{createdAt}</C.Date>
                </C.Modal>
            </C.ModalContainer>
        </C.ModalBg>
    );
    }
    

export default Letter;