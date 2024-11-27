import React, { useEffect, useState } from "react";
import * as S from "./Main.style";
import { useNavigate } from "react-router-dom";
import Airplane from "../../Modal/Airplane";
import airplaneIcon from "../../../assets/main/airplane.webp";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/user";
import MailAlert from "../../Modal/MailAlert";
import apiClient from "../../../constants/tokenInstance";
import Resizer from "react-image-file-resizer";
// import room from "../../../assets/main/room.avif";
import {
  room,
  chatbot,
  airplane,
  calendar,
  mailbox,
  pencilHolder,
  trash,
} from "../../../assets/main/icons";

export default function MainCm() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [airplaneModal, setAirplaneModal] = useState(false); // 종이비행기 모달창 on/off
  const [mailAlert, setMailAlert] = useState(false); // 편지함 알림 확인 여부
  const [isExistAirplane, setIsExistAirplane] = useState(""); // 종이비행기 존재 여부

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // const [image, setImage] = useState("");
  const [icons, setIcons] = useState([
    room,
    chatbot,
    calendar,
    mailbox,
    pencilHolder,
    trash,
  ]);

  const date = new Date();
  const time = date.getHours();

  const resizeImage = (image) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        image,
        1920, // 원하는 가로 크기
        1440, // 원하는 세로 크기
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
  // const processImage = async () => {
  //   // AVIF 파일을 이미지 객체로 생성
  //   const img = new Image();
  //   img.src = room; // AVIF 파일 경로

  //   img.onload = async () => {
  //     const canvas = document.createElement("canvas");
  //     const ctx = canvas.getContext("2d");
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     ctx.drawImage(img, 0, 0);

  //     // Canvas의 데이터를 Blob으로 변환
  //     canvas.toBlob(
  //       async (blob) => {
  //         if (blob) {
  //           const resizedImage = await resizeImage(blob); // 리사이즈 실행
  //           setImage(resizedImage); // 상태 업데이트
  //         }
  //       },
  //       "image/avif",
  //       1
  //     );
  //   };
  // };

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
    const images = [room, chatbot, calendar, mailbox, pencilHolder, trash];
    processImages(images).then((resizedIcons) => setIcons(resizedIcons));
  }, []);

  const closeMailAlert = () => {
    setMailAlert(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
