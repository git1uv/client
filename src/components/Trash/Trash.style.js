import styled from 'styled-components';
import {card1ImageMobile, card1ImageWeb, card2ImageMobile, card2ImageWeb, buttonImageWeb, buttonImageMobile} from '../../assets/trashImg/icons'

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
  background-size: contain;
  @media (max-width: 430px) {
    background-image: url(${(props) => props.backgroundImageMobile});
    }
  @media (min-width: 431px) {
  background-image: url(${(props) => props.backgroundImageWeb});
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
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.trashImageMobile});
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

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: SeoulHangangLight;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  width: 20vw;
  height: 60vh;
  z-index: 50;
`;

export const Card1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F7F5F0;
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
  @media (min-width: 1024px) and (max-width: 1470px) {
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
  background-color: #F7F5F0;
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
  @media (min-width: 1024px) and (max-width: 1470px) {
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
  @media (min-width: 1024px) and (max-width: 1470px) {
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
  height: 25%;
  @media (max-width: 430px) {
    width: 95vw;
  }
  @media (min-width: 431px) {
    width: 57.8vw;
  }
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
    font-family: SeoulHangangLight;
    font-style: normal;
    font-weight: 400;
    outline: none;
    @media (min-width: 431px){
    font-size: 1.625rem;
    line-height: 32px; 
    }
    @media (max-width: 430px){
    font-size: 1.16rem;
    line-height: 21px; 
    }
  }
  @media (max-width: 430px) {
    background-image: url(${(props) => props.paperImageMobile});
    padding: 3.5rem 2.16rem;
    width: 95vw;
    height: 60vh;
    margin-top: 15.3vh;
    background-size: cover;

    }
  @media (min-width: 431px) {
    background-image: url(${(props) => props.paperImageWeb});
    width: 57.8vw;
    height: 53.7vh;
    padding: 5rem;
    background-size: cover;
    margin-top: 22.2vh;
    }
`;

export const ThrowOut = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  cursor: pointer;
  background: none;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 430px) {
    background-image: url(${(props) => props.throwOutImageMobile});
    width: 176px;
    height: 43px;
    margin-right: 2vw;
    margin-top: 10px;
    }
  @media (min-width: 431px) and (max-width: 1023px) { 
    background-image: url(${(props) => props.throwOutImageWeb});
    width: 184.5px;
    height: 45px;
    margin-top: 12px;
  }
  @media (min-width: 1024px) and (max-width: 1470px) {
    background-image: url(${(props) => props.throwOutImageWeb});
    width: 184.5px;
    height: 45px;
    margin-top: 12px;
  }
  @media (min-width: 1441px) {
    background-image: url(${(props) => props.throwOutImageWeb});
    width: 246px;
    height: 60px;
    margin-top: 12px;
    }
`;

