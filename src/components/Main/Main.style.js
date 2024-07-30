import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"
import mainBackground from "../../assets/Main/mainBackground.png";
import mainBackgroundMobile from "../../assets/Main/mainBackgroundMobile.png";
import room from "../../assets/Main/room.png";
import room2 from "../../assets/Main/room2.png";
import trash from "../../assets/Main/trash.png";

import theme from "../../constants/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-color: #EEECE3;
  
    background-position: center;

    @media (max-width: 430px) {
        height: 100dvh;
    }
    z-index: 1;
`;

export const Room = styled.div`    
    position: relative;
    right: 8px;
    width: 40%;
    height: 100%;
    
    background-image: url(${room2});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    
    // background-color: red;
    // opacity: 0.5;
    
    @media (max-width: 630px) {
        width: 22rem;
    }

    z-index: 10;
`

export const Trash = styled.div`
    position: absolute;
    right: 20%;
    bottom: 25%;

    width: 16.75rem;
    height: 11.1875rem;

    cursor: pointer;
    background-image: url(${props => props.defaultImage});

    background-color: black;
    z-index: 20;

    &:hover {
        background-image: url(${trash});
        background-color: red;
        z-index: 40;
    }
`