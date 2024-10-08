import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../../constants/tokenInstance';
import airplaneIcon from '../../../assets/main/airplane.webp'

import { setLogin } from '../../../redux/user';
import axios from 'axios';

import * as S from './MainMobile.style'
import Airplane from '../../Modal/Airplane';
import MailAlert from '../../Modal/MailAlert';

export default function MainMobile() {
    const serverURL = process.env.REACT_APP_SERVER_URL;

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [airplaneModal, setAirplaneModal] = useState(false); // 종이비행기 모달창 on/off
    const [mailAlert, setMailAlert] = useState(false); // 편지함 알림 확인 여부
    const [isExistAirplane, setIsExistAirplane] = useState(''); // 종이비행기 존재 여부
  
  
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
  
    const date = new Date();
    const time = date.getHours();
  
    const closeMailAlert = () => {
      setMailAlert(false);
    }
  
    const getData = async() => {
      try {
        const res = await apiClient.get(`/api/v1/main`)
        let data = res.data.data;
        dispatch(setLogin({nickname: data.nickname}));
        localStorage.setItem('nickname', data.nickname);
  
        // console.log(data);
  
        let isMailAlert = data.mailAlert;
        isMailAlert ? setMailAlert(true) : setMailAlert(false);
  
        let airplane = data.airplane;
        airplane ? setIsExistAirplane(true) : setIsExistAirplane(false);
  
      } catch(err) {
        // console.log(err);
      } 
    }
  
    /* 메인화면 새 편지 알림 끄기 API */
    const patchIsReadMail = async() => {
      try {
        const res = await axios.patch(`${serverURL}/api/v1/main/update-mail-alert`, {
          mailAlert: 'false'
        }, {
          headers : {
            'Authorization' : `Bearer ${accessToken} ${refreshToken}`
          }
        })
        // console.log(res.data);
  
      } catch (err) {
        // console.log(err);
      }
    }
  
    const readMail = () => {
      closeMailAlert();
      patchIsReadMail();
      navigate('/letter');
    }
  
    useEffect(() => {
      getData();
    }, [])
  
    return (
      <>
        <S.Container time={time}>
          <S.Room>
          <S.Trash onClick={() => navigate('/trash')}/>
          <S.Airplane src={airplaneIcon} isExistAirplane={isExistAirplane} onClick={() => setAirplaneModal(true)}/>
          <S.Calendar onClick={() => navigate('/calendar')}/>
          <S.Chatbot onClick={() => navigate('/chatbot/choice')}/>
          <S.PencilHolder onClick={() => navigate('/pencilholder')}/>
          <S.Mailbox onClick={() => navigate('/letter')}/>
          </S.Room>
          {airplaneModal && <Airplane setAirplaneModal={setAirplaneModal} setIsExistAirplane={setIsExistAirplane} />} 
        </S.Container>
        <MailAlert
          isVisible={mailAlert}
          onClose={closeMailAlert}
          onConfirm={readMail}
        />
      </>    
    )
}
