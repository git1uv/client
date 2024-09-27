import styled from 'styled-components';
import letter from "../../assets/pencilHolder/letter_mobile.webp"

export const Letter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30rem;
    height: 60vh;
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
    width: 24rem;
    margin: 0.5rem 0 1rem 0;

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
        width: 22rem;
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


