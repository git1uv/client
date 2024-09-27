import styled, { keyframes } from "styled-components";
import theme from '../../../constants/theme'
import backgroundImg from "../../../assets/chatbot/background.webp"

const {ALIGN, RESPONSIVE_SIZE} = theme;

export const App = styled.div`
    ${ALIGN.COLUMN_CENTER};
    width: 100%;
    height: 90vh;
    margin-top: 10vh;

    background-color: #F4F2EB;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-color: #F4F2EB;
    background-position: center;
    
    position: relative;
    overflow: hidden;

    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        height: 93.5dvh;
        margin-top: 6.5dvh;
    }
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
    background-color: rgba(242, 242, 239, 0.5);
    box-shadow: 0px 4px 4px 0px #E3DECB inset;
    border-radius: 2.5rem;
`

export const SliderWrapper = styled.div`
    width: 80%;
    margin: 0;
    @media (max-width: 1470px) {
        width: 90%;
    }
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        width: 150%;
    }
`

export const Section = styled.div`
    width: 18.75rem;
    height: 2.75rem;
`

export const Title = styled.h1`
    margin: 0.5rem 0 1rem 0;
    text-align: center;
    
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
`

const fade = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ChatbotInfo = styled.div`
    ${ALIGN.COLUMN_CENTER};
    width: 100%;
    
    button { 
        ${ALIGN.ROW_CENTER};
        width: 30%;
        height: 3.3rem;
        margin-top: 1.5rem; 
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            width: 85%;
            height: 4.16rem;
            margin-top: 5rem;
        }
        border: none;
        border-radius: 0.9375rem;

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
export const TextContainer = styled.div`
    ${ALIGN.COLUMN_CENTER}
    position: relative;
    white-space: pre-line;
    text-align: center;
    width: 100%;
    transition: opacity 0.5s ease-in-out;
`;
