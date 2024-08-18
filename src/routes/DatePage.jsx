import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MiniCalendar from '../components/Calendar/MiniCalendar'
import * as P from '../components/Calendar/PCDatePage.style';
import styled from "styled-components";
const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;
function DatePage() {
  const { date } = useParams();
  const formattedDate = moment(date).format('YYYY년 MM월 DD일');
  

  return (
    <DateWrapper>
      <P.BackButton></P.BackButton>
      <P.Container>
        <MiniCalendar />
        <P.Tape />
        <P.Content>
          <P.DiaryBox>
            <P.TodayEmotion></P.TodayEmotion>
            <P.Diary>
              <P.TopRow className='diary'>
                <P.Title></P.Title>
                <P.SaveButton></P.SaveButton>
              </P.TopRow>
              <P.Text></P.Text>
            </P.Diary>
          </P.DiaryBox>
          <P.ChatBox>
            <P.TopRow className='chat'>
              <P.Title></P.Title>
              <P.Explain></P.Explain>
            </P.TopRow>
            <P.Film>
              <P.Slide>
                <P.Slide></P.Slide>
                <P.Time></P.Time>
              </P.Slide>
            </P.Film>
          </P.ChatBox>
          <P.ToDoListBox>
            <P.TopRow>
              <P.Title></P.Title>
            </P.TopRow>
            <P.ToDoList>
              <P.CheckBox></P.CheckBox>
              <P.Todo></P.Todo>
              <P.DeleteButton></P.DeleteButton>
              <P.Scroll></P.Scroll>
            </P.ToDoList>
          </P.ToDoListBox>
        </P.Content>
      </P.Container>
    </DateWrapper>
  );
}

export default DatePage;
