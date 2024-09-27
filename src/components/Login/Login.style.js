import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"
import theme from "../../constants/theme";
import kakao from '../../assets/login/kakao.webp'
import google from '../../assets/login/google.webp'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  @media (max-width: 430px) {
    height: 100dvh;
  }

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
  background: white;

  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 40%;
  min-width: 393px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    border-radius: 0px;
    box-shadow: 0px;
  }
`

export const Title = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;

  @media (min-width: 430px) {
   width: 75%;
  }

  section {
    margin-top: 2%;
    width: 100%;
    height: 0.0625rem;
    background-color: #ccc;
  }
  img {
    margin-bottom: 0.625rem;
    width: 6.15rem;
    height: 1.875rem;
    object-fit: cover;
  }
  h1 {
    margin: 1.875rem 0 0 0;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: -0.03em;

    color: #4C434E;
  }
  h2 {
    margin: 0.6rem 0 0 0;
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: -0.03em;

    color: #52525B;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 2.5rem;

  input {
    height: 2.6rem;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #D4D4D8;
    font-size: 1rem;
  }
  input::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: -0.03em;
    color: #A1A1AA;

    padding: 0;
  }

  button { 
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0.625rem;
    top: 1.875rem;
    font-size: 1.25rem;

    color: #aaa;
    background: none;
    border: none;
  }

  p {
    margin: 0;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: -0.03em;

    color: #18181B;
  }
`;

export const FindPw = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.06rem;

  button { 
    margin: 0;

    background: none;
    border: none;
    color: black;

    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    letter-spacing: -0.03em;

    text-decoration: underline; 
  }
  h6 {
    margin: 0;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    letter-spacing: -0.03em;

    color: #71717A;
}
`;

export const LoginButton = styled.button`
  width: 90%;
  height: 3.75rem;
  min-height: 40px;
  margin-top: 1.25rem;

  @media (min-width: 400px) {
    width: 75%;
  }
    
  background: #FBEEA0;
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
  &:disabled  {
    background-color: #ccc; 
    color: #666;            
    cursor: not-allowed;    
    opacity: 0.7;           
  }
`

export const SocialLogin = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  button {
    width: 4rem;
    height: 4rem;
    
    margin-bottom: 1.6rem;
    border-radius: 100%;
    border: none;
    box-shadow: 2px 3px 4px #D9D9D9;


    &:first-child {
      background-image: url(${kakao});
      background-size: 100%;
    } 
    &:last-child {
      background-image: url(${google});
      background-size: 100%;

    } 
  }
    
`

export const Divider = styled.div`
  margin: 1.25rem 0;
  width: 90%;
  height: 0.0625rem;
  background-color: #ccc;

  @media (min-width: 400px) {
    width: 60%;
  } 
  
`;

export const Null = styled.div`
  height: 1.25rem;
  @media (min-width: 1500px) {
    height: 9rem;
  } 
`