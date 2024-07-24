import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: auto;
  height: 100vh;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: lightblue;

  img {
    width: 100%;
    height: 100vh;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 80%;
  input {
    height: 40px;
    padding: 10px;
    padding-right: 40px; /* 아이콘 공간 확보 */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const PwInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    padding-right: 40px; /* 아이콘 공간 확보 */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
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
`;

export const FindPw = styled.div`
  display: flex;
  
  button { 
    background: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 80%;
  button {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
`

export const Divider = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 1px; /* 아이콘과 같은 높이로 설정 */
  background-color: #ccc;
`;