import styled from "styled-components";
import backgroundImg from '../../assets/backgroundImg.png'

export const App = styled.div`
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

    @media (max-width: 430px) {
        height: 100dvh;
    }
    z-index: 1;
`

export const Top = styled.div`
`

export const Bottom = styled.div`
`
