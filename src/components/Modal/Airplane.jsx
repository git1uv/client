import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as A from './Airplane.style';
import x from '../../assets/x.png';
import download from '../../assets/letterImg/download.png';

function Airplane({setAirplaneModal}) {
    const navigate = useNavigate();
    const location = useLocation(); 

    const [sender, setSender] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    const handleDownload = () => {
        // 다운로드 로직 추가
        console.log("다운로드");
    };

    useEffect(() => {
        return () => {
            setAirplaneModal(false);
        };
    }, [location, setAirplaneModal]);

    return (
                <A.ModalBg>
                    <A.ModalContainer>
                    <A.Modal>
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