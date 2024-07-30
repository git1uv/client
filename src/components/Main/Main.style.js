import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"
import room from "../../assets/Main/room.png";
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
    
    width: 856px;
    height: 100vh;

    @media (max-width: 1440px) {
        width: 545px;
        height: 556px;
    }

    @media (max-width: 630px) {
        width: 345px;
        height: 356px;
    }

    background-image: url(${room});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    
    z-index: 10;
`

export const Trash = styled.div`
    position: absolute;
    
    width: 105px;
    height: 130px;
    left: 1.6%;
    bottom: 28%;

    @media (max-width: 1440px) {
        width: 65px;
        height: 86px;
        left: 1.6%;
        bottom: 21.5%;
    }

    @media (max-width: 630px) {
        width: 40px;
        height: 56px;
        left: 1%;
        bottom: 21.5%;
    }

    cursor: pointer;
    z-index: 20;

    &:hover {      
        width: 288px;
        height: 189px; 
        right: 65%;
        bottom: 25.5%; 
        
        background-image: url(${trash});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1440px) {
            background-size: 208px;
            // background-size: 100%;
            width: 208px;
            height: 139px;
            bottom: 17%;
        }

        @media (max-width: 630px) {
            background-size: 100%;
            width: 150px;
            height: 90px;
        }
    }
`