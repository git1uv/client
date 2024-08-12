import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0 ,0.6);
    z-index: 500;

    @media (max-width: 430px) {
        height: 100dvh;
    }
`

export const Modal = styled.div`
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    width: 29.125rem;
    height: 19.75rem;

    background: white;
    border-radius: 26.4px;
    z-index: 1000;
`

export const Exit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 3rem;
    margin: 0.625rem 0.625rem 0 0;
    // background-color: red;
`

export const ExitIcon = styled(IoCloseOutline)`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.75rem;

    p {
        margin: 0;

        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        letter-spacing: -0.03em;

        color: #52525B;
    }

    input {
        width: 24.75rem;
        height: 4.43rem;
        margin-top: 0.625rem;
        padding-left: 0.5rem;

        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.125rem;
        letter-spacing: -0.03em;
    
        background: #FFFFFF;
        border: 0.0625rem solid #D4D4D8;

        &:focus {
            outline: none;
        }
    }

    input::placeholder {
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.125rem;
        letter-spacing: -0.03em;

        color: #A1A1AA;
    }
`

export const Title = styled.h1`
    margin: ${({ id }) => id === 'first' ? 0 : '4rem 0'};
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 1.375rem;
    text-align: center;
    letter-spacing: -0.03em;

    color: #27272A;
`
export const PostBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.625rem;

    width: 11rem;
    height: 3.43rem;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: -0.03em;

    color: #27272A;

    background: ${({ id }) => id === 'first' ? '#FBEEA0' :'#D4D4D8'};
    border-radius: 30px;
    border: none;
`