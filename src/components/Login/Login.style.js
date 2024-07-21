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
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const FindPw = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
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

