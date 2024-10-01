import styled from "styled-components";
import room from "../../assets/main/room.webp";
import { chatbot, calendar, mailbox, pencilHolder, trash} from '../../assets/main/icons'
import morning from "../../assets/main/sky/morning.webp"
import evening from "../../assets/main/sky/evening.webp"
import night from "../../assets/main/sky/night.webp"
import morningMobile from "../../assets/main/sky/morningMobile.webp"
import eveningMobile from "../../assets/main/sky/eveningMobile.webp"
import nightMobile from "../../assets/main/sky/nightMobile.webp"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-image: url(${(props) => (props.time >= 7 && props.time < 17 ? morning : props.time >= 17 && props.time < 19 ? evening : night)});
    background-size: cover;
  
    background-position: center;

    @media (max-width: 430px) {
        background-image: url(${(props) => (props.time >= 7 && props.time < 17 ? morningMobile : props.time >= 17 && props.time < 19 ? eveningMobile : nightMobile)});
        height: 100dvh;
    }
    z-index: 10;
`;

export const Room = styled.div`    
    position: relative;
    
    margin-top: 11vh;
    width: 745px;
    height: 756px;

    @media (max-width: 1470px) {
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
    
    z-index: 40;
`

// icons

export const Trash = styled.div`
    position: absolute;

    width: 80px;
    height: 120px;
    left: calc(50% - 345px);
    bottom: calc(50% - 218px);

    @media (max-width: 1470px) {
        width: 55px;
        height: 86px;
        left: calc(50% - 250px);
        bottom: calc(50% - 160px);
    }

    @media (max-width: 630px) {
        width: 40px;
        height: 56px;
        left: calc(0% + 10px);
        bottom: calc(50% - 100px);
    }

    
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 280px;
        height: 189px; 

        left: calc(50% - 370px);
        bottom: calc(50% - 250px);

        background-image: url(${trash});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 170px;
            height: 139px;
            left: calc(50% - 263px);
            bottom: calc(50% - 185px);
        }
        @media (max-width: 630px) {
            width: 110px;
            height: 70px;
            left: calc(0% + 5px);
            bottom: calc(50% - 107px);
        }

    }
`
export const Airplane = styled.img`
    position: absolute;
    visibility: ${(props) => (props.isExistAirplane ? 'visible' : 'hidden')};

    width: 80px;
    left: calc(50% - 180px);
    bottom: calc(50% - 55px);

    @media (max-width: 1470px) {
        width: 50px;
        left: calc(50% - 125px);
        bottom: calc(50% - 37px);
    }

    @media (max-width: 630px) {
        width: 30px;
        left: calc(50% - 80px);
        bottom: calc(50% - 20px);
    }
    cursor: pointer;
    z-index: 100;
`
export const Calendar = styled.div`
    position: absolute;

    width: 90px;
    height: 145px;
    left: calc(50% + 240px);
    bottom: calc(50% - 55px);

    @media (max-width: 1470px) {
        width: 60px;
        height: 95px;
        left: calc(50% + 180px);
        bottom: calc(50% - 35px);
    }

    @media (max-width: 630px) {
        width: 35px;
        height: 60px;
        left: calc(50% + 115px);
        bottom: calc(50% - 25px);
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 230px;
        height: 199px;
        left: calc(50% + 140px);
        bottom: calc(50% - 75px);
        
        background-image: url(${calendar});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 150px;
            height: 120px;
            left: calc(50% + 115px);
            bottom: calc(50% - 48px);
        }
        @media (max-width: 630px) {
            width: 93px;
            height: 73px;
            left: calc(50% + 75px);
            bottom: calc(50% - 27.5px);
        }
    }
`
export const Chatbot = styled.div`
    position: absolute;

    width: 220px;
    height: 180px;
    left: calc(50% - 30px);
    bottom: calc(50% - 75px);

    @media (max-width: 1470px) {
        width: 155px;
        height: 120px;
        left: calc(50% - 20px);
        bottom: calc(50% - 50px);
    }

    @media (max-width: 630px) {
        width: 100px;
        height: 80px;
        left: calc(50% - 12.5px);
        bottom: calc(50% - 34px);
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 360px;
        height: 220px;
        left: calc(50% - 80px);
        bottom: calc(50% - 100px);
        
        background-image: url(${chatbot});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 230px;
            height: 140px;
            left: calc(50% - 45px);
            bottom: calc(50% - 60px);
        }

        @media (max-width: 630px) {
            width: 150px;
            height: 95px;
            left: calc(50% - 30px);
            bottom: calc(50% - 42px);
        }
    }
`
export const PencilHolder = styled.div`
    position: absolute;

    width: 50px;
    height: 100px;
    left: calc(50% - 270px);
    bottom: calc(50% - 75px);

    @media (max-width: 1470px) {
        width: 35px;
        height: 65px;
        left: calc(50% - 195px);
        bottom: calc(50% - 55px);
    }

    @media (max-width: 630px) {
        width: 20px;
        height: 40px;
        left: calc(50% - 123px);
        bottom: calc(50% - 35px);
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 270px;
        height: 138px;
        left: calc(50% - 396px);
        bottom: calc(50% - 93px);
        
        background-image: url(${pencilHolder});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 170px;
            height: 85px;
            left: calc(50% - 275px);
            bottom: calc(50% - 63px);
        }

        @media (max-width: 630px) {
            width: 110px;
            height: 52px;
            left: calc(50% - 175px);
            bottom: calc(50% - 38px);
        }
    }
`
export const Mailbox = styled.div`
    position: absolute;

    width: 100px;
    height: 250px;
    left: calc(50% - 128px);
    bottom: calc(50% - 370px);

    @media (max-width: 1470px) {
        width: 60px;
        height: 160px;
        left: calc(50% - 86px);
        bottom: calc(50% - 258px);
    }
    @media (max-width: 630px) {
        width: 39px;
        height: 103px;
        left: calc(50% - 55px);
        bottom: calc(50% - 165px);
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 252px;
        height: 327px;
        left: calc(50% - 160px);
        bottom: calc(50% - 400px);

        background-image: url(${mailbox});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 160px;
            height: 215px;
            left: calc(50% - 107px);
            bottom: calc(50% - 277px);
        }

        @media (max-width: 630px) {
            width: 105px;
            height: 140px;
            left: calc(50% - 70px);
            bottom: calc(50% - 180px);
        }
    }
`

