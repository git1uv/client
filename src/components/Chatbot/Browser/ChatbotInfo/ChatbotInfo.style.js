import styled from "styled-components"
import theme from '../../../../constants/theme'; // theme 파일의 경로

const { ALIGN } = theme;
export const InfoBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    gap: 1rem;
    width: 100%;
    height: 65%;
`

export const Infos = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    /* S.Info 요소들 사이에만 간격 추가 */
    & > div:not(:first-of-type) {
        margin-top: 1rem;
    }
`

export const IconBox = styled.div`
    ${ALIGN.COLUMN_CENTER};
    padding: 3% 0;
    img {
        width: ${({ id }) => id === 'howto' ? '1.8rem' : id === 'func' ? '2.2rem' : '2.8rem'};
        height: auto;
        object-fit: cover;

        @media (max-width: 1440px) {
            width: ${({ id }) => id === 'howto' ? '1.2rem' : id === 'func' ? '1.7rem' : '1.9rem'};
        }
    }

    h2 {
        margin: 1% 0 0 0;
        color: #27272A;
        font-family: Pretendard;
        font-size: 1.125rem;
        @media (max-width: 1440px) {
            font-size: 1rem;
        }
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.01125rem;
    }
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    border-radius: 1.25rem;
    background: #F7F7F8;

    p {
        margin: 1rem;
        color: #27272A;
        
        font-family: Pretendard;
        font-size: 1rem;
        @media (max-width: 1440px) {
            font-size: 0.8rem;
        }
        font-weight: 300;
        line-height: 1.375rem;
        letter-spacing: -0.01rem;

        text-align: ${({ id }) => id === 'func' ? 'center' : null};
    }
`