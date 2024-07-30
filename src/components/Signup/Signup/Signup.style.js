import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 2.5rem;

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
    
  p {
    margin: 0.625rem 0 0 0;
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: -0.03em;

    color: #71717A;
  }

  h6 {
    margin: 0;

    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 1rem;
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
    width: 1.5rem;
    height: 1.5rem;
    object-fit: cover;
  }  
`

export const Check = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: 5.75rem;
  height: 2.125rem;

  border: 1px solid #A1A1AA;
  border-radius: 24.5px;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 0.75rem;

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
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`

export const Nickname = styled.div`
  margin-right: 0.625rem;
`

export const TermsBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  h6 {
    margin: 0;

    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    letter-spacing: -0.03em;

    color: #71717A;
  }
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

    cursor: pointer;
    text-decoration: underline; 
  }
`

export const Divider = styled.div`
  margin: 1.875rem 0 1.25rem 0;
  width: 100%;
  height: 0.0625rem; 
  background-color: #F4F4F5;
`;