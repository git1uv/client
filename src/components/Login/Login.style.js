import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.png"
import theme from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

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
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;

  @media (min-width: 400px) {
    width: 75%;
  }

  section {
    margin-top: 2%;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  img {
    margin-bottom: 10px;
    width: 25%;
    height: 35%;
    object-fit: cover;
  }
  h1 {
    margin: 30px 0 0 0;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 30px;
    letter-spacing: -0.03em;

    color: #4C434E;
  }
  h2 {
    margin: 0.6rem 0 0 0;
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 1rem;
    line-height: 18px;
    letter-spacing: -0.03em;

    color: #52525B;

    // @media (min-width: 1440px) {
    //   font-size: 0.78rem;
    // }
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
    right: 10px;
    top: 30px;
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
    font-size: 1rem;
    line-height: 17px;
    letter-spacing: -0.03em;

    color: #18181B;
  }
`;

export const FindPw = styled.div`
  display: flex;
  margin-top: 1.06rem;

  button { 
    margin: 0;

    background: none;
    border: none;
    color: black;

    font-weight: 700;
    font-size: 1rem;
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
    font-size: 1rem;
    line-height: 18px;
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
  cursor: pointer;
`

export const SocialLogin = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  button {
    width: 5rem;
    height: 5rem;
    
    margin-bottom: 1.6rem;
    border-radius: 100%;
    border: none;
    cursor: pointer;
  }
    
`

export const Divider = styled.div`
  margin: 1.5rem 0;
  width: 90%;
  height: 0.0625rem;
  background-color: #ccc;

  @media (min-width: 400px) {
    width: 60%;
  } 
  
`;

export const Null = styled.div`
  height: 1.25rem;
  @media (min-width: 1440px) {
    height: 9rem;
  } 
`