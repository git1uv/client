import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"
import room from "../../assets/Main/room.png";
import {airplane, calendar, mailbox, pencilHolder, trash} from '../../assets/Main/icons'
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
        bottom: 21.5%;
    }

    @media (max-width: 630px) {
        width: 40px;
        height: 56px;
        bottom: 21.5%;
    }

    cursor: pointer;
    z-index: 20;

    &:hover {      
        width: 280px;
        height: 189px; 
        right: 65%;
        bottom: 25.5%; 
        
        background-image: url(${trash});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1440px) {
            width: 170px;
            height: 139px;
            bottom: 17%;
        }

        @media (max-width: 630px) {
            width: 110px;
            height: 70px;
            bottom: 19%;
        }
    }
`
export const Airplane = styled.div`
    position: absolute;
    
    width: 80px;
    height: 40px;
    left: 26%;
    bottom: 46%;

    @media (max-width: 1440px) {
        width: 45px;
        height: 30px;
        left: 27%;
        bottom: 44.5%;
    }

    @media (max-width: 630px) {
        width: 30px;
        height: 16px;
        bottom: 45%;
    }
    cursor: pointer;
    z-index: 20;

    &:hover {      
        width: 246px;
        height: 172px;
        left: 18%;
        bottom: 43%;
        
        background-image: url(${airplane});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1440px) {
            width: 156px;
            height: 72px;
            left: 18%;
            bottom: 44%;
        }

        @media (max-width: 630px) {
            width: 100px;
            height: 50px;
            left: 17.5%;
            bottom: 43.5%;
        }
    }
    // border: 1px black solid;

`