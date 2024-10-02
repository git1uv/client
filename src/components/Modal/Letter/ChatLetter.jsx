import React, { useState, useEffect } from 'react';
import axios from 'axios';
import x from '../../../assets/x.webp';
import d from '../../../assets/letterImg/button_delete.webp'
import * as C from './ChatLetter.style';
import DeleteLetterModal from './DeleteLetter';

function Letter({mailId, content, createdAt, chatbotType, setLetterModal, handleDelete, isVisible}) {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);  
    const [open, setOpen] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);
  
    useEffect(() => {
      if (isVisible) {
        setOpen(true); 
        setFadingOut(false);
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
  
    return (
        <C.ModalBg>
            <C.ModalContainer>
                <C.Modal chatbotType={chatbotType} fadingOut={fadingOut}>
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