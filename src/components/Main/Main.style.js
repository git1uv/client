import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"
import room from "../../assets/main/room.png";
import {airplane, chatbot, calendar, mailbox, pencilHolder, trash} from '../../assets/main/icons'
import theme from "../../constants/theme";
import morning from "../../assets/main/sky/morning.png"
import evening from "../../assets/main/sky/evening.png"
import night from "../../assets/main/sky/night.png"

export const Sky = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-image: url(${morning});
    background-size: cover;
    background-color: #EEECE3;
  
    background-position: center;

    @media (max-width: 430px) {
        height: 100dvh;
    }
    z-index: 1;
`

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
        height: 100dvh;
    }
    z-index: 10;
`;

export const Room = styled.div`    
    position: relative;
    
    margin-top: 11vh;
    width: 856px;
    height: 100vh;

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

    width: 105px;
    height: 130px;
    left: 1.6%;
    bottom: 28%;

    @media (max-width: 1470px) {
        width: 65px;
        height: 86px;
        bottom: 21.5%;
    }

    @media (max-width: 1200px) {
    
    } 

    @media (max-width: 630px) {
        width: 40px;
        height: 56px;
        bottom: 21.5%;
    }

    
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 280px;
        height: 189px; 
        right: 65%;
        bottom: 23%; 
        
        background-image: url(${trash});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 170px;
            height: 139px;
            bottom: 17%;
        }
        @media (max-width: 1200px) {
    
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

    visibility: ${(props) => (props.airplane ? 'visible' : 'hidden')};

    width: 80px;
    height: 40px;
    left: 26%;
    bottom: 46%;

    @media (max-width: 1470px) {
        width: 45px;
        height: 30px;
        left: 27%;
        bottom: 44.5%;
    }
    @media (max-width: 1200px) {
    
    } 

    @media (max-width: 630px) {
        width: 30px;
        height: 16px;
        bottom: 45%;
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 246px;
        height: 172px;
        left: 18%;
        bottom: 42%;
        
        background-image: url(${airplane});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 156px;
            height: 72px;
            left: 18%;
            bottom: 44%;
        }
        @media (max-width: 1200px) {

        } 

        @media (max-width: 630px) {
            width: 100px;
            height: 50px;
            left: 17.5%;
            bottom: 43.5%;
        }
    }
`
export const Calendar = styled.div`
    position: absolute;

    width: 90px;
    height: 145px;
    left: 83%;
    bottom: 45%;

    @media (max-width: 1470px) {
        width: 60px;
        height: 95px;
        bottom: 43%;
    }
    @media (max-width: 1200px) {
    
    } 

    @media (max-width: 630px) {
        width: 35px;
        height: 60px;
        bottom: 43%;
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 230px;
        height: 199px;
        left: 71.5%;
        bottom: 42%;
        
        background-image: url(${calendar});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 150px;
            height: 120px;
            left: 71%;
            bottom: 41.5%;
        }
        @media (max-width: 1200px) {
    
        } 

        @media (max-width: 630px) {
            width: 93px;
            height: 73px;
            left: 71.5%;
            bottom: 42%;
        }
    }
`
export const Chatbot = styled.div`
    position: absolute;

    width: 245px;
    height: 190px;
    left: 46%;
    bottom: 43%;

    @media (max-width: 1470px) {
        width: 155px;
        height: 120px;
        bottom: 41%;
    }
    @media (max-width: 1200px) {
    
    } 

    @media (max-width: 630px) {
        width: 100px;
        height: 80px;
        bottom: 40%;
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 360px;
        height: 220px;
        left: 42.5%;
        bottom: 40%;
        
        background-image: url(${chatbot});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 230px;
            height: 140px;
            left: 42%;
            bottom: 39%;
        }
        @media (max-width: 1200px) {
    
        }   

        @media (max-width: 630px) {
            width: 150px;
            height: 95px;
            left: 41.5%;
            bottom: 38%;
        }
    }
`
export const PencilHolder = styled.div`
    position: absolute;

    width: 50px;
    height: 100px;
    right: 79.5%;
    bottom: 42.5%;

    @media (max-width: 1470px) {
        width: 35px;
        height: 65px;
        bottom: 40.5%;
    }
    @media (max-width: 1200px) {
    
    } 

    @media (max-width: 630px) {
        width: 20px;
        height: 40px;
        bottom: 40.5%;
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 270px;
        height: 138px;
        right: 69%;
        bottom: 40%;
        
        background-image: url(${pencilHolder});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 170px;
            height: 85px;
            right: 69.25%;
            bottom: 38.5%;
        }
        @media (max-width: 1200px) {
    
        } 

        @media (max-width: 630px) {
            width: 110px;
            height: 52px;
            right: 69%;
            bottom: 39%;
        }
    }
`
export const Mailbox = styled.div`
    position: absolute;

    width: 100px;
    height: 250px;
    left: 33.5%;
    bottom: 14%;

    @media (max-width: 1470px) {
        width: 60px;
        height: 160px;
        left: 34%;
        bottom: 4%;
    }
    @media (max-width: 1200px) {
    
    } 

    @media (max-width: 630px) {
        width: 39px;
        height: 103px;
        bottom: 4%;
    }
    cursor: pointer;
    z-index: 100;

    &:hover {      
        width: 252px;
        height: 327px;
        left: 30.5%;
        bottom: 7%;    

        background-image: url(${mailbox});
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        
        z-index: 40;

        @media (max-width: 1470px) {
            width: 160px;
            height: 215px;
            left: 30.5%;
            bottom: 0.5%;     
        }

        @media (max-width: 1200px) {
        
        } 

        @media (max-width: 630px) {
            width: 105px;
            height: 140px;
            left: 30%;
            bottom: 0.25%;   
        }
    }
`

