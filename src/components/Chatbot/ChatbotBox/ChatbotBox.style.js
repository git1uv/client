import styled from "styled-components"
import theme from '../../../constants/theme'; // theme 파일의 경로
import sendBtn from '../../../assets/chatbot/chatStart/sendBtn.png'

const { ALIGN } = theme;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    width: 90%;
    height: 100%;
`

export const Title = styled.div`
    ${ALIGN.ROW_CENTER};
    width: 100%;
    height: 10%;

    h1 {
        margin: 0 0 2rem 0;
        color: #27272A;
        font-family: SeoulHangang;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.015rem;
    }
`
export const Warning = styled.div`
    h3 {
        margin: 0;
        color: #ED6243;
        font-family: Pretendard;
        font-size: 1.125rem;
        @media (max-width: 1440px) {
            font-size: 1rem;
        }
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.01125rem;
    }
    p {
        margin: 0;
        color: #27272A;
        font-family: Pretendard;
        font-size: 1rem;
        @media (max-width: 1440px) {
            font-size: 0.9rem;
        }
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.01rem;
    }
`

export const InputBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    width: 80%;
    height: 4rem;
    
    position: absolute;
    bottom: calc(0% - 2rem);
    left: calc(50% - 40%);

    border-radius: 2.0625rem;
    border: 1px solid #739B8B;
    background: #FFF;
    box-shadow: 3px 1px 10px 0px #8F9988;
    
    input {
        width: 80%;
        height: 3rem;

        background: none;
        border: none;
        outline: none;
    }

    button {
        width: 3.125rem;
        height: 3.125rem;
        border: none;
        background-color: transparent;
        background-image: url(${sendBtn});
        background-size: cover;
    }
`