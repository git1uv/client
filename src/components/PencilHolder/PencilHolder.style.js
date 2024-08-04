import styled from 'styled-components';
import letter from "../../assets/pencilHolder/letter.png"
import backgroundImg from "../../assets/pencilHolder/bgImg.png"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
  & > * {
    position: relative;
    z-index: 2;
  }

    @media (max-width: 430px) {
        height: 100dvh;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    top: 4rem;

    h1 {
        font-family: 'Pretendard';
        font-weight: 500;
        font-size: 2.5rem;
        letter-spacing: -0.408px;
        color: #000000;
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

    top: 8rem;
    width: 48.25rem;
    height: 70%;

    @media (max-width: 1440px) {
        top: 2.5rem;
        width: 50%;
    }
    background-image: url(${letter});
    background-size: 100%;
    background-position: contain;
    background-repeat: no-repeat;
`