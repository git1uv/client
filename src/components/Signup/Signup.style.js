import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin-bottom: 40px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input {
    width: 90%;
    height: 40px;
  }
  p {
    margin: 0;
  }
  h6 {
    margin: 0;
  }
`;

export const Nickname = styled.div`
  display: flex;
  width: 90%;

  h6 {
    margin-right: 10px;
  }
`

export const TermsBox = styled.div`
  display: flex;
  p {
    margin-right: 10px;
  }
  button { 
    background: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`

export const Divider = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 1px; /* 아이콘과 같은 높이로 설정 */
  background-color: #ccc;
`;

export const RouteLogin = styled.div`
  display: flex;
  
  button { 
    background: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`;
