import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 80px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  img {
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
  p {
    margin: 26px 0 0 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.03em;
    color: #4C434E;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
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
  p {
    margin: 4px 0 0 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.03em;

    color: #71717A;
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
    background-color: red;
    ㅊ
  } 
`

export const CheckNull = styled.div`
  box-sizing: border-box;
  border: 1px solid #D4D4D8;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
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
    font-style: normal;
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
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.03em;
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Divider = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px; 
  background-color: #F4F4F5;
`;