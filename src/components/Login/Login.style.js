import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: auto;
  height: 100vh;
  
  input:focus {
    outline: none;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: lightblue;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  div {
    margin: 10px 0;
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
  h5 {
    margin: 20px 0 0 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.03em;

    color: #4C434E;
  }
  p {
    margin: 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.03em;

    color: #52525B;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  width: 96%;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  margin-top: 20px;

  input {
    height: 43px;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #D4D4D8;
    font-size: 16px;
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
  }
`;

export const FindPw = styled.div`
  display: flex;
  margin-top: 9px;
  button { 
    margin: 0;
    background: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline; 
  }
  p {
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
  width: 50%;
  max-width: 367px;
  min-width: 200px;
  height: 60px;
  margin-top: 27px;

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
  }
`

export const Divider = styled.div`
  margin: 10px 0;
  width: 85%;
  height: 1px;
  background-color: #ccc;
`;