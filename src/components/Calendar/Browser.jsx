import React, { useState, useEffect, useRef } from 'react';
import CustomSlider from './CustomSlider';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MiniCalendar from './MiniCalendar';
import * as P from './PCDatePage.style';
import styled from "styled-components";
import axios from 'axios';
import SaveModal from '../Modal/Calendar/SaveModal';
import EmotionModal from '../Modal/Calendar/EmotionModal';
import { useNavigate } from 'react-router-dom';
import GifModal from '../Modal/Calendar/GifModal'; 
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16} from '../../assets/CalendarImg/icons';

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function Browser() {
  const navigate = useNavigate();
  const { date } = useParams();
  const formattedDate = moment(date).format('YYYY년 MM월 DD일');
  const { calendarID } = useParams(); 
  const [emotion, setEmotion] = useState('none');  
  const [content, setContent] = useState(''); 
  const [message, setMessage] = useState('');
  const [solutions, setSolutions] = useState([]);
  const [counselingLogs, setCounselingLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEmotionModal, setShowEmotionModal] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const handleCheck = async (solutionId) => {
    const updatedSolutions = solutions.map(solution => {
      if (solution.id === solutionId) {
        return { ...solution, is_completed: !solution.is_completed };
      }
      return solution;
    });
    setSolutions(updatedSolutions);

    if (updatedSolutions.every((solution) => solution.is_completed)) {
      setShowGif(true);
    }
  };

  const handleDelete = (solutionId) => {
    const updatedSolutions = solutions.filter(solution => solution.id !== solutionId);
    setSolutions(updatedSolutions);
  };
  /**const handleDelete = async (solutionId) => {
    try {
      const response = await axios.delete(`/api/v1/calendar/today/solution/${solutionId}/delete`);
      if (response.status === 200) {
        setSolutions(solutions.filter(solution => solution.id !== solutionId));
        setMessage('해결책이 삭제되었습니다.');
      } else {
        setMessage(`삭제 실패: ${response.data.message}`);
      }
    } catch (error) {
      setMessage(`삭제 중 오류 발생: ${error.message}`);
    }
  };
 */

  /**
  useEffect(() => {
    const fetchDiaryData = async () => {
      try {
        const year = moment(date).format('YYYY');
        const month = moment(date).format('MM');
        const day = moment(date).format('DD');

        const response = await axios.get(`/api/v1/calendar/today/${year}/${month}/${day}`);
        if (response.status === 200) {
          const data = response.data.data;
          setEmotion(data.emotion);
          setContent(data.diary);
          setSolutions(data.solution);
          setCounselingLogs(data.counselinglog);
        } else {
        setMessage(`데이터 불러오기 실패: ${response.data.message}`);
      }
      } catch (error) {
        setMessage(`데이터 불러오기 중 오류 발생: ${error.message}`);
      }
    };

    fetchDiaryData();
  }, [calendarID]);*/

  const handleSaveDiary = async () => {
    setShowModal(true);
  /**
    try {
      const response = await axios.patch(`/calendar/today/${calendarID}/diary`, {
        content: content,
      });

      if (response.status === 200) {
        setMessage('저장되었습니다.');
        setShowModal(true);
      } else {
        setMessage(`저장 실패: ${response.data.message}`);
      }
    } catch (error) {
      setMessage(`저장 중 오류 발생: ${error.message}`);
    } */
  };

  const handleEmotionClick = () => {
    setShowEmotionModal(true);
  };
  const emotionImages = {
    Laughing: img1,
    Excited: img2,
    Passionate: img3,
    Peaceful: img4,
    Angry: img5,
    Crying: img6,
    Dissatisfied: img7,
    Disappointed: img8,
    Inlove: img9,
    Sick: img10,
    Proud: img11,
    Tired: img12,
    Surprised: img13,
    Anxious: img14,
    Happy: img15,
    Embarrassed: img16,
  };

  const currentEmotionImage = emotion !== 'none' ? emotionImages[emotion] : null;

  const getChatbotName = (chatbotType) => {
    switch (chatbotType) {
      case 'F':
        return '심마음';
      case 'T':
        return '뉴러니';
      case 'H':
        return '반바니';
      default:
        return '반바니';
    }
  };

    /**
    const handleCheck = async (solutionId) => {
      const updatedSolutions = solutions.map(solution => {
      if (solution.id === solutionId) {
        return { ...solution, is_completed: !solution.is_completed };
      }
      return solution;
    });
    setSolutions(updatedSolutions);
        
        try {
          const solution = updatedSolutions.find(solution => solution.id === solutionId);
          const response = await axios.patch(`/api/v1/calendar/today/solution/${solutionId}/done`, {
           is_completed: solution.is_completed.toString(),
        });
          if (response.status !== 200) {
            setMessage(`저장 실패: ${response.data.message}`);
            setSolutions(solutions);
          } else if (updatedSolutions.every((solution) => solution.is_completed)) {
            setShowGif(true);
          }
        } catch (error) {
          setMessage(`저장 중 오류 발생: ${error.message}`);
          setSolutions(solutions);
        }
};
    }*/

  return (
    <DateWrapper>
      <P.Container>
        <P.BackButton onClick={() => navigate(-1)}/>
        <MiniCalendar />
        <P.Content>
          <P.DiaryBox>
            <P.TodayEmotion onClick={handleEmotionClick}>
              <P.EmotionButton emotion={emotion} emotionImage={currentEmotionImage}>
                {emotion === 'none' && <P.EmotionText>오늘의 감정은 <br /> 어땠나요?</P.EmotionText>}
              </P.EmotionButton>
              <P.OverlayImage />
            </P.TodayEmotion>
            <P.Diary>
              <P.TopRow>
                <P.Title>한 줄 일기</P.Title>
                <P.SaveButton onClick={handleSaveDiary}>저장하기</P.SaveButton>
              </P.TopRow>
              <P.Text>
                <P.NotesTextarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="오늘 하루를 기록해보세요" 
                maxLength={45}  
                />
                <P.CharCount>
                  {content.length}/{45}
                </P.CharCount>
              </P.Text>
            </P.Diary>
          </P.DiaryBox>
          <P.ChatBox>
            <P.ChatTopRow>
              <P.Title>대화 갈피</P.Title>
              <P.Explain>이전 대화 기록을 확인할 수 있어요</P.Explain>
            </P.ChatTopRow>
            <P.Film>
            <CustomSlider logs={counselingLogs} getChatbotName={getChatbotName} />
            </P.Film>
          </P.ChatBox>
          <P.ToDoListBox>
            <P.ToDoListTopRow>
              <P.Title>추천리스트</P.Title>
              <P.Explain>삭제 버튼 누를시 바로 삭제되니 주의하세요</P.Explain>
            </P.ToDoListTopRow>
            <P.ToDoList>
            <P.ToDoListContainer>
            {solutions.map((solution) => (
            <P.ToDoItem key={solution.id}>
                  <P.CheckBox
                    type="checkbox"
                    checked={solution.is_completed}
                    onChange={() => handleCheck(solution.id)}
                  />
                  <P.Todo completed={solution.is_completed}>
                    {solution.content}
                  </P.Todo>
                  <P.DeleteButton onClick={() => handleDelete(solution.id)} />
                </P.ToDoItem>
            ))}
            </P.ToDoListContainer>
            </P.ToDoList>
          </P.ToDoListBox>
        </P.Content>
      </P.Container>
      {showModal && <SaveModal isVisible={showModal} onClose={() => setShowModal(false)} />}
      {showEmotionModal && <EmotionModal isVisible={showEmotionModal} onClose={() => setShowEmotionModal(false)} calendarID={calendarID} setEmotion={setEmotion} />}
      {showGif && (
        <GifModal 
          isVisible={showGif} 
          onClose={() => setShowGif(false)} 
        />
      )}
    </DateWrapper>
  );
}

export default Browser;
