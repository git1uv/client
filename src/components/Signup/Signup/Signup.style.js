import styled from "styled-components";

export const Title = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;

  @media (min-width: 400px) {
    width: 75%;
    margin-top: 93px;
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
  width: 90%;
  max-width: 550px;
  margin-top: 44px;

  @media (min-width: 400px) {
    width: 75%;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input {
    width: 100%;
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
    margin: 10px 0 0 0;
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
  margin-top: 15px;

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
`

export const Divider = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 1px; 
  background-color: #F4F4F5;
`;