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
        height: 90dvh;
    }
`