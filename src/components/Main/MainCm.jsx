import React,{ useEffect, useState } from 'react'
import * as S from "./Main.style"
import { useNavigate } from 'react-router-dom';
import  Airplane  from '../Modal/Airplane';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/user';

export default function MainCm() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [airplaneModal, setAirplaneModal] = useState(false);
  const [airplane, setAirplane] = useState(true);
  const [mailAlert, setMailAlert] = useState();

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const getData = async() => {
    try {
      const res = await axios.get(`${serverURL}/api/v1/main`, {
        headers : {
          'Authorization' : `Bearer ${accessToken} ${refreshToken}`
        }
      })
      let data = res.data.data;
      dispatch(setLogin({nickname: data.nickname}));

      console.log(data);
      // data.airplane ? setAirplane(true) : setAirplane(false);

    } catch(err) {
      console.log(err);
    }
  }
 
  useEffect(() => {
    getData();
  }, [])

  return (
    <S.Container>
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
    
  )
}
