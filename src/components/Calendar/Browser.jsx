import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import MiniCalendar from './MiniCalendar'
import * as P from './PCDatePage.style';
import styled from "styled-components";
import axios from 'axios';
import { FiChevronRight} from "react-icons/fi";
import SaveModal from '../Modal/Calendar/SaveModal';
import { useNavigate } from 'react-router-dom';

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
  //const [content, setContent] = useState(''); 
  const [message, setMessage] = useState('');
  //const [solutions, setSolutions] = useState([]);
  const [counselingLogs, setCounselingLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);


  // 임의의 데이터 설정
  const [content, setContent] = useState('오늘 맛있는 밥을 먹었다.');
  const [solutions, setSolutions] = useState([
    { id: 1, content: '물 많이 마시기', is_completed: false },
    { id: 2, content: '10분 명상하기', is_completed: true },
    { id: 3, content: '하루 운동하기', is_completed: false },
    { id: 4, content: '하루 운동하기', is_completed: false },
    { id: 5, content: '하루 운동하기', is_completed: false },
    { id: 6, content: '하루 운동하기', is_completed: false },
    { id: 7, content: '하루 운동하기', is_completed: false },
  ]);
  const handleCheck = (solutionId) => {
    const updatedSolutions = solutions.map(solution => {
      if (solution.id === solutionId) {
        return { ...solution, is_completed: !solution.is_completed };
      }
      return solution;
    });
    setSolutions(updatedSolutions);
  };

  const handleDelete = (solutionId) => {
    const updatedSolutions = solutions.filter(solution => solution.id !== solutionId);
    setSolutions(updatedSolutions);
  };
  /**const handleDelete = async (solutionId) => {
    try {
      const response = await axios.delete(`/api/v1/calendar/today/solution/:solutionID/delete`);
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
    const fetchDiaryData = async () => {
      /**try {
        const response = await axios.get(`/calendar/today`);
        if (response.status === 200) {
          const data = response.data.data;
          setContent(data.diary);
          setSolutions(data.solution);
          setCounselingLogs(data.counseling_log);
        }
      } catch (error) {
        setMessage(`데이터 불러오기 중 오류 발생: ${error.message}`);
      }*/
    };

    fetchDiaryData();
  }, [calendarID]);

  const handleSaveDiary = async () => {
  /**
    try {
      const response = await axios.patch(`/calendar/today/:calendarID/diary`, {
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


    /**
    const handleCheck = async (solutionID) => {
      const updatedSolutions = solutions.map(solution => {
      if (solution.id === solutionId) {
        const newCompletedState = !solution.is_completed;
        
        try {
          const response = axios.patch(`/calendar/today/solution/:solutionID/done`, {
            is_completed: newCompletedState,
          });

          if (response.status !== 200) {
            setMessage(`저장 실패: ${response.data.message}`);
            return solution; // 상태가 변경되지 않도록 유지
          }
        } catch (error) {
          setMessage(`저장 중 오류 발생: ${error.message}`);
          return solution; // 상태가 변경되지 않도록 유지
        }

        return { ...solution, is_completed: newCompletedState };
      }
      return solution;
    });
    setSolutions(updatedSolutions);
  };
};
    }*/

  return (
    <DateWrapper>
      <P.Container>
        <P.BackButton onClick={() => navigate(-1)}/>
        <MiniCalendar />
        <P.Content>
          <P.DiaryBox>
            <P.TodayEmotion>
              <P.EmotionButton>
                <P.EmotionText>오늘의 감정은 <br /> 어땠나요?</P.EmotionText>
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
              <P.Slide>
              <P.Time></P.Time>
              <P.With>대화한 친구 <br />
              <FiChevronRight />
              </P.With>
              </P.Slide>
            </P.Film>
          </P.ChatBox>
          <P.ToDoListBox>
            <P.ToDoListTopRow>
              <P.Title>추천리스트</P.Title>
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
    </DateWrapper>
  );
}

export default Browser;
