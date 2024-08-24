import styled from 'styled-components';
import {bigFirework, smallFirework, buttonBack, film, note, stickerDown, stickerUp, miniTape, check} from '../../assets/CalendarImg/icons';
import x from '../../assets/x.png';

export const BackButton = styled.div`

`;

export const Container = styled.div`
  display: flex;
  position: relative;
  background-image: url(${note});
  background-size: contain;
  background-repeat: no-repeat;
  flex-direction: row;
  margin: 10.4vh 0 0;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 943px;
    height: 600px;
  }
  @media (min-width: 1201px) {
    width: 1327px;
    height: 844px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: flex-start; 
  background-color: transparent;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 495px;
    height: 506px;
    margin: 40px 23px;
  }
  @media (min-width: 1201px) {
    width: 680px;
    height: 700px;
    margin: 66px 37px;
  }
`;

export const DiaryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: flex-start;
  width: 100%;
  height: 27%;
  background-color: #EEECE3;
`;

export const Diary = styled.div`
  width: 58%;
  height: 100%;
  flex-direction: column;
`;

export const TodayEmotion = styled.div`
  position: relative;    
  width: 27%;
  height: 100%;
  background-image: url(${stickerDown});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const OverlayImage = styled.div`
  position: absolute;
  bottom: 11.5%;
  right: 6%;
  width: 55%;
  height: 30%; 
  background-image: url(${stickerUp});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const EmotionButton = styled.div`
  position: absolute;
  top: 21.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 59.5%;
  background-color: #D9D9D9;
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
  margin-top: 5%;
  width: 100%;
`;

export const ChatTopRow = styled(TopRow)`
  justify-content: flex-start;
  height: 15%;
  margin-top: 0;
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
  margin-right: 2%;
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
  margin-right: 1%;
`;

export const Text = styled.div`
  width: 100%;
  height: 43%;
`;

export const NotesTextarea = styled.textarea`
  width: 100%;
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
  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (min-width: 1201px) and (max-width: 1440px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1441px) {
    font-size: 1.14rem;
  }
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
  width: 100%;
  height: 33%;
  background-color: #EEECE3;
  position: relative;
`;
export const Explain = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 0.94rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
`;
export const Film = styled.div`
  background-image: url(${film});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60%;
  height: 85%;
  position: relative;
  left: -3%;
`;
export const Slide = styled.div`
border-radius: 5px;
background: #D9D9D9;
height: 60%;
width: 60%;
position: relative;
top: 25%;
left: 20%;
`;
export const With = styled.div`

`;
export const Time = styled.div`

`;
export const ToDoListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  width: 100%;
  height: 40%;
  background-color: #EEECE3;
`;
export const ToDoList = styled.div`
  background-color: white;
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 3% 0 3% 3%;
  position: relative;
  overflow-y: auto;
  /* 스크롤바 전체 스타일 */
  &::-webkit-scrollbar {
    width: 70px;
  }

  /* 스크롤바 트랙 스타일 */
  &::-webkit-scrollbar-track {
    background-color: #F4F2EB;
    border-radius: 30px;
    border-top: 5px solid white; 
    border-bottom: 5px solid white; 
    border-left: 30px solid white;
    border-right: 30px solid white;
  }

  /* 스크롤바 핸들(thumb) 스타일 */
  &::-webkit-scrollbar-thumb {
    background-color: #739B8B;
    border-radius: 30px;
    border-left: 30px solid white;
    border-right: 30px solid white;
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
  height: 90%;
  width: 1.25rem;
  background-image: url(${x});
  background-size: contain;
  background-repeat: no-repeat;
`;