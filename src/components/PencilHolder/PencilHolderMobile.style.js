import styled from 'styled-components';
import letter from "../../assets/pencilHolder/letter_mobile.webp"

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 2%;
    h1 {
        margin: 0 0 1% 0;
        font-family: 'Pretendard';
        font-weight: 500;
        font-size: 1.7rem;
        letter-spacing: -0.408px;
        color: #000000;
    }
    p {
        margin: 0;
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 1.1rem;
        letter-spacing: -1.3px;
        color: #686868;
    }
`

export const Letter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 28rem;
    height: 35rem;
    margin-top: 2rem;

    background-image: url(${letter});
    background-size: 100%;
    background-position: cover;
    background-repeat: no-repeat;
`

export const WriteBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;


    h3 {
        color: #ED6243;
        font-family: SeoulHangangLight;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.375rem; /* 146.667% */
        letter-spacing: -0.0255rem;
    }

    input {
        position: relative;
        width: 100%;
        height: 3rem;
        border: none;
        border-radius: 0.3125rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        font-family: SeoulHangangLight;
        font-size: 1.15rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1px;
        padding: 5%;
    }

    input::placeholder {
        color: #A3A3A3;
    }
    
    input:focus {
        outline: none;
    }

    textarea {
        width: 100%;
        height: 25vh;

        border: none;
        border-radius: 1rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        font-family: SeoulHangangLight;
        font-size: 1.15rem;
        font-weight: 400;
        line-height: normal;
        padding: 5%;

        resize: none;

        &::placeholder {
            color: #A3A3A3;
        }
    }
    textarea:focus {
        outline: none;
    }
`


