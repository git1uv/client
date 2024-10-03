import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import * as A from './Airplane.style';
import x from '../../assets/x.webp';
import download from '../../assets/letterImg/download.webp';

function Airplane({setAirplaneModal, setIsExistAirplane}) {
    const serverURL = process.env.REACT_APP_SERVER_URL;
    const navigate = useNavigate();
    const location = useLocation(); 
    const [sender, setSender] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const modalRef = useRef(null); 

    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken');

    const handleDownload = async () => {
        if (!modalRef.current) return;

        try {
            const canvas = await html2canvas(modalRef.current, { scale: 2 });
            canvas.toBlob((blob) => {
                if (blob !== null) {
                    saveAs(blob, `${sender}의 편지.png`);
                }
            });
        } catch (error) {
            // console.error("Error converting div to image:", error);
        }

    };
    useEffect(() => {
         const fetchLetterData = async () => {
            try {
                const response = await axios.get(`${serverURL}/api/v1/airplane`,
                    {
                      headers: {
                        'Authorization': `Bearer ${accessToken} ${refreshToken}`
                      },
                    }
                );
                if (response.status === 200) {
                    const { writerName, content, createdAt } = response.data.data;
                    setSender(writerName);
                    setContent(content);
                    setDate(createdAt);
                    setIsExistAirplane(false);
                } else {
                    // console.error('Failed to fetch letter data');
                }
            } catch (error) {
                // console.error('Error fetching letter data:', error);
            }
        };
        fetchLetterData();

        return () => {
            setAirplaneModal(false);
        };
    }, [location, setAirplaneModal]);

    return (
        <A.ModalBg>
            <A.ModalContainer>
                <A.Modal ref={modalRef}>
                    <A.ModalCloseButton onClick={() => setAirplaneModal(false)}><img src={x} alt='x' /></A.ModalCloseButton>
                    <A.From>from. {sender}</A.From>
                    <A.Text>{content}</A.Text>
                    <A.Date>{date}</A.Date>
                    <A.WarningMessage>익명의 편지는 보관되지 않습니다. <br />
                    편지를 내 갤러리에 저장하고 싶으시다면 저장해보세요!
                    </A.WarningMessage>
                </A.Modal>
                <A.ButtonContainer>
                    <A.DownloadButton onClick={handleDownload}><img src={download} alt='download' /> </A.DownloadButton>
                    <A.GoToLetterButton onClick={() => { navigate('/pencilholder'); setAirplaneModal(false); }}>나도 편지 쓰러 가기</A.GoToLetterButton>
                </A.ButtonContainer>
            </A.ModalContainer>
        </A.ModalBg>
    );
    }
    

export default Airplane;