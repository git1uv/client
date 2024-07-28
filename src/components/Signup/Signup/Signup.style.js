import styled from "styled-components";
import backgroundImg from "../../../assets/backgroundImg.png"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
  }
  & > * {
    position: relative;
    z-index: 2;
  }
  
  input:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 90%;
  min-width: 393px;
  max-width: 640px;

  background: white;

  @media (min-width: 400px) {
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 640px;
  }
`

export const Title = styled.div`
  @media (min-width: 400px) {
    margin-top: 93px;
  }

  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;

  @media (min-width: 400px) {
    width: 75%;
  }

  img {
    margin-bottom: 10px;
    width: 98.45px;
    height: 30px;
    object-fit: cover;
  }

  section {
    margin-top: 20px;
    width: 100%;
    height: 1px; 
    background-color: #ccc;
  }

  h1 {
    margin: 30px 0 0 0;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.03em;

    color: #4C434E;

    @media (min-width: 400px) {
      font-size: 35px;
    }
  }
  h2 {
    margin: 10px 0 0 0;
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.03em;

    color: #52525B;

    @media (min-width: 400px) {
      font-size: 17px;
    }

}
`
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  max-width: 550px;
  margin-top: 44px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input {
    width: 90%;
    height: 43px;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #D4D4D8;
    font-size: 16px;

    @media (min-width: 400px) {
      height: 50px;
    }
  }
  input::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.03em;
    color: #A1A1AA;
    padding: 0;

    @media (min-width: 400px) {
      font-size: 16px;
    } 
  }
    
  p {
    margin: 4px 0 0 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.03em;

    color: #71717A;

    @media (min-width: 400px) {
      font-size: 16px;
    } 
  }

  h6 {
    margin: 0;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.03em;

    color: #18181B;
  }
`

export const PwInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;

    @media (min-width: 400px) {
      width: 24px;
      height: 24px;
    } 
  }

  
`

export const Check = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 84px;
  min-width: 84px;
  height: 31px;

  border: 1px solid #A1A1AA;
  border-radius: 24.5px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;

  background-color: white;
  color: #A1A1AA;

  cursor: pointer;

  &:active {
    background-color: #DDDDDD;
  } 
`

export const CheckNull = styled.div`
  box-sizing: border-box;
  border: 1px solid #D4D4D8;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;

  @media (min-width: 400px) {
    width: 24px;
    min-width: 24px;
    height: 24px;
  } 
`

export const Nickname = styled.div`
  display: flex;
  width: 100%;
  h6 {
    margin-right: 10px;
    min-width: 36px;
  }
`

export const TermsBox = styled.div`
  display: flex;
  p {
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.03em;

    color: #71717A;
  }
  button { 
    background: none;
    border: none;

    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.03em;

    text-decoration: underline;
    cursor: pointer;
    color: black;
  }
`

export const Divider = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px; 
  background-color: #F4F4F5;
`;