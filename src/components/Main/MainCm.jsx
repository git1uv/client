import React,{ useState } from 'react'
import * as S from "./Main.style"
import { useNavigate } from 'react-router-dom';
import  Airplane  from '../Modal/Airplane';

export default function MainCm() {
  const navigate = useNavigate();
  const [airplaneModal, setAirplaneModal] = useState(false);

  return (
    <S.Container>
      <S.Room>
      <S.Trash onClick={() => navigate('/trash')}/>
      <S.Airplane onClick={() => setAirplaneModal(true)}/>
      <S.Calendar onClick={() => navigate('/calendar')}/>
      <S.Chatbot onClick={() => navigate('/test')}/>
      <S.PencilHolder onClick={() => navigate('/pencilholder')}/>
      <S.Mailbox onClick={() => navigate('/letter')}/>
      </S.Room>
      {airplaneModal && <Airplane setAirplaneModal={setAirplaneModal} />}
    </S.Container>
    
  )
}
