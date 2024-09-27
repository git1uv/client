import React,{ useEffect, useState } from 'react'
import * as S from "./Main.style"
import { useNavigate } from 'react-router-dom';
import  Airplane  from '../Modal/Airplane';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/user';
import moment from 'moment/moment';
import MailAlert from '../Modal/MailAlert';

export default function MainCm() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [airplaneModal, setAirplaneModal] = useState(false);
  const [airplane, setAirplane] = useState(true);
  const [mailAlert, setMailAlert] = useState(false);

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const date = new Date();
  const time = date.getHours();

  const closeMailAlert = () => {
    setMailAlert(false);
  }

  const getData = async() => {
    try {
      const res = await axios.get(`${serverURL}/api/v1/main`, {
        headers : {
          'Authorization' : `Bearer ${accessToken} ${refreshToken}`
        }
      })
      let data = res.data.data;
      dispatch(setLogin({nickname: data.nickname}));
      localStorage.setItem('nickname', data.nickname);

      let isMailAlert = data.mailAlert;

      if (isMailAlert) 
        setMailAlert(true);
      else 
        setMailAlert(false);

      console.log(data);
      // data.airplane ? setAirplane(true) : setAirplane(false);

    } catch(err) {
      console.log(err);
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
      console.log(res.data);

    } catch (err) {
      console.log(err);
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
        <S.Airplane airplane={airplane} onClick={() => setAirplaneModal(true)}/>
        <S.Calendar onClick={() => navigate('/calendar')}/>
        <S.Chatbot onClick={() => navigate('/test')}/>
        <S.PencilHolder onClick={() => navigate('/pencilholder')}/>
        <S.Mailbox onClick={() => navigate('/letter')}/>
        </S.Room>
        {airplaneModal && <Airplane setAirplaneModal={setAirplaneModal} />} 
      </S.Container>
      <MailAlert 
        isVisible={mailAlert}
        onClose={closeMailAlert}
        onConfirm={readMail}
      />
    </>    
  )
}

