import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0 ,0.6);
    z-index: 500;
`

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 353px;
    height: 240px;

    background: white;
    border-radius: 26.4px;
    z-index: 1000;

    @media (min-width: 393px) {
        width: 466px;
        height: 316px;
    }
`
