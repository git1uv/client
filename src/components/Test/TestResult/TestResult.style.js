import styled from "styled-components";
import theme from '../../../constants/theme'; // theme 파일의 경로
import backgroundImg from "../../../assets/chatbot/background.webp"
import percent from '../../../assets/chatbot/test/percent.png.webp'

const { ALIGN,RESPONSIVE_SIZE } = theme;

export const App = styled.div`
    ${ALIGN.COLUMN_CENTER};
    width: 100%;
    height: 90vh;
    margin-top: 10vh;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-color: #F4F2EB;
    background-position: center;
  
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        position: fixed;
        top: -4vh;
        height: calc(100dvh - 6.5dvh); /* 10vh는 헤더의 높이 */
    }
    z-index: 1;
`

export const Container = styled.div`
    ${ALIGN.COLUMN_CENTER};

    width: 80.5625rem;
    height: 53.0625rem;
    
    @media (max-width: 1470px) {
        width: 60.5625rem;
        height: 38.0625rem;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        width: 30rem;
        height: 50rem;
    }
    padding: 0.2rem 0;
    background-color: rgba(242, 242, 239, 0.5);
    box-shadow: 0px 4px 4px 0px #E3DECB inset;
    border-radius: 2.5rem;

    h1 {
        margin: 0.5rem 0 1rem 0;
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            margin: 1rem 0;
        }
        color: #27272A;
        font-family: Pretendard;
        font-size: 2.125rem;
        @media (max-width: 1470px) {
            font-size: 1.75rem;
        }
        font-style: normal;
        font-weight: 600;
        line-height: 2.5rem;
        letter-spacing: -0.0625rem;
    }

    img {
        width: 16.875rem;
        @media (max-width: 1470px) {
            width: 10rem;
        }
        object-fit: cover;
    }
`

export const ResultBox = styled.div`
    ${ALIGN.COLUMN_CENTER};

    background-image: url(${percent});
    width: 18.75rem;
    height: 2.75rem;
    
    background-size: cover;
    background-position: center;

    color: #27272A;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.1875rem;
    letter-spacing: -0.0625rem;
`

export const SpeechBubble = styled.div`
    ${ALIGN.COLUMN_CENTER};

    position: relative;
    width: 60%;
    height: 10rem;
    @media (max-width: 1470px) {
        height: 8rem;
    }  
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        width: 85%;
        height: 8rem;
        border-radius: 1.25rem;
    }   
    
    background: #FBFBFB;
    border-radius: 2.5rem;
    margin-top: 2rem;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 17px solid transparent;
        border-bottom-color: #FBFBFB;
        border-top: 0;
        margin-left: -16px;
        margin-top: -16px;
    }

    h2 {
        color: #6f6871;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.125rem;
        letter-spacing: -0.04125rem;
    }
    p {
        margin: 0;
        white-space: pre-line;

        color: #6f6871;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5625rem;
        letter-spacing: -0.03375rem;
    }
`
export const BtnBox = styled.div`
    ${ALIGN.ROW_CENTER};
    gap: 1rem;
    width: 60%;
    margin-top: 1.5rem; 
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        width: 90%;
        margin-top: 2rem; 
    }

    button { 
        ${ALIGN.ROW_CENTER};
        width: 80%;
        height: 3.75rem;
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            height: 4.16rem;
        }
        border: none;
        border-radius: 0.9375rem;
    }
    button:first-child { 
        background: #E8E9EB;
        color: #4e4e57;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.03375rem;
    }

    button:last-child { 
        background: #ED6243;
        color: #FFF;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.03375rem;
    }
`
