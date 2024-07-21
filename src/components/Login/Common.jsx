import React from 'react'
import * as S from "./Login.style"

export default function Common() {
  return (
    <S.Right>
      <S.Title>
        <h1>심터</h1>
        <h5>맞춤형 챗봇 감정 케어 서비스</h5>
        <p>끙끙 앓던 자신의 고민을 부담없이 털어놔요</p>
      </S.Title>
      <S.LoginInput>
        <input placeholder='이메일을 입력하세요'></input>
        <div>

          <input placeholder='비밀번호를 입력하세요 (영대소+숫자+특수기호 12자리)'></input>
        </div>
      </S.LoginInput>
      <S.FindPw>
        <p>비밀번호를 잊으셨나요?</p>
        <button>비밀번호 찾기</button>
      </S.FindPw>
      <button>로그인</button>
      <div/>
      <S.FindPw>
        <p>아직 회원이 아니신가요?</p>
        <button>회원가입</button>
      </S.FindPw>
      <S.SocialLogin>
        <button>Kakao로 시작하기</button>
        <button>Google로 시작하기</button>
      </S.SocialLogin>
    </S.Right>
  )
}