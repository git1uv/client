import styled from "styled-components";
import theme from '../../constants/theme'; // theme 파일의 경로
import backgroundImg from "../../assets/backgroundImg.png"

const { ALIGN } = theme;

export const App = styled.div`
    ${ALIGN.COLUMN_CENTER};
    width: 100%;
    height: 90vh;
    margin-top: 10vh;

    ${({ isTestStart }) => 
    isTestStart ? `
        background-image: url(${backgroundImg});
        background-size: cover;
        background-color: #F4F2EB;
        background-position: center;
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100vh;
            backdrop-filter: blur(3px);
            background: rgba(244, 242, 235, 0.70);
        }
        & > * {
            position: relative;
            z-index: 2;
        }
    ` : `
        background: #F4F2EB;    
    `
    } 
    @media (max-width: 430px) {
        height: 100dvh;
    }
    z-index: 1;
`
// background: ${({ isTestStart }) => 
//     isTestStart 
//       ? `url(${backgroundImg}) no-repeat center center / cover, #EEECE3`
//       : `#F4F2EB`};
// ${({ isTestStart }) => 
//     isTestStart && `
//         filter: blur(5px); /* Blur amount */
//         background-size: cover;
//     `} 

// &::before {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100vh;
//     backdrop-filter: blur(3px);
//     background: rgba(255, 255, 255, 0.30);
// }

export const Container = styled.div`
    ${ALIGN.COLUMN_CENTER};

    width: 80%;
    height: 80%;
    padding: 0.2rem 0;

    background: #EEECE3;
    border-radius: 2.5rem;
`

export const TextBox = styled.div`
    width: 80%;

    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;

    #title {
        color: #27272A;
        line-height: 3.125rem;
        letter-spacing: -0.0625rem;
    }
    h2 {
        margin: 0;
        font-size: 1.75rem;
        @media (max-width: 1440px) {
            font-size: 1.25rem;
        }
    }
    h1 {
        margin: 0 0 1% 0;
        font-size: 2.5rem;
        @media (max-width: 1440px) {
            font-size: 2rem;
        }
    }
    p {
        margin: 0;
        color: #52525B;
        font-size: 1.5rem;
        line-height: 2.125rem;
        letter-spacing: -0.03125rem;
        @media (max-width: 1440px) {
            font-size: 1.25rem;
        }
    }
`

export const ImgBox = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: auto;
    img {
        width: 35%; 
        max-height: 100%; 
        object-fit: cover;
    }
`

export const BtnBox = styled.div`
    ${ALIGN.COLUMN_CENTER};
    gap: 1rem;  
    width: 100%;
    button {
        width: 25rem;
        height: 4rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #ffffff;
        color: #27272A;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s;

        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 2.125rem;
        letter-spacing: -0.03125rem;

        &:hover {
            background-color: #f0f0f0;
        }
    }
`;