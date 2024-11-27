import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../constants/tokenInstance";
import airplaneIcon from "../../../assets/main/airplane.webp";

import { setLogin } from "../../../redux/user";
import axios from "axios";

import * as S from "./MainMobile.style";
import Airplane from "../../Modal/Airplane";
import MailAlert from "../../Modal/MailAlert";
import Resizer from "react-image-file-resizer";

import {
  room_mobile,
  chatbot,
  airplane,
  calendar,
  mailbox,
  pencilHolder,
  trash,
} from "../../../assets/main/icons";
export default function MainMobile() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [airplaneModal, setAirplaneModal] = useState(false); // 종이비행기 모달창 on/off
  const [mailAlert, setMailAlert] = useState(false); // 편지함 알림 확인 여부
  const [isExistAirplane, setIsExistAirplane] = useState(""); // 종이비행기 존재 여부

  const [icons, setIcons] = useState([
    room_mobile,
    chatbot,
    calendar,
    mailbox,
    pencilHolder,
    trash,
  ]);

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const date = new Date();
  const time = date.getHours();

  const resizeImage = (image) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        image,
        500, // 원하는 가로 크기
        800, // 원하는 세로 크기
        "avif", // 변환할 포맷
        100, // 품질
        0, // 회전
        (uri) => {
          resolve(uri);
        },
        "base64" // 반환 형식
      );
    });
  };
  const processImages = async (images) => {
    return Promise.all(
      images.map(async (imagePath) => {
        const img = new Image();
        img.src = imagePath;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        return new Promise((resolve, reject) => {
          canvas.toBlob(
            async (blob) => {
              if (blob) {
                const resizedImage = await resizeImage(blob);
                resolve(resizedImage);
              } else {
                reject(new Error("Failed to create Blob"));
              }
            },
            "image/avif",
            1
          );
        });
      })
    );
  };

  useEffect(() => {
    const images = [
      room_mobile,
      chatbot,
      calendar,
      mailbox,
      pencilHolder,
      trash,
    ];
    processImages(images).then((resizedIcons) => setIcons(resizedIcons));
  }, []);

  const closeMailAlert = () => {
    setMailAlert(false);
  };

  const getData = async () => {
    try {
      const res = await apiClient.get(`/api/v1/main`);
      let data = res.data.data;
      dispatch(setLogin({ nickname: data.nickname }));
      localStorage.setItem("nickname", data.nickname);

      // console.log(data);

      let isMailAlert = data.mailAlert;
      isMailAlert ? setMailAlert(true) : setMailAlert(false);

      let airplane = data.airplane;
      airplane ? setIsExistAirplane(true) : setIsExistAirplane(false);
    } catch (err) {
      // console.log(err);
    }
  };

  /* 메인화면 새 편지 알림 끄기 API */
  const patchIsReadMail = async () => {
    try {
      const res = await axios.patch(
        `${serverURL}/api/v1/main/update-mail-alert`,
        {
          mailAlert: "false",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken} ${refreshToken}`,
          },
        }
      );
      // console.log(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const readMail = () => {
    closeMailAlert();
    patchIsReadMail();
    navigate("/letter");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <S.Container time={time}>
        <S.Room background={icons[0]}>
          <S.Trash background={icons[5]} onClick={() => navigate("/trash")} />
          <S.Airplane
            src={airplaneIcon}
            isExistAirplane={isExistAirplane}
            onClick={() => setAirplaneModal(true)}
          />
          <S.Calendar
            background={icons[2]}
            onClick={() => navigate("/calendar")}
          />
          <S.Chatbot
            background={icons[1]}
            onClick={() => navigate("/chatbot/choice")}
          />
          <S.PencilHolder
            background={icons[4]}
            onClick={() => navigate("/pencilholder")}
          />
          <S.Mailbox
            background={icons[3]}
            onClick={() => navigate("/letter")}
          />
        </S.Room>
        {airplaneModal && (
          <Airplane
            setAirplaneModal={setAirplaneModal}
            setIsExistAirplane={setIsExistAirplane}
          />
        )}
      </S.Container>
      <MailAlert
        isVisible={mailAlert}
        onClose={closeMailAlert}
        onConfirm={readMail}
      />
    </>
  );
}
