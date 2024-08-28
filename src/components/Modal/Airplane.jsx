import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import * as A from './Airplane.style';
import x from '../../assets/x.png';
import download from '../../assets/letterImg/download.png';

function Airplane({setAirplaneModal, receiverId }) {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [sender, setSender] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const modalRef = useRef(null); 

    const handleDownload = async () => {
        if (!modalRef.current) return;

        try {
            const canvas = await html2canvas(modalRef.current, { scale: 2 });
            canvas.toBlob((blob) => {
                if (blob !== null) {
                    saveAs(blob, "letter.png");
                }
            });
        } catch (error) {
            console.error("Error converting div to image:", error);
        }

    };
    useEffect(() => {
        // 예시 데이터 사용 (API 요청 주석 처리)
        setSender('팟팅인간');
        setContent('2024 파리 올림픽에서 단체전 3연패에 도전하는 한국 펜싱 남자 사브르 대표팀이 8강전에서 캐나다를 꺾고 준결승전에 진출했다. 다음 상대는 개최국 프랑스다. 경기 초반 맏형 구본길이 다소 흔들렸으나 오상욱과 박상원이 차분하게 점수를 쌓았다. 구본길도 7라운드에서 프랑수아 코숑에게 5-1로 앞서며 컨디션을 되찾았다.2024 파리 올림픽에서 단체전 3연패에 도전하는 한국 펜싱 남자 사브르 대표팀이 8강전에서 캐나다를 꺾고 준결승전에 진출했다.');
        setDate('2024-08-30');

        return () => {
            setAirplaneModal(false);
        };
    }, [location, setAirplaneModal]);
    /**
    useEffect(() => {
         const fetchLetterData = async () => {
            try {
                const response = await axios.get('/api/v1/airplane/${receiverId}');
                if (response.status === 200) {
                    const { writerName, content, createdAt } = response.data.data;
                    setSender(writerName);
                    setContent(content);
                    setDate(createdAt);
                } else {
                    console.error('Failed to fetch letter data');
                }
            } catch (error) {
                console.error('Error fetching letter data:', error);
            }
        };
        fetchLetterData();

        return () => {
            setAirplaneModal(false);
        };
    }, [location, setAirplaneModal]);*/

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