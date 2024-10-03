import styled from 'styled-components';
import letter from "../../assets/pencilHolder/letter.webp"
import backgroundImg from "../../assets/pencilHolder/bgImg.webp"

export const Container = styled.div`
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
        @media (max-width: 1470px) {
            height: 2rem;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    h1 {
        margin: 0 0 1% 0;
        font-family: 'Pretendard';
        font-weight: 500;
        font-size: 2.5rem;
        letter-spacing: -0.408px;
        color: #000000;

        @media (max-width: 1470px) {
            font-size: 1.5rem;
        }
    }
    p {
        margin: 0;
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.25rem;
        letter-spacing: -0.408px;
        color: #686868;

        @media (max-width: 1470px) {
            font-size: 0.75rem;
        }
    }
`

export const Letter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    // width: 55rem;
    width: 900px;
    height: auto;

    @media (max-width: 1470px) {
        width: 700px;
        padding: 0;
    }

    background-image: url(${letter});
    background-size: 100%;
    background-position: cover;
    background-repeat: no-repeat;
`

export const SizedBox = styled.div`
    height: 14rem;

    @media (max-width: 1470px) {
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
    align-items: center;
    width: 100%;
    margin: 3rem 0 2rem 5rem;

    @media (max-width: 1470px) {
        margin: 2rem 0 1rem 4rem;
    }
    @media (max-width: 1200px) {
        margin: 3rem 0 2rem 4rem;
    }

    h3 {
        align-self: flex-start;
        color: #ED6243;
        font-family: Pretendard;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.375rem; /* 146.667% */
        letter-spacing: -0.0255rem;
    }

    input {
        align-self: flex-start;
        position: relative;
        width: 90%;
        height: 3rem;

        border: none;
        border-radius: 0.3125rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        font-family: SeoulHangang;
        font-size: 1.25rem;
         @media (max-width: 1470px) {
            font-size: 1rem;
        }
        font-weight: 400;
        line-height: normal;
        padding-left: 2%;

    }

    input::placeholder {
        color: #A3A3A3;
    }
    
    input:focus {
        outline: none;
    }

    textarea {
        align-self: flex-start;
        width: 90%;
        height: 30vh;
        @media (max-width: 1470px) {
            height: 25vh;
        }

        border: none;
        border-radius: 1rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        font-family: SeoulHangang;
        font-size: 1.25rem;
        @media (max-width: 1470px) {
            font-size: 1rem;
        }
        font-weight: 400;
        line-height: normal;
        padding-top: 2%;
        padding-left: 2%;

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
    align-items: center;
    width: ;
`

export const SendBtn = styled.div`
    padding-left: 1rem;
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin: 0 0 3rem 3rem;

    @media (max-width: 1470px) {
        margin: 0 0 1rem 2rem;
    }
    
    width: 14.375rem;
    height: 3.75rem;
    
    @media (max-width: 1470px) {
        width: 10.375rem;
        height: 3rem;
    }
    @media (max-width: 430px) {
        width: 11rem;
        height: 3.75rem;
        margin: 0 0 1rem 1.2rem;
    }

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 3.125rem;
    background: linear-gradient(90deg, #ED6243 11.5%, #FF9153 92%);

    cursor: pointer;

    p {
        margin: 0 0 0 2rem;
        @media (max-width: 430px) {
            width: 100%;
            margin: 0 10% 0 0;
        }
        color: white;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.5625rem;
        @media (max-width: 1470px) {
           font-size: 1rem;
        }
        @media (max-width: 430px) {
           font-size: 1.5rem;
        }
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
    @media (max-width: 1470px) {
        width: 2rem;
        height: 2rem;
    }
    flex-shrink: 0;
    background: #F5F3ED; 
    border-radius: 100%;

    img {
        width: 2rem;
        height: 2rem;
        @media (max-width: 1470px) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`
