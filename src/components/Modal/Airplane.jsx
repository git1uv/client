import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './Airplane.style';
import x from '../../assets/x.png';
import download from '../../assets/letterImg/download.png';

function Airplane({setAirplaneModal}) {
    const navigate = useNavigate();
    const outside = useRef();

    const handleDownload = () => {
        // 다운로드 로직 추가
        console.log("다운로드");
    };

    return (
                <A.ModalBg ref={outside} onClick={(e) => { if(e.target === outside.current) setAirplaneModal(false); }}>
                    <A.ModalContainer>
                    <A.Modal>
                        <A.ModalCloseButton onClick={() => setAirplaneModal(false)}><img src={x} alt='x' /></A.ModalCloseButton>
                    </A.Modal>
                    <A.DownloadButton onClick={handleDownload}><img src={download} alt='download' /> </A.DownloadButton>
                    <A.GoToLetterButton onClick={() => { navigate('/pencilholder'); setAirplaneModal(false); }}>나도 편지 쓰러 가기</A.GoToLetterButton>
                    </A.ModalContainer>
                </A.ModalBg>
        );
    }
    

export default Airplane;