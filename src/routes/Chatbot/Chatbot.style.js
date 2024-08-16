import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png'
import sendBtn from '../../assets/chatbot/sendBtn.png'
import { IoIosArrowBack } from "react-icons/io";
import theme from '../../constants/theme'; // theme 파일의 경로

const { ALIGN } = theme;

export const App = styled.div`
    ${ALIGN.COLUMN_CENTER};

    width: 100%;
    height: 100vh;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-color: #EEECE3;
    background-position: center;

    @media (max-width: 430px) {
        height: 100dvh;
    }
    z-index: 1;
`

export const Top = styled.div`
    ${ALIGN.ROW_CENTER} ;
    position: relative; /* 자식 요소들의 기준점 설정 */
    width: 100%; /* 컨테이너의 너비 */
`

export const Character = styled.img`
    position: relative;
    width: 230px;
    height: auto;
    z-index: 101;

    @media (max-width: 1440px) {
        width: 200px;
    }
    @media (max-width: 630px) {
        width: 170px;
    }
`

export const Chair = styled.img`
    position: absolute;
    width: 400px;
    height: auto;

    bottom: calc(50% - 93px);  /* Chair 이미지 하단에 Character가 위치하도록 설정 */
    left: calc(50% - 155px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */

    @media (max-width: 1440px) {
        width: 370px;
        bottom: calc(50% - 80px);  /* Chair 이미지 하단에 Character가 위치하도록 설정 */
        left: calc(50% - 140px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */
    }

    @media (max-width: 630px) {
        width: 340px;
        bottom: calc(50% - 68px);  /* Chair 이미지 하단에 Character가 위치하도록 설정 */
        left: calc(50% - 130px); /* 이미지의 중앙에 캐릭터가 위치하도록 조정 */
    }

    z-index: 100;
`

export const Bottom = styled.div`
    ${ALIGN.COLUMN_CENTER};

    width: 70%;
    min-width: 500px;
    height: 65vh;

    border-radius: 2.5rem;
    border: 1px solid #FFF;
    background: rgba(243, 243, 243, 0.85);
    box-shadow: 3px 2px 20px 0px rgba(95, 95, 95, 0.25) inset;
    backdrop-filter: blur(10px);
`

/* ChatbotBox*/

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 5%;

    width: 90%;
    height: 15%;
    background-color: #F5F4F2;
    border-radius: 2.5rem 2.5rem 0 0;
    filter: drop-shadow(0px 4px 4px rgba(165, 165, 165, 0.25));

    h1 {
        width: 80%;
        text-align: center;

        color: #27272A;
        font-family: SeoulHangang;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.015rem;
    }
    button {
        width: 6.8rem;
        // width: 15%;
        height: 2.8rem;
        margin-right: -4%;

        border-radius: 4.8125rem;
        background: #ED6243;
        border: none;

        color: white;
        font-family: Pretendard;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: normal;
    }
`

export const BackBtn = styled(IoIosArrowBack)`
    // width: 2rem;
    width: 15%;
    height: 2rem;
    margin-left: -8%;
    color: #ED6243;
`

/* ChatbotBox*/

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
    height: 15%;

    h1 {
        margin: 0;
        color: #27272A;
        font-family: SeoulHangang;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.015rem;
    }
`
export const Warning = styled.div`
    h3 {}
    p {}
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

/* ChatbotInfo*/

export const InfoBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    gap: 1rem;
    width: 100%;
    height: 50%;
    background-color: skyblue;
`

export const Infos = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: magenta;
`

export const IconBox = styled.div`
    ${ALIGN.COLUMN_CENTER};
    padding: 3% 0;
    img {
        width: ${({ id }) => id === 'howto' ? '1.8rem' : id === 'func' ? '2.2rem' : '2.8rem'};
        height: 2.4rem;
        object-fit: cover;
    }

    h2 {
        margin: 1% 0 0 0;
        color: #27272A;
        font-family: Pretendard;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.01125rem;
    }
`

export const Info = styled.div`
    width: 100%;
    border: 1px black solid;
    height: 100%;
`