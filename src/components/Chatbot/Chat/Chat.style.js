import styled from "styled-components";
import theme from '../../../constants/theme'

const {ALIGN, RESPONSIVE_SIZE} = theme;


export const UserBubble = styled.div`
    ${ALIGN.ROW_CENTER};
    align-self: flex-end; // 오른쪽 정렬

    padding: 1rem 2rem;
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