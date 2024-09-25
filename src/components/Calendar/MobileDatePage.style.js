import styled from 'styled-components';
import {buttonBack, film, note, stickerDown, stickerUp, check} from '../../assets/CalendarImg/icons';
import x from '../../assets/x.png';

export const BackButton = styled.div`
  display: flex;
  position: absolute;
  background-image: url(${buttonBack});
  background-size: contain;
  background-repeat: no-repeat;
  width: 3.75rem;
  height: 4.3rem;
  top: -52px;
  left: 20px;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  background-image: url(${note});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  flex-direction: column;
  margin: 35vh 0 0;
  width: 100%;
  height: auto;
  @media (min-width: 431px){
    margin: 30rem 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: flex-start; 
  background-color: transparent;
  width: 90%;
  height: 100%;
  margin: 2%;
`;

export const DiaryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  width: 100%;
  height: 293px;
  background-color: transparent;
`;

export const Diary = styled.div`
  width: 90%;
  height: 135px;
  flex-direction: column;
  margin-left: 3.5%;
`;

export const TodayEmotion = styled.div`
  position: relative;    
  width: 158px;
  height: 158px;
  background-image: url(${stickerDown});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const OverlayImage = styled.div`
  position: absolute;
  bottom: 15px;
  right: 9px;
  width: 55%;
  height: 30%; 
  background-image: url(${stickerUp});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const EmotionButton = styled.div`
  position: absolute;
  top: 37px;
  left: 79px;
  transform: translateX(-50%);
  width: 92px;
  height: 92px;
  background-color: ${({ emotion }) => emotion === 'none' ? '#D9D9D9' : 'white'};
  background-image: ${({ emotionImage }) => emotionImage !== 'none' ? `url(${emotionImage})` : 'none'};
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmotionText = styled.div`
  text-align: center;
  color: #4C434E;
  font-size: 0.75rem;
  font-family: Pretendard;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  height: 30%;
  width: 100%;
`;

export const ChatTopRow = styled(TopRow)`
  justify-content: flex-start;
  height: 15%;
`;
export const ToDoListTopRow = styled(ChatTopRow)`
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const Title = styled.div`
  color: #ED6243;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  margin-right: 4%;
`;

export const SaveButton = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  color: #739B8B;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid #739B8B;
  background: #F4F2EB;
  width: 20%;
  height: 50%;
`;

export const Text = styled.div`
  width: 100%;
  height: 43%;
`;

export const NotesTextarea = styled.textarea`
  width: 97%;
  height: 90%;
  background-image:
    repeating-linear-gradient(
      transparent, 
      transparent 1.75rem, 
      #739B8B 1.75rem, #739B8B 1.875rem, 
      transparent 1.875rem);
  color: #000;
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  border: none;
  resize: none; 
  &:focus {
    outline: none;
  }
  background-color: transparent;
`;

export const CharCount = styled.div`
  font-size: 0.75rem;
  text-align: right;
  color: #ADADA3;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  width: 96.5%;
  height: 32vh;
  background-color: transparent;
  position: relative;
  margin-left: 3.5%;
`;
export const Explain = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
`;
export const Film = styled.div`
  background-image: url(${film});
  background-size: contain;
  background-repeat: no-repeat;
  width: 306px;
  height: 167px;
  position: relative;
  left: -5.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToDoListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  width: 96.5%;
  height: 30vh;
  background-color: transparent;
  margin: 0 0 5% 3.5%;
`;
export const ToDoList = styled.div`
  background-color: white;
  width: 90%;
  height: 60%;
  display: flex;
  padding: 3% 0 3% 3%;
  position: relative;
`;
export const ToDoListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 94%;
  overflow-y: auto;
  /* 스크롤바 전체 스타일 */
  &::-webkit-scrollbar {
    width: 48px;
  }

  /* 스크롤바 트랙 스타일 */
  &::-webkit-scrollbar-track {
    background-color: #F4F2EB;
    border-radius: 20px;
    border-left: 20px solid white;
    border-right: 20px solid white;
  }

  /* 스크롤바 핸들(thumb) 스타일 */
  &::-webkit-scrollbar-thumb {
    background-color: #739B8B;
    border-radius: 20px;
    background-clip: padding-box;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;
export const ToDoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2%;
  width: 100%;
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  border: 3px solid #739B8B;
  width: 1.75rem;
  height: 1.75rem;

  &:checked {
    background-image: url(${check});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #739B8B;
  }
`;
export const Todo = styled.div`
  width: 90%; 
  margin: 0 1.5%;
  font-family: SeoulHangang;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => (props.completed ? "#9C9C9C" : "#4C434E")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
export const DeleteButton = styled.div`
  border: none;
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 2%;
  background-image: url(${x});
  background-size: contain;
  background-repeat: no-repeat;
`;