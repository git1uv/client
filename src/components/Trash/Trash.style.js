import styled from 'styled-components';
import {trashImage, trashImageFront, trashImageMobile, card1ImageMobile, card1ImageWeb, card2ImageMobile, card2ImageWeb, buttonImageWeb, buttonImageMobile, paperImageMobile, paperImageWeb, throwOutImageWeb, throwOutImageMobile, backgroundImageMobile, backgroundImageWeb} from '../../assets/trashImg/icons'

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
  height: 100vh;
  z-index: 1;
  bakcground-size: contain;
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
  position: relative; 
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${trashImageMobile});
  background-size: cover;
  z-index: 10;

  @media (max-width: 430px) {
    width: 90vw;
    height: 26vh;
    }
  @media (min-width: 431px) {
    width: 51.7vw;
    height: 31vh;
    }
`;

export const TrashFront = styled.div`
  position: absolute;
  width: 100%;
  background-image: url(${trashImageFront});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 15; 
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
  z-index: 12;
  @media (max-width: 430px) {
    background-image: url(${card1ImageMobile});
    width: 220px;
    height: 200px;
    margin-right: -12vw;
    }
  @media (min-width: 431px) and (max-width: 1023px) { 
    background-image: url(${card1ImageWeb});
    width: 250px;
    height: 211.6px;
    margin-right: -12vw;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${card1ImageWeb});
    width: 210px;
    height: 177.7px;
    margin-top: 5vh;
    margin-right: -1vw;
  }
  @media (min-width: 1441px) {
    background-image: url(${card1ImageWeb});
    width: 306px;
    height: 259px;
    margin-top: 5vh;
    margin-right: -1vw;
    }
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
  z-index: 13;
  @media (max-width: 430px) {
    background-image: url(${card2ImageMobile});
    width: 220px;
    height: 200px;
    margin-top: 45vh;
    margin-left: -12vw;
    }
  @media (min-width: 431px) and (max-width: 1023px) { 
    background-image: url(${card2ImageWeb});
    width: 250px;
    height: 211.6px;
    margin-top: 41vh;
    margin-left: -12vw;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${card2ImageWeb});
    width: 210px;
    height: 177.7px;
    margin-top: 27vh;
    margin-left: -1vw;
  }
  @media (min-width: 1441px) {
    background-image: url(${card2ImageWeb});
    width: 306px;
    height: 259px;
    margin-top: 27vh;
    margin-left: -1vw;
    }
`;

export const Card2Button = styled.button`
  margin-bottom: 3vh;
  background: none;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  z-index: 14;
  @media (max-width: 430px) {
    background-image: url(${buttonImageMobile});
    width: 176px;
    height: 43px;
  }
  @media (min-width: 431px) and (max-width: 1023px) { 
    background-image: url(${buttonImageWeb});
    width: 190px;
    height: 46.3px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${buttonImageWeb});
    width: 150px;
    height: 36.6px;
  }
  @media (min-width: 1441px) {
    background-image: url(${buttonImageWeb});
    width: 246px;
    height: 60px;
  }
`;

export const PaperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 25%;
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
    color: #000;
    font-family: SeoulHangang;
    font-style: normal;
    font-weight: 400;
    @media (min-width: 431px){
    font-size: 26px;
    line-height: 32px; 
    }
    @media (max-width: 430px){
    font-size: 14px;
    line-height: 21px; 
    }
  }
  @media (max-width: 430px) {
    background-image: url(${paperImageMobile});
    padding: 42px 26px;
    width: 81.7vw;
    height: 48.9vh;
    margin-top: 15.3vh;
    background-size: cover;

    }
  @media (min-width: 431px) {
    background-image: url(${paperImageWeb});
    width: 48.6vw;
    height: 39.4vh;
    padding: 80px;
    background-size: cover;
    margin-top: 22.2vh;
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
  @media (max-width: 430px) {
    background-image: url(${throwOutImageMobile});
    width: 176px;
    height: 43px;
    margin-right: 2vw;
    margin-top: 10px;
    }
  @media (min-width: 431px) and (max-width: 1023px) { 
    background-image: url(${throwOutImageWeb});
    width: 184.5px;
    height: 45px;
    margin-right: 17.5vw;
    margin-top: 12px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    background-image: url(${throwOutImageWeb});
    width: 184.5px;
    height: 45px;
    margin-right: 19.5vw;
    margin-top: 12px;
  }
  @media (min-width: 1441px) {
    background-image: url(${throwOutImageWeb});
    width: 246px;
    height: 60px;
    margin-right: 21vw;
    margin-top: 12px;
    }
`;

