import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.avif"
import theme from "../../constants/theme";
// import kakao from '../../assets/login/kakao.webp'
import kakaoOnly from '../../assets/login/kakao_login_medium_wide.webp'
import google from '../../assets/login/google.webp'

const {ALIGN} = theme;


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

  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-color: #FFF;

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

  width: 40rem;

  @media (max-width: 1470px) {
    width: 30rem;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    border-radius: 0px;
    box-shadow: 0px;
    width: 100%;
  }
`

export const Title = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;

  @media (max-width: 1470px) {
    margin-top: 10%;
  }
  @media (max-width: 430px) {
    margin-top: 15%;
    width: 80%;
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
    margin: 7% 0 0 0;
    font-family: 'Pretendard-Regular';
    font-weight: 600;
    font-size: 1.8rem;
    @media (max-width: 1470px) {
      font-size: 1.5rem;
    }
    @media (max-width: 430px) {
      font-size: 1.75rem;
    }
    letter-spacing: -0.03em;

    color: #4C434E;
  }
  h2 {
    margin: 0.6rem 0 0 0;
    font-family: 'Pretendard-Regular';
    font-weight: 300;
    font-size: 1rem;
    @media (max-width: 1470px) {
      font-size: 0.9rem;
    }
    @media (max-width: 430px) {
      font-size: 1rem;
    }
    letter-spacing: -0.03em;

    color: #52525B;
  }
`;

export const InputBox = styled.div`
  ${ALIGN.COLUMN_CENTER};
  width: 75%;

  @media (max-width: 430px) {
    width: 80%;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  margin-top: 2.5rem;

  @media (max-width: 1470px) {
    margin-top: 2rem;
  }

  input {
    height: 2.6rem;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #D4D4D8;
    font-size: 1rem;
  }
  input::placeholder {
    font-family: 'Pretendard-Regular';
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

    font-family: 'Pretendard-Regular';
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

    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    letter-spacing: -0.03em;

    text-decoration: underline; 
  }
  h6 {
    margin: 0;

    font-family: 'Pretendard-Regular';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    letter-spacing: -0.03em;

    color: #71717A;
}
`;

export const LoginButton = styled.button`
  width: 75%;
  height: 3.75rem;
  min-height: 40px;

  margin-top: 1.25rem;

  @media (max-width: 1470px) {
    margin-top: 2rem;
  }
  @media (max-width: 430px) {
    width: 80%;
  }
    
  background: #FBEEA0;
  border: none;

  font-family: 'Pretendard-Regular';
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
  width: 80%;
  justify-content: center;

  button {
    width: 80%;
    height: 4rem;

    @media (max-width: 1470px) {
      width: 80%;
      height: 3rem;
    }
    
    margin: 1rem 0;
    // border-radius: 100%;
    border: none;

    background-image: url(${kakaoOnly});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;


    // &:first-child {
    //   background-image: url(${kakaoOnly});
    //   background-size: 100%;
    // } 
    // &:last-child {
    //   background-image: url(${google});
    //   background-size: 100%;
    // } 
  }
    
`

export const Divider = styled.div`
  margin: 2rem 0 1rem 0;
  width: 80%;
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