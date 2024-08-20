import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png'
import sendBtn from '../../assets/chatbot/sendBtn.png'
import { IoIosArrowBack } from "react-icons/io";
import theme from '../../constants/theme'; // theme 파일의 경로

const { ALIGN } = theme;

export const App = styled.div`
    ${ALIGN.COLUMN_CENTER};

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
`

export const Top = styled.div`
    ${ALIGN.ROW_CENTER} ;
    position: relative; /* 자식 요소들의 기준점 설정 */
    width: 100%; /* 컨테이너의 너비 */
`

export const Character = styled.img`
    position: relative;
    width: 230px;
    height: auto;
    z-index: 101;

    @media (max-width: 1440px) {
        width: 200px;
    }
    @media (max-width: 630px) {
        width: 170px;
    }
`

export const Chair = styled.img`
    position: absolute;
    width: 400px;
    height: auto;

    bottom: calc(50% - 93px);  /* Chair 이미지 하단에 Character가 위치하도록 설정 */
    left: calc(50% - 155px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */

    @media (max-width: 1440px) {
        width: 370px;
        bottom: calc(50% - 80px);  /* Chair 이미지 하단에 Character가 위치하도록 설정 */
        left: calc(50% - 140px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */
    }

    @media (max-width: 630px) {
        width: 340px;
        bottom: calc(50% - 68px);  /* Chair 이미지 하단에 Character가 위치하도록 설정 */
        left: calc(50% - 130px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */
    }

    z-index: 100;
`

export const Bottom = styled.div`
    ${ALIGN.COLUMN_CENTER};

    width: 70%;
    min-width: 500px;
    height: 65vh;

    border-radius: 2.5rem;
    border: 1px solid #FFF;
    background: rgba(243, 243, 243, 0.85);
    box-shadow: 3px 2px 20px 0px rgba(95, 95, 95, 0.25) inset;
    backdrop-filter: blur(10px);
`

/* ChatbotBox*/

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 5%;

    width: 90%;
    height: 12.5%;
    background-color: #F5F4F2;
    border-radius: 2.5rem 2.5rem 0 0;
    filter: drop-shadow(0px 4px 4px rgba(165, 165, 165, 0.25));

    h1 {
        width: 80%;
        text-align: center;

        color: #27272A;
        font-family: SeoulHangang;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.015rem;
    }
    button {
        width: 6.8rem;
        // width: 15%;
        height: 2.8rem;
        margin-right: -4%;

        border-radius: 4.8125rem;
        background: #ED6243;
        border: none;

        color: white;
        font-family: Pretendard;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: normal;
    }
`

export const BackBtn = styled(IoIosArrowBack)`
    width: 15%;
    height: 2rem;
    margin-left: -8%;
    color: #ED6243;
`