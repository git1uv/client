import React, { useEffect, useRef, useState } from "react";
import * as M from "../LogoutModal.style";
import x from "../../../assets/x.webp";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FeedbackModal = ({ isVisible, onClose, onConfirm }) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const outside = useRef();

  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const counseling = useSelector((state) => state.counseling);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${serverURL}/api/v1/chatbot/opinion`,
        {
          counselingLogId: counseling.counselingLogId,
          opinion: feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken} ${refreshToken}`,
          },
        }
      );
      alert("피드백이 성공적으로 제출되었습니다!");
      setFeedback(""); // 초기화
      onClose(); // 모달 닫기
      navigate("/main");
    } catch (error) {
      console.error("피드백 제출 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (isVisible) setFeedback("");
  }, [isVisible]);

  if (!isVisible) return null;
  return (
    <M.LogoutModalBg
      ref={outside}
      onClick={(e) => {
        if (e.target === outside.current) onClose();
      }}
    >
      <M.LogoutModal isFeedback={true}>
        <M.ModalCloseButton onClick={onClose}>
          <img src={x} alt="x" />
        </M.ModalCloseButton>
        <M.LogoutModalTitle>오늘의 챗봇 대화는 어떠셨나요?</M.LogoutModalTitle>
        <M.TextArea
          placeholder="ex) 조금 더 따뜻했으면 좋겠어요"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <M.SubmitButton onClick={() => handleSubmit()}>제출하기</M.SubmitButton>
      </M.LogoutModal>
    </M.LogoutModalBg>
  );
};

export default FeedbackModal;
