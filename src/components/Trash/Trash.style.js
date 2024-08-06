import styled,{ keyframes,  css } from 'styled-components';
import {trashImage, trashImageMobile, card1ImageMobile, card1ImageWeb, card2ImageMobile, card2ImageWeb, buttonImageWeb, buttonImageMobile, paperImageMobile, paperImageWeb, throwOutImage, backgroundImageMobile, backgroundImageWeb} from '../../assets/trashImg/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: 100% 100%;
  background-color: #EEECE3;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 89.7vh;
  z-index: 1;
  margin-top:10.3vh;
  @media (max-width: 430px) {
    background-image: url(${backgroundImageMobile});
    }
  @media (min-width: 431px) {
  background-image: url(${backgroundImageWeb});
    }
`;

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 40%;
`;

export const Trash = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  
  @media (max-width: 430px) {
    width: 90vw;
    height: 26vh;
    background-image: url(${trashImageMobile});
    background-size: cover;
    }
  @media (min-width: 431px) {
    width: 51.7vw;
    height: 31vh;
    background-image: url(${trashImage});
    background-size: contain;
    }
`;
export const Card1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  animation: floatIn 1s forwards;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(-6deg);
  border-radius: 25px;
  box-shadow: -10px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  z-index: 10;
  @media (max-width: 430px) {
    background-image: url(${card1ImageMobile});
    width: 56vw;
    height: 23.5vh;
    margin-right: -12vw;
    }
  @media (min-width: 431px) {
  background-image: url(${card1ImageWeb});
  width: 17.7vw;
  height: 23.2vh;
  margin-top: 5vh;
  margin-right: -1vw;
    }

    animation: ${({ show }) => show ? css`${floatIn} 0.3s ease-in-out` : 'none'};
`;

export const Card2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: floatIn 1s forwards;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(6deg);
  border-radius: 25px;
  box-shadow: -10px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  z-index: 11;
  @media (max-width: 430px) {
    background-image: url(${card2ImageMobile});
    width: 56vw;
    height: 23.5vh;
    margin-top: 41vh;
    margin-left: -12vw;
    }
  @media (min-width: 431px) {
    background-image: url(${card2ImageWeb});
    width: 17.7vw;
    height: 23.2vh;
    margin-top: 27vh;
    margin-left: -1vw;
    }
  animation: ${({ show }) => show ? css`${floatIn} 0.3s ease-in-out` : 'none'};
`;

export const Card2Button = styled.button`
  margin-bottom: 3vh;
  background: none;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  z-index: 13;
  @media (max-width: 430px) {
    background-image: url(${buttonImageMobile});
    width: 44.7vw;
    height: 5.3vh;
  }
  @media (min-width: 431px) {
    background-image: url(${buttonImageWeb});
    width: 14.2vw;
    height: 5.4vh;
  }

  animation: ${({ show }) => show ? css`${floatIn} 0.3s ease-in-out` : 'none'};
`;

export const Paper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-repeat: no-repeat;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
  }
  @media (max-width: 430px) {
    background-image: url(${paperImageMobile});
    padding: 42px 26px;
    width: 81.7vw;
    height: 48.9vh;
    margin-top: 5vh;
    background-size: cover;

    }
  @media (min-width: 431px) {
    background-image: url(${paperImageWeb});
    width: 48.6vw;
    height: 39.4vh;
    margin-top: 11.9vh;
    padding: 80px;
    background-size: contain;
    }
`;

export const ThrowOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${throwOutImage});
  @media (max-width: 430px) {
    width: 44.8vw;
    height: 6vh;
    margin-bottom: 17.5vh;
    margin-left: 51.5vw;

    }
  @media (min-width: 431px) {
    width: 14.2vw;
    height: 3.75rem;
    margin-bottom: 17.5vh;
    margin-left: 46.5vw;
    }
`;

const floatIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

