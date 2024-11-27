import styled from "styled-components";
import room from "../../../assets/main/room-small.avif";
import {
  chatbot,
  calendar,
  mailbox,
  pencilHolder,
  trash,
} from "../../../assets/main/icons";
import morningMobile from "../../../assets/main/sky/morningMobile.webp";
import eveningMobile from "../../../assets/main/sky/eveningMobile.webp";
import nightMobile from "../../../assets/main/sky/nightMobile.webp";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100dvh;

  background-image: url(${(props) =>
    props.time >= 7 && props.time < 17
      ? morningMobile
      : props.time >= 17 && props.time < 19
      ? eveningMobile
      : nightMobile});
  background-size: cover;
  background-position: center;

  z-index: 10;
`;

export const Room = styled.div`
  position: relative;

  margin-top: 11dvh;
  width: 345px;
  height: 356px;

  background-image: url(${(props) => props.background});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  z-index: 40;
`;

// icons

export const Trash = styled.div`
  position: absolute;

  width: 110px;
  height: 70px;
  left: calc(0% + 5px);
  bottom: calc(50% - 107px);

  cursor: pointer;
  z-index: 100;

  background-image: url(${(props) => props.background});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Airplane = styled.img`
  position: absolute;
  visibility: ${(props) => (props.isExistAirplane ? "visible" : "hidden")};

  width: 30px;
  left: calc(50% - 80px);
  bottom: calc(50% - 20px);

  cursor: pointer;
  z-index: 100;
`;
export const Calendar = styled.div`
  position: absolute;
  width: 93px;
  height: 73px;
  left: calc(50% + 75px);
  bottom: calc(50% - 27.5px);

  cursor: pointer;
  z-index: 100;

  background-image: url(${(props) => props.background});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Chatbot = styled.div`
  position: absolute;
  width: 150px;
  height: 95px;
  left: calc(50% - 30px);
  bottom: calc(50% - 42px);

  background-image: url(${(props) => props.background});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;
  z-index: 100;
`;
export const PencilHolder = styled.div`
  position: absolute;
  width: 110px;
  height: 52px;
  left: calc(50% - 175px);
  bottom: calc(50% - 38px);

  background-image: url(${(props) => props.background});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;
  z-index: 100;
`;
export const Mailbox = styled.div`
  position: absolute;
  width: 105px;
  height: 140px;
  left: calc(50% - 70px);
  bottom: calc(50% - 180px);

  background-image: url(${(props) => props.background});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;
  z-index: 100;
`;
