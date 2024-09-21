import styled from "styled-components";
import theme from '../../../constants/theme';
import { IoIosArrowBack } from "react-icons/io";

const { ALIGN, RESPONSIVE_SIZE } = theme;

export const App = styled.div`
    width: 100%;
    height: 100dvh;
    background: #F5F4F2;
`

/* Header */
export const Header = styled.div`
    display: grid;
    // justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    gap: 6rem;

    padding: 0 1rem;

    width: 100%;
    // height: 4rem;
    height: 8dvh;
    background: #F5F4F2;
    box-shadow: 0px 2px 2px #e0e0e0;

    h1 {
        margin: 0;
        color: #27272A;
        font-family: SeoulHangang;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.0125rem;
    }
`   

export const BackBtn = styled.button`
    ${ALIGN.ROW_CENTER};
    margin-left: -2rem;
    width: 5rem;
    color: #ED6243;
    border: none;
    background: transparent;
`

export const EndBtn = styled.div`
    ${ALIGN.ROW_CENTER};
    width: 6rem;
    height: 2.8rem;

    border-radius: 4.8125rem;
    background: #ED6243;
    border: none;

    color: white;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: normal;
`

/* ChattingBox */
export const ChattingBox = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    align-items: center;
    position: relative;

    padding: 1rem;

    width: 100%;
    height: 63dvh;
    background: pink;
    overflow: auto;
`

export const UserBubble = styled.div`
    ${ALIGN.ROW_CENTER};
    align-self: flex-end; // 오른쪽 정렬

    padding: 1rem;
    max-width: 80%;
    margin-bottom: 1rem;

    border-radius: 0.9375rem;
    background: ${(props) => (
        props.chatbot === 'Simmaeum' ? '#FFB48A'
        : props.chatbot === 'Banbani' ? '#FFD258' : '#ABD5C4'
    )};
    
    word-wrap: break-word;
    white-space: pre-line;

    p {
        color: #000;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`

export const ChatbotBubble = styled.div`
    ${ALIGN.ROW_CENTER};
    align-self: flex-start;
    margin-bottom: 1rem;

    padding: 1rem 2rem;
    max-width: 90%;
    
    border-radius: 0.9375rem;
    background: #FFF;

    p {
        color: #000;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

`

export const ChatbotBox = styled.div`
    width: 100%;
    height: 21dvh;
    background: lightblue;
`

export const InputBox = styled.div`
    width: 100%;
    height: 8dvh;
    background: lightgreen;
`