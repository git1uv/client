import styled from 'styled-components';
import letter from "../../assets/pencilHolder/letter.png"
import backgroundImg from "../../assets/pencilHolder/bgImg.png"

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
    height: 100%;
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
        height: 8rem;
        @media (max-width: 1440px) {
            height: 5rem;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 10vh;

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
    }
`

export const Letter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50rem;
    height: 80vh;

    @media (max-width: 1440px) {
        width: 50rem;
        height: 65vh;
    }
    @media (max-width: 1200px) {
        width: 50rem;
        height: 56vh;
    }
    background-image: url(${letter});
    background-size: 100%;
    background-position: cover;
    background-repeat: no-repeat;
`

export const SizedBox = styled.div`
    height: 5rem;

    @media (max-width: 1440px) {
        height: 4rem;
    }
    @media (max-width: 1200px) {
        height: 4rem;
    }
`

export const WriteBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40rem;
    margin-top: 1.5rem;

    h3 {
        color: #ED6243;
        font-family: Pretendard;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.375rem; /* 146.667% */
        letter-spacing: -0.0255rem;
    }

    input {
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
        width: 41rem;
        height: 40vh;
        @media (max-width: 1440px) {
            height: 25vh;
        }

        border: none;
        border-radius: 1rem;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        resize: none;
    }
    textarea:focus {
        outline: none;
    }
`