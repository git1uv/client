import styled,{ keyframes,  css } from 'styled-components';
import {trashImage, card1ImageMobile, card1ImageWeb, card2ImageMobile, card2ImageWeb, buttonImageWeb, paperImageMobile, paperImageWeb, throwOutImage, backgroundImageMobile, backgroundImageWeb} from '../../assets/trashImg/icons'

export const Container = styled.div`
  display: flex;
  justify-content: center;
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

export const Trash = styled.button`
  position: absolute;
  bottom: 10%;
  border: none;
  width: 60%;
  height: 20%;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  
  background-image: url(${trashImage});
`;
export const Card1 = styled.div`
  position: absolute;
  top: 28%;
  left: 32%;
  background-color: transparent;
  animation: floatIn 1s forwards;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 430px) {
    background-image: url(${card1ImageMobile});

    }
  @media (min-width: 431px) {
  background-image: url(${card1ImageWeb});
  width: 17.7vw;
  height: 23.2vh;
  transform: rotate(-6deg);
  flex-shrink: 0;
    }

    animation: ${({ show }) => show ? css`${floatIn} 0.3s ease-in-out` : 'none'};
`;

export const Card2 = styled.div`
  position: absolute;
  top: 39%;
  left: 48%;
  animation: floatIn 1s forwards;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 430px) {
    background-image: url(${card2ImageMobile});
    }
  @media (min-width: 431px) {
  background-image: url(${card2ImageWeb});
  width: 17.7vw;
  height: 23.2vh;
  transform: rotate(6deg);
  flex-shrink: 0;
    }

    animation: ${({ show }) => show ? css`${floatIn} 0.3s ease-in-out` : 'none'};
`;

export const Card2Button = styled.button`
  margin-top: 52%;
  background: none;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  width: 14.2vw;
  height: 5.4vh;

  z-index: 10;

  background-image: url(${buttonImageWeb});

  animation: ${({ show }) => show ? css`${floatIn} 0.3s ease-in-out` : 'none'};
`;

export const Paper = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-size: contain;
  background-repeat: no-repeat;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
  }
    @media (max-width: 430px) {
    background-image: url(${paperImageMobile});
    }
  @media (min-width: 431px) {
  background-image: url(${paperImageWeb});
  width: 50vw;
  height: 50vh;
  top; 15.5%;

    }
`;

export const ThrowOut = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px; 
  border: none;
  cursor: pointer;
  background-image: url(${throwOutImage});

`;

const floatIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

