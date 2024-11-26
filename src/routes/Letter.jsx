import React, { useState, useEffect } from 'react';
import * as L from "../components/Letter/Letter.style";
import Letter from '../components/Modal/Letter/ChatLetter';
import styled from "styled-components";
import axios from 'axios';
import {Fface, Tface, Hface, heart, Emptyheart, all, notRead, bg, mailbox, mailbox_mobile, trash} from '../assets/letterImg/icons';
import DeleteLetterModal from '../components/Modal/Letter/DeleteLetter';
import CheckLetterModal from '../components/Modal/Letter/NotCheckLetter';
import Resizer from 'react-image-file-resizer';

const fetchBlobFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

const resizeImage = (file, maxWidth, maxHeight, format = 'AVIF') =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      format,
      90,
      0,
      (uri) => resolve(uri),
      'blob'
    );
  });

const optimizeImages = async () => {
  const resizedImages = {};
  const imageList = [
    { name: 'bg', src: bg, maxWidth: 1920, maxHeight: 1200 },
    { name: 'mailbox', src: mailbox, maxWidth: 1920, maxHeight: 1200 },
    { name: 'mailbox_mobile', src: mailbox_mobile, maxWidth: 430, maxHeight: 900 },
    { name: 'trash', src: trash, maxWidth: 100, maxHeight: 100 },
    { name: 'Fface', src: Fface, maxWidth: 100, maxHeight: 200 },
    { name: 'Tface', src: Tface, maxWidth: 100, maxHeight: 200 },
    { name: 'Hface', src: Hface, maxWidth: 100, maxHeight: 200 },
    { name: 'heart', src: heart, maxWidth: 150, maxHeight: 150 },
    { name: 'Emptyheart', src: Emptyheart, maxWidth: 150, maxHeight: 150 },
    { name: 'notRead', src: notRead, maxWidth: 60, maxHeight: 40 },
  ];

  for (const img of imageList) {
    try {
      const blob = await fetchBlobFromUrl(img.src);
      const resizedImage = await resizeImage(blob, img.maxWidth, img.maxHeight);
      resizedImages[img.name] = URL.createObjectURL(resizedImage);
    } catch (error) {
      console.error(`Failed to resize image ${img.name}:`, error);
    }
  }

  return resizedImages;
};


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
  const [isActive, setIsActive] = useState({
    seeAllActive: true,
    seeFavoritesActive: false,
    seeNotReadActive: false
  })
  const [mailDetails, setMailDetails] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isCheckModalVisible, setCheckModalVisible] = useState(false);
  const [selectedMailIds, setSelectedMailIds] = useState([]); 
  const [optimizedImages, setOptimizedImages] = useState({});

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
        // console.error("편지 가져오기 실패:", response.data.message);
        setMails([]);
      } else {
        // console.error("편지가 없습니다:", response.data.message);
        setMails([]);
      }
    } catch (error) {
      // console.error("API 호출 중 오류 발생:", error);
      setMails([]);
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
        setMails((prevMails) =>
          prevMails.map((mail) =>
            mail.mailId === mailId ? { ...mail, read: true } : mail
          )
        );
      
        if (seeNotReadActive) {
          fetchMails('notRead');
        } else if (seeFavoritesActive) {
          fetchMails('starred');
        } else {
          fetchMails('all');
        }
      } else if(response.data.code === "MAIL5001"){
        // console.error("편지 가져오기 실패:", response.data.message);
      } else {
        // console.error("편지가 없습니다:", response.data.message);
      }
    } catch (error) {
      // console.error("API 호출 중 오류 발생:", error);
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
        // console.log('즐겨찾기 상태 변경 성공');
        const updatedMails = mails.map((mail) =>
          mail.mailId === mailId ? { ...mail, starred: !mail.starred } : mail
        );
        setMails(updatedMails);
        if (seeFavoritesActive) {
            setMails(updatedMails.filter(mail => mail.starred));
        }

      } else if (response.data.code === "MAIL5001") {
        // console.error("실패:", response.data.message);
        setMails(mails);
      } else {
        setMails(mails);
        // console.error("메일이 없습니다", response.data.message);
      }
    } catch (error) {
      // console.error('즐겨찾기 요청 중 오류 발생:', error);
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
    setIsActive({
      seeAllActive: true,
      seeFavoritesActive: false,
      seeNotReadActive: false
    })
    fetchMails('all');
  };
  const handleSeeFavoritesToggle = () => {
    setIsActive({
      seeAllActive: false,
      seeFavoritesActive: true,
      seeNotReadActive: false
    })
    fetchMails('starred');
  }; 
  const handleSeeNotReadToggle = () => {
    setIsActive({
      seeAllActive: false,
      seeFavoritesActive: false,
      seeNotReadActive: true
    })
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

  const handleDelete = async (mailId) => {
    try {
      const mailIdsToDelete = mailId ? [mailId] : selectedMailIds; 
      if (mailIdsToDelete.length === 0) {
        setDeleteModalVisible(true);
        return;
      }
      const response = await axios.post(`${serverURL}/api/v1/mail/delete`, {
        mailIds: mailIdsToDelete,
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken} ${refreshToken}`
        },
      });

      if (response.data.code === "200") {
        setMails((prevMails) => prevMails.filter(mail => !mailIdsToDelete.includes(mail.mailId)));
        setDeleteModalVisible(false);
      } else {
        // console.error('실패:', response.data.message);
      }
    } catch (error) {
      // console.error('실패:', error);
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      const images = await optimizeImages(); 
      setOptimizedImages(images)
    };
    fetchMails();
    loadImages();
  }, []);

  if (!optimizedImages.bg || !optimizedImages.mailbox || !optimizedImages.mailbox_mobile || !optimizedImages.trash) {
    return <div>Loading...</div>;
  }

  return (
    <LetterWrapper>
    <L.Bg bg={optimizedImages.bg}>
    <L.Container
      mailbox={optimizedImages.mailbox} 
      mailbox_mobile={optimizedImages.mailbox_mobile}
    >
      <L.Mailbox>
          <L.TopRow>
             <L.TopIcons onClick={handleSeeAllToggle} active={isActive.seeAllActive}>
                <img src={all} alt="모두보기" />
                <p>모두보기</p>
              </L.TopIcons>

              <L.TopIcons onClick={handleSeeFavoritesToggle} active={isActive.seeFavoritesActive}>
                <img src={heart} alt="즐겨찾기" />
                <p>즐겨찾기</p>
              </L.TopIcons>

              <L.TopIcons onClick={handleSeeNotReadToggle} active={isActive.seeNotReadActive}>
                <img src={notRead} alt="안읽음" />
                <p>안읽음</p>
              </L.TopIcons>
            <L.Delete 
              onClick={() => {
                if (selectedMailIds.length === 0) {
                    setCheckModalVisible(true);
                } else {
                    setDeleteModalVisible(true);
                }
              }}
              trash={optimizedImages.trash} 
            />
          </L.TopRow>
          <L.LettersWrapper>
          {mails.length > 0 ? (
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
           ) : <L.EmptyLetter>편지가 없어요 :( </L.EmptyLetter>} 
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
            isVisible={isLetterModalVisible}
          />
        )}
        {isDeleteModalVisible && (
                <DeleteLetterModal
                isVisible={isDeleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onConfirm={() => handleDelete()}
                />
            )}
        {isCheckModalVisible && (
                <CheckLetterModal
                isVisible={isCheckModalVisible}
                onClose={() => setCheckModalVisible(false)}
                />
            )}
    </L.Container>
    </L.Bg>
    </LetterWrapper>
  );
}

export default Mailbox;

