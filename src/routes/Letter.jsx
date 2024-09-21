import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import Letter from '../components/Modal/Letter/ChatLetter';
import styled from "styled-components";
import axios from 'axios';
import {Fface, Tface, Hface, heart, Emptyheart} from '../assets/letterImg/icons';
import DeleteLetterModal from '../components/Modal/Letter/DeleteLetter';

const LetterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEECE3;
  height: 100vh;
  weight: 100vw;
`;

function Mailbox() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [isLetterModalVisible, setLetterModalVisible] = useState(false);
  const [mails, setMails] = useState([]);
  const [seeAllActive, setSeeAllActive] = useState(true);
  const [seeFavoritesActive, setSeeFavoritesActive] = useState(false);
  const [seeNotReadActive, setSeeNotReadActive] = useState(false);
  const [mailDetails, setMailDetails] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedMailIds, setSelectedMailIds] = useState([]);  

  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken');

  const fetchMails = async (listType = '') => {
    try {
      const response = await axios.get(`${serverURL}/api/v1/mail/list${listType ? `?listType=${listType}` : ''}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken} ${refreshToken}`
          },
        }
      );
      if (response.data.code === "200") {
        setMails(response.data.data.mails);
      } else if (response.data.code === "MAIL5001") {
        console.error("편지 가져오기 실패:", response.data.message);
      } else {
        console.error("편지가 없습니다:", response.data.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  const handleLetterClick = async (mailId) => {
    try {
      const response = await axios.get(`${serverURL}/api/v1/mail?mailId=${mailId}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken} ${refreshToken}`
          },
        });
      if (response.data.code === "200") {
        setMailDetails(response.data.data); 
        setLetterModalVisible(true); 
      
        if (seeNotReadActive) {
          fetchMails('notRead');
        } else if (seeFavoritesActive) {
          fetchMails('starred');
        } else {
          fetchMails('all');
        }
      } else if(response.data.code === "MAIL5001"){
        console.error("편지 가져오기 실패:", response.data.message);
      } else {
        console.error("편지가 없습니다:", response.data.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  const toggleFavorite = async (mailId) => {
    try {
      const response = await axios.patch(`${serverURL}/api/v1/mail/star/${mailId}`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken} ${refreshToken}`,
        },
      });

      if (response.data.code === '200') {
        console.log('즐겨찾기 상태 변경 성공');
        const updatedMails = mails.map((mail) =>
          mail.mailId === mailId ? { ...mail, starred: !mail.starred } : mail
        );
        setMails(updatedMails);
      } else if (response.data.code === "MAIL5001") {
        console.error("실패:", response.data.message);
        setMails(mails);
      } else {
        console.error("메일이 없습니다", response.data.message);
        setMails(mails);
      }
    } catch (error) {
      console.error('즐겨찾기 요청 중 오류 발생:', error);
      setMails(mails);
    }
  
  };


  const getChatbotImage = (chatbotType) => {
      switch (chatbotType) {
        case 'F':
          return Fface;
        case 'T':
          return Tface;
        case 'H':
          return Hface;
        default:
          return Hface;
      }
    };
  
  const handleSeeAllToggle = () => {
    setSeeAllActive(true);
    setSeeFavoritesActive(false);
    setSeeNotReadActive(false);
    fetchMails('all');
  };
  const handleSeeFavoritesToggle = () => {
    setSeeFavoritesActive(true);
    setSeeAllActive(false);
    setSeeNotReadActive(false);
    fetchMails('starred');
  }; 
  const handleSeeNotReadToggle = () => {
    setSeeNotReadActive(true);
    setSeeAllActive(false);
    setSeeFavoritesActive(false);
    fetchMails('notRead');
  };

  const handleCheck = (mailId) => {
    setSelectedMailIds((prevSelected) => {
      if (prevSelected.includes(mailId)) {
        return prevSelected.filter(id => id !== mailId);
      } else {
        return [...prevSelected, mailId];
      }
    });
  };

  const handleDelete = async () => {
    try {
      const response = await axios.post(`${serverURL}/api/v1/mail/delete`, {
        mailIds: selectedMailIds,
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        },
      });

      if (response.data.code === "200") {
        setMails(mails.filter(mail => !selectedMailIds.includes(mail.mailId)));
        setDeleteModalVisible(false);
      } else {
        console.error('실패:', response.data.message);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };


  useEffect(() => {
    fetchMails();
  }, []);
  
  return (
    <LetterWrapper>
    <L.Container>
      <L.Mailbox>
          <L.TopRow>
            <L.SeeAll seeAllActive={seeAllActive} onClick={handleSeeAllToggle} />
            <L.Favorites seeFavoritesActive={seeFavoritesActive} onClick={handleSeeFavoritesToggle} />
            <L.NotRead seeNotReadActive={seeNotReadActive} onClick={handleSeeNotReadToggle} />
            <L.Delete onClick={() => setDeleteModalVisible(true)}/>
          </L.TopRow>
          <L.LettersWrapper>
          <L.Letters>
          {mails.map(mail => (
            <L.LetterContainer key={mail.mailId}>
              <L.CheckBox>
                <L.Check
                  type="checkbox"
                  checked={selectedMailIds.includes(mail.mailId)}
                  onChange={() => handleCheck(mail.mailId)}
                />
              </L.CheckBox>
              <L.Letter onClick={() => handleLetterClick(mail.mailId)}>  
                <L.ChatBox>
                  <L.Chatbot>
                    <img src={getChatbotImage(mail.chatbotType)} alt="chatbot" />
                    {!mail.read && <L.RedDot></L.RedDot>}
                  </L.Chatbot>
                </L.ChatBox>
                <L.TextBox>
                  <L.Title>{mail.content}</L.Title>
                  <L.Date>{mail.createdAt}</L.Date>
                </L.TextBox>
                <L.HeartBox>
                <L.Heart like={mail.starred}>
                  <img 
                    src={mail.starred ? heart : Emptyheart} 
                    onClick={(e) => {
                      e.stopPropagation(); // 이벤트 전파를 막아 모달이 뜨지 않게 함
                      toggleFavorite(mail.mailId);
                    }}  
                    alt="favorite"
                  />
                </L.Heart>
                </L.HeartBox>
              </L.Letter>
            </L.LetterContainer>
          ))}
          </L.Letters>
          </L.LettersWrapper>
      </L.Mailbox>
      {isLetterModalVisible && mailDetails && (
          <Letter
            mailId={mailDetails.mailId}
            content={mailDetails.content}
            createdAt={mailDetails.createdAt}
            chatbotType={mailDetails.chatbotType}
            setLetterModal={setLetterModalVisible}
            handleDelete={handleDelete} 
          />
        )}
        {isDeleteModalVisible && (
                <DeleteLetterModal
                isVisible={isDeleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={handleDelete}
                />
            )}
    </L.Container>
    </LetterWrapper>
  );
}

export default Mailbox;

