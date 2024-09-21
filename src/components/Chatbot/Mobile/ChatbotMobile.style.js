import styled from "styled-components";
import theme from '../../../constants/theme';
import { IoIosArrowBack } from "react-icons/io";

const { ALIGN, RESPONSIVE_SIZE } = theme;

export const App = styled.div`
    width: 100%;
    height: 100dvh;
    background: #F5F4F2;
`

/* Header */
export const Header = styled.div`
    display: grid;
    // justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    gap: 6rem;

    padding: 0 1rem;

    width: 100%;
    height: 4rem;
    background: #F5F4F2;
    box-shadow: 0px 2px 2px #e0e0e0;

    h1 {
        margin: 0;
        color: #27272A;
        font-family: SeoulHangang;
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.0125rem;
    }
`   

export const BackBtn = styled.button`
    ${ALIGN.ROW_CENTER};
    margin-left: -2rem;
    width: 5rem;
    color: #ED6243;
    border: none;
    background: transparent;
`

export const EndBtn = styled.div`
    ${ALIGN.ROW_CENTER};
    width: 6rem;
    height: 2.8rem;

    border-radius: 4.8125rem;
    background: #ED6243;
    border: none;

    color: white;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: normal;
`