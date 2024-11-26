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
import Resizer from 'react-image-file-resizer';
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, note} from '../../assets/CalendarImg/icons';

const images = [
  { src: img1, name: 'laughing' },
  { src: img2, name: 'excited' },
  { src: img3, name: 'passionate' },
  { src: img4, name: 'peaceful' },
  { src: img5, name: 'angry' },
  { src: img6, name: 'crying' },
  { src: img7, name: 'dissatisfied' },
  { src: img8, name: 'disappointed' },
  { src: img9, name: 'inlove' },
  { src: img10, name: 'sick' },
  { src: img11, name: 'proud' },
  { src: img12, name: 'tired' },
  { src: img13, name: 'surprised' },
  { src: img14, name: 'anxious' },
  { src: img15, name: 'happy' },
  { src: img16, name: 'embarrassed' },
];

const fetchBlobFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function Browser({ date }) {
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
  const [optimizedImages, setOptimizedImages] = useState({});

  const optimizeImages = async () => {
    const resizedImages = {};
    const imageList = [
      { name: 'background', src: note, maxWidth: 1920, maxHeight: 1200 },
      ...images.map((img) => ({ ...img, maxWidth: 70, maxHeight: 70 })), 
    ];
    for (const img of imageList) {
      try {
        const blob = await fetchBlobFromUrl(img.src);
        const resizedImage = await new Promise((resolve) => {
          Resizer.imageFileResizer(
            blob,
            img.maxWidth,
            img.maxHeight,
            'AVIF',
            90,
            0,
            (uri) => resolve(uri),
            'blob'
          );
        });
        resizedImages[img.name] = URL.createObjectURL(resizedImage);
      } catch (error) {
        console.error(`Failed to resize image ${img.name}:`, error);
      }
    }
    setOptimizedImages(resizedImages);
  };

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

  const handleDelete = async (solutionId) => {
    try {
      const response = await axios.delete(`${serverURL}/api/v1/calendar/today/solution/${solutionId}/delete`,{
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        },
      });
      if (response.data.code === '200') {
        setSolutions(solutions.filter(solution => solution.id !== solutionId));
        setMessage('해결책이 삭제되었습니다.');
      } else {
        setMessage(`삭제 실패: ${response.data.message}`);
      }
    } catch (error) {
      setMessage(`삭제 중 오류 발생: ${error.message}`);
    }
  };

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      // console.error("토큰이 없습니다.");
      return;
    }
    const loadImages = async () => {
      await optimizeImages();
    };
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
    loadImages();
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

      if (response.data.code === '200') {
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

  const currentEmotionImage = emotion !== 'none' ? optimizedImages[emotion] : null;

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

if (!optimizedImages.background) {
  return <div>Loading...</div>;
}

  return (
    <DateWrapper>
      <P.Container
        background={optimizedImages.background}
      >
        <P.BackButton onClick={() => navigate(`/calendar`)}/>
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
            <CustomSlider logs={counselingLogs || []} getChatbotName={getChatbotName} />
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
      {showEmotionModal && <EmotionModal isVisible={showEmotionModal} onClose={() => setShowEmotionModal(false)} calendarId={calendarId} setEmotion={setEmotion} />}
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
