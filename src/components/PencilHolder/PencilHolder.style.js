import styled from 'styled-components';
import letter from "../../assets/pencilHolder/letter.png"
import backgroundImg from "../../assets/pencilHolder/bgImg.png"

export const Container = styled.div`
    @media (max-width: 1440px) {
        html {
            font-size: 13px; // 화면 너비가 1200px 이하일 때
        }
    } 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-color: #EEECE3;
    background-position: center;
        
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(3px);
        background: rgba(255, 255, 255, 0.30);
    }
    & > * {
        position: relative;
        z-index: 2;
    }

    @media (max-width: 430px) {
        height: 100dvh;
    }
    
    section {
        height: 2rem;
        @media (max-width: 1440px) {
            height: 2rem;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: auto;

    h1 {
        font-family: 'Pretendard';
        font-weight: 500;
        font-size: 2.5rem;
        letter-spacing: -0.408px;
        color: #000000;

        @media (max-width: 1440px) {
            font-size: 2rem;
        }
    }
    p {
        margin: 0;
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.25rem;
        letter-spacing: -0.408px;
        color: #686868;

        @media (max-width: 1440px) {
            font-size: 1rem;
        }
    }
`

export const Letter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50rem;
    height: auto;
    // padding: 3% 1rem;

    @media (max-width: 1440px) {
        width: 50rem;
        padding: 0;
    }

    background-image: url(${letter});
    background-size: 100%;
    background-position: cover;
    background-repeat: no-repeat;
`

export const SizedBox = styled.div`
    height: 14rem;

    @media (max-width: 1440px) {
        height: 8rem;
    }
    @media (max-width: 1200px) {
        height: 8rem;
    }
`

export const WriteBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40rem;
    margin: 3rem 0 2rem 0;

    @media (max-width: 1440px) {
        margin: 2rem 0 1rem 0;
    }
    @media (max-width: 1200px) {
        margin: 3rem 0 2rem 0;
    }

    h3 {
        color: #ED6243;
        font-family: Pretendard;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.375rem; /* 146.667% */
        letter-spacing: -0.0255rem;
    }

    input {
        position: relative;
        width: 22rem;
        height: 3rem;
        border: none;
        border-radius: 0.3125rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        font-family: SeoulHangang;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: normal;
        padding-left: 10px;
    }

    input::placeholder {
        color: #A3A3A3;
    }
    
    input:focus {
        outline: none;
    }

    textarea {
        width: 38rem;
        height: 30vh;
        @media (max-width: 1440px) {
            height: 25vh;
        }

        border: none;
        border-radius: 1rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        font-family: SeoulHangang;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: normal;
        padding: 10px;

        resize: none;

        &::placeholder {
            color: #A3A3A3;
        }
    }
    textarea:focus {
        outline: none;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const SendBtn = styled.div`
    padding-left: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 1440px) {
        margin-bottom: 1rem;
    }

    width: 14.375rem;
    height: 3.75rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 3.125rem;
    background: linear-gradient(90deg, #ED6243 11.5%, #FF9153 92%);

    p {
        margin: 0 0 0 3rem;
        color: white;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.5625rem;
        font-weight: 800;
        line-height: 1.375rem;
        letter-spacing: -0.0255rem;
    }
`

export const PencilIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8125rem;
    height: 2.8125rem;
    flex-shrink: 0;
    background: #F5F3ED; 
    border-radius: 100%;

    img {
        width: 2rem;
        height: 2rem;
    }
`
