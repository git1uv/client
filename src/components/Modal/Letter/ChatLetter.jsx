import React, { useState, useEffect } from 'react';
import axios from 'axios';
import x from '../../../assets/x.png';
import d from '../../../assets/letterImg/delete.png';
import * as C from './ChatLetter.style';

function Letter({userId, mailId, setLetterModal}) {
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [chatbotType, setChatbotType] = useState('');

    useEffect(() => {
        // 예시 데이터 설정
        const exampleData = {
            content: "아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아",
            createdAt: "2024-08-09",
            chatbotType: "T", // 'F' 또는 'T'로 변경 가능
        };

        // 예시 데이터를 상태로 설정
        setContent(exampleData.content);
        setDate(exampleData.createdAt);
        setChatbotType(exampleData.chatbotType);

        // Clean-up function for when the component unmounts
        return () => {
            setLetterModal(false);
        };
    }, [setLetterModal]);
    /**
    useEffect(() => {
        const fetchLetterData = async () => {
            try {
                const response = await axios.get(`api/v1/mail/${userId}`);
                if (response.data.code === "COMMON200") {
                    const { content, createdAt, chatbotType } = response.data.data.mails.find(mail => mail.mailId === mailId);
                    setContent(content);
                    setDate(createdAt);
                    setChatbotType(chatbotType);
                } else {
                    console.error('Failed to fetch letter data:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching letter data:', error);
            }
        };

        fetchLetterData();
    }, [userId]); */

    const handleDelete = async () => {
        /**
        try {
          const response = await axios.post('/api/v1/mail', {
            mailIds: [mailId],
          });
    
          if (response.data.code === "MAIL2001") {
            setLetterModal(false); 
          } else {
            console.error('Failed to delete letter:', response.data.message);
          }
        } catch (error) {
          console.error('Error deleting letter:', error);
        }*/
      };

    return (
        <C.ModalBg>
            <C.ModalContainer>
                <C.Modal chatbotType={chatbotType}>
                    <C.DeleteButton onClick={handleDelete}><img src={d} alt='delete' /></C.DeleteButton>
                    <C.ModalCloseButton onClick={() => setLetterModal(false)}><img src={x} alt='x' /></C.ModalCloseButton>
                    <C.Text>{content}</C.Text>
                    <C.Date>{date}</C.Date>
                </C.Modal>
            </C.ModalContainer>
        </C.ModalBg>
    );
    }
    

export default Letter;