import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import { FaHeart, FaTrash} from "react-icons/fa";
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
  const [isLetterModalVisible, setLetterModalVisible] = useState(false);
  const [mails, setMails] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);
  const [seeAllActive, setSeeAllActive] = useState(true);
  const [seeFavoritesActive, setSeeFavoritesActive] = useState(false);
  const [seeNotReadActive, setSeeNotReadActive] = useState(false);
  const userId = 1; //임시유저아이디
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedMailIds, setSelectedMailIds] = useState([]);  

  const handleLetterClick = (mail) => {
    setSelectedMail(mail);
    setLetterModalVisible(true);
  };
  const handleDeleteClick = () => {
    if (selectedMailIds.length > 0) {
      setDeleteModalVisible(true);
    }
    else{
      console.log("삭제할 편지가 없습니다.");
    }
  };

  // 예시 데이터 설정
  useEffect(() => {
    const exampleMails = [
      {
        mailId: 4,
        content: "하잉",
        chatbotType: "F",
        createdAt: "2024-08-09",
        read: false
      },
      {
        mailId: 6,
        content: "ㅎㅎ",
        chatbotType: "H",
        createdAt: "2024-08-10",
        read: false
      },
      {
        mailId: 7,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-11",
        read: true
      },
      {
        mailId: 8,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-12",
        read: true
      },
      {
        mailId: 9,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-13",
        read: true
      },
      {
        mailId: 10,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-14",
        read: true
      },
      {
        mailId: 11,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-15",
        read: true
      },
      {
        mailId: 12,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-16",
        read: true
      },
      {
        mailId: 13,
        content: "ㅎㅁㅎ",
        chatbotType: "T",
        createdAt: "2024-08-17",
        read: true
      }
    ];
    setMails(exampleMails); // 예시 데이터 설정
  }, []);

/**useEffect(() => {
    // API를 호출하여 메일 목록 가져오기
    const fetchMails = async () => {
      try {
        const response = await axios.get(`/api/v1/mail/${userId}`);
        if (response.data.code === "COMMON200") {
          setMails(response.data.data.mails); // 메일 목록 저장
        } else if (response.data.code === "MAIL5001") {
          console.error("편지 가져오기 실패:", response.data.message);
        } else {
          console.error("편지가 없습니다", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    fetchMails(); // 컴포넌트가 마운트될 때 API 호출
  }, [userId]);

 */
  const toggleFavorite = (mailId) => {
    const updatedMails = mails.map((mail) =>
      mail.mailId === mailId ? { ...mail, favorite: !mail.favorite } : mail
    );
    setMails(updatedMails);
    /**
    axios.patch(`/api/v1/mail/star/${mailId}`)
      .then(response => {
        if (response.data.code === "COMMON200") {
          console.log("즐겨찾기 추가 성공");
        }else if (response.data.code === "MAIL5001") {
          console.error("실패:", response.data.message);
        } else {
          console.error("메일이 없습니다", response.data.message);
        }
      })
      .catch(error => console.error("즐겨찾기 추가 실패", error));
    */
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

  const getFilteredMails = () => {
    if (seeFavoritesActive) {
      return mails.filter(mail => mail.favorite);
      //return favorites;
    }
    if (seeNotReadActive) {
      return mails.filter(mail => !mail.read);
    }
    return mails;
    };
  

  const handleSeeAllToggle = () => {
    setSeeAllActive(true);
    setSeeFavoritesActive(false);
    setSeeNotReadActive(false);
    };
  const handleSeeFavoritesToggle = () => {
    //fetchFavoriteMails();
    setSeeFavoritesActive(true);
    setSeeAllActive(false);
    setSeeNotReadActive(false);

    };
  const handleSeeNotReadToggle = () => {
    setSeeNotReadActive(true);
    setSeeAllActive(false);
    setSeeFavoritesActive(false);
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
  /**
   // 즐겨찾기된 메일 가져오기 (Favorites)
  const fetchFavoriteMails = async () => {
    try {
      const response = await axios.get(`/api/v1/mail/stared/${userId}`);
      if (response.data.code === "COMMON200") {
        setFavorites(response.data.data.mails); // 즐겨찾기된 메일 설정
      } else {
        console.error("즐겨찾기 조회 실패:", response.data.message);
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };
   */
    
  
  

  return (
    <L.Container>
      <L.Mailbox>
          <L.TopRow>
            <L.SeeAll seeAllActive={seeAllActive} onClick={handleSeeAllToggle} />
            <L.Favorites seeFavoritesActive={seeFavoritesActive} onClick={handleSeeFavoritesToggle} />
            {/* <L.Favorites seeFavoritesActive={seeFavoritesActive} onClick={handleSeeFavoritesToggle} /> */}
            <L.NotRead seeNotReadActive={seeNotReadActive} onClick={handleSeeNotReadToggle} />
            <L.Delete onClick={handleDeleteClick} />
          </L.TopRow>
          <L.LettersWrapper>
          <L.Letters>
          {getFilteredMails().map(mail => (
            <L.LetterContainer key={mail.mailId}>
              <L.CheckBox>
                <L.Check
                  type="checkbox"
                  checked={selectedMailIds.includes(mail.mailId)}
                  onChange={() => handleCheck(mail.mailId)}
                />
              </L.CheckBox>
              <L.Letter onClick={() => handleLetterClick(mail)}>  
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
                <L.Heart like={mail.favorite}>
                  <img 
                    src={mail.favorite ? heart : Emptyheart} 
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
      {isLetterModalVisible && selectedMail && (
          <Letter
            mailId={selectedMail.mailId}
            userId={userId}
            content={selectedMail.content}
            createdAt={selectedMail.createdAt}
            chatbotType={selectedMail.chatbotType}
            setLetterModal={setLetterModalVisible}
          />
        )}
        {isDeleteModalVisible && (
                <DeleteLetterModal
                isVisible={isDeleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={() => {
                  setMails(mails.filter(mail => !selectedMailIds.includes(mail.mailId)));
                  setDeleteModalVisible(false);
                }}
                mailId={selectedMailIds}
                />
            )}
    </L.Container>
  );
}

export default Mailbox;

