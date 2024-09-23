import React, { useState, useEffect } from 'react';
import CustomSlider from './CustomSlider';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import * as M from './MobileDatePage.style';
import styled from "styled-components";
import axios from 'axios';
import SaveModal from '../Modal/Calendar/SaveModal';
import EmotionModal from '../Modal/Calendar/EmotionModal';
import GifModal from '../Modal/Calendar/GifModal'; 
import { useNavigate } from 'react-router-dom';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16} from '../../assets/CalendarImg/icons';

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function Mobile({date}) {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState('none');  
  const [content, setContent] = useState(''); 
  const [message, setMessage] = useState('');
  const [calendarId, setCalendarId] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [counselingLogs, setCounselingLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEmotionModal, setShowEmotionModal] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

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

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      console.error("토큰이 없습니다.");
      return;
    }
    const fetchDiaryData = async () => {
      try {
        const year = moment(date).format('YYYY');
        const month = moment(date).format('MM');
        const day = moment(date).format('DD');

        const response = await axios.get(`${serverURL}/api/v1/calendar/today/${year}/${month}/${day}`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken} ${refreshToken}`
            },
          }
        );
        if (response.data.code === "200") {
          const data = response.data.data;
          setCalendarId(data.calendarId);
          setEmotion(data.emotion);
          setContent(data.diary);
          setSolutions(data.solution);
          setCounselingLogs(data.counselingLog);
        } else {
        setMessage(`데이터 불러오기 실패: ${response.data.message}`);
      }
      } catch (error) {
        setMessage(`데이터 불러오기 중 오류 발생: ${error.message}`);
      }
    };

    fetchDiaryData();
  }, [date]);

  const handleSaveDiary = async () => {
    try {
      const response = await axios.patch(`${serverURL}/api/v1/calendar/today/${calendarId}/diary`, {
        content: content,
      },{
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        },
      });

      if (response.status === 200) {
        setMessage('저장되었습니다.');
        setShowModal(true);
      } else {
        setMessage(`저장 실패: ${response.data.message}`);
      }
    } catch (error) {
      setMessage(`저장 중 오류 발생: ${error.message}`);
    } 
  };

  const handleEmotionClick = () => {
    setShowEmotionModal(true);
  };
  const emotionImages = {
    laughing: img1,
    excited: img2,
    passionate: img3,
    peaceful: img4,
    angry: img5,
    crying: img6,
    dissatisfied: img7,
    disappointed: img8,
    inlove: img9,
    sick: img10,
    proud: img11,
    tired: img12,
    surprised: img13,
    anxious: img14,
    happy: img15,
    embarrassed: img16,
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

  const handleCheck = async (solutionId) => {
    try {
      const response = await axios.patch(`${serverURL}/api/v1/calendar/today/solution/${solutionId}/done`, {
        completed: !solutions.find(solution => solution.id === solutionId).completed.toString(),
    },{
      headers: {
        'Authorization': `Bearer ${accessToken} ${refreshToken}`
      },
    });
    if (response.data.code === '200') {
      const updatedSolutions = solutions.map(solution => {
        if (solution.id === solutionId) {
          return { ...solution, completed: !solution.completed };
        }
        return solution;
      });

      setSolutions(updatedSolutions);
      if (updatedSolutions.every(solution => solution.completed)) {
        setShowGif(true);
      }
    } else {
      setMessage(`저장 실패: ${response.data.message}`);
    }
  } catch (error) {
    setMessage(`저장 중 오류 발생: ${error.message}`);
  }
};

  return (
    <DateWrapper>
      <M.Container>
        <M.BackButton onClick={() => navigate(-1)}/>
        <M.Content>
          <M.DiaryBox>
            <M.TodayEmotion onClick={handleEmotionClick}>
              <M.EmotionButton emotion={emotion} emotionImage={currentEmotionImage}>
                {emotion === 'none' && <M.EmotionText>오늘의 감정은 <br /> 어땠나요?</M.EmotionText>}
              </M.EmotionButton>
              <M.OverlayImage />
            </M.TodayEmotion>
            <M.Diary>
              <M.TopRow>
                <M.Title>한 줄 일기</M.Title>
                <M.SaveButton onClick={handleSaveDiary}>저장하기</M.SaveButton>
              </M.TopRow>
              <M.Text>
                <M.NotesTextarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="오늘 하루를 기록해보세요" 
                maxLength={45}  
                />
                <M.CharCount>
                  {content.length}/{45}
                </M.CharCount>
              </M.Text>
            </M.Diary>
          </M.DiaryBox>
          <M.ChatBox>
            <M.ChatTopRow>
              <M.Title>대화 갈피</M.Title>
              <M.Explain>이전 대화 기록을 확인할 수 있어요</M.Explain>
            </M.ChatTopRow>
            <M.Film>
            <CustomSlider logs={counselingLogs || []} getChatbotName={getChatbotName} />
            </M.Film>
          </M.ChatBox>
          <M.ToDoListBox>
            <M.ToDoListTopRow>
              <M.Title>추천리스트</M.Title>
              <M.Explain>삭제 버튼 누를시 바로 삭제되니 주의하세요</M.Explain>
            </M.ToDoListTopRow>
            <M.ToDoList>
            <M.ToDoListContainer>
            {solutions.map((solution) => (
            <M.ToDoItem key={solution.id}>
                  <M.CheckBox
                    type="checkbox"
                    checked={solution.is_completed}
                    onChange={() => handleCheck(solution.id)}
                  />
                  <M.Todo completed={solution.is_completed}>
                    {solution.content}
                  </M.Todo>
                  <M.DeleteButton onClick={() => handleDelete(solution.id)} />
                </M.ToDoItem>
            ))}
            </M.ToDoListContainer>
            </M.ToDoList>
          </M.ToDoListBox>
        </M.Content>
      </M.Container>
      {showModal && <SaveModal isVisible={showModal} onClose={() => setShowModal(false)} />}
      {showEmotionModal && <EmotionModal isVisible={showEmotionModal} onClose={() => setShowEmotionModal(false)} date={date} setEmotion={setEmotion} />}
      {showGif && (
        <GifModal 
          isVisible={showGif} 
          onClose={() => setShowGif(false)} 
        />
      )}
    </DateWrapper>
  );
}

export default Mobile;