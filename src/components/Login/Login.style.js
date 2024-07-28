import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"

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

  section {
    margin-top: 20px;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  img {
    margin-bottom: 10px;
    width: 98.45px;
    height: 30px;
    object-fit: cover;
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
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  width: 90%;

  @media (min-width: 400px) {
    width: 75%;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 40px;

  input {
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

  button { 
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 10px;
    top: 20px;
    cursor: pointer;
    font-size: 20px;

    color: #aaa;
    background: none;
    border: none;
  }

  p {
    margin: 0;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.03em;

    color: #18181B;
    
    @media (min-width: 400px) {
      font-size: 16px;
    } 
  }
`;

export const FindPw = styled.div`
  display: flex;
  margin-top: 15px;

  button { 
    margin: 0;
    background: none;
    border: none;
    color: black;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.03em;

    cursor: pointer;
    text-decoration: underline; 
  }
  h6 {
    margin: 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.03em;

    color: #71717A;
}
`;

export const LoginButton = styled.button`
  width: 90%;
  height: 60px;

  @media (min-width: 400px) {
    width: 75%;
  }
    
  background: #FBEEA0;
  border: none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
  cursor: pointer;
`
export const SocialLogin = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 80%;
  font-size: 24px;

  button {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 100%;
    border: none;
    cursor: pointer;

    @media (min-width: 400px) {
      width: 80px;
      height: 80px;
    } 
  }
    
`

export const Divider = styled.div`
  margin: 30px 0;
  width: 90%;
  height: 1px;
  background-color: #ccc;

  @media (min-width: 400px) {
    width: 60%;
  } 
  
`;

export const Null = styled.div`
  height: 20px;
  @media (min-width: 400px) {
    height: 176px;
  } 
`