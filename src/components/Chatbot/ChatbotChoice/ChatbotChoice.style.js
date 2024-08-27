import styled from "styled-components";
import theme from '../../../constants/theme'

const {ALIGN, RESPONSIVE_SIZE} = theme;

export const App = styled.div`
    display: block;
    width: 100vw;
    height: 90vh;
    margin-top: 10vh;
    min-height: 0px; 
    min-width: 0px;

    background-color: #F4F2EB;

    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        height: 93.5dvh;
        margin-top: 6.5dvh;

    }
`
export const Title = styled.h1`
    text-align: center;
    padding: 2rem 0;
`

export const ChatbotInfo = styled.div`
    ${ALIGN.COLUMN_CENTER};
    width: 80%;
    margin-left: 10%;
`