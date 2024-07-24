import React, { useState } from 'react'
import * as S from "./Signup.style"
import { FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SignupCm() {
  const navigate = useNavigate();
  
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
  const regexName = /^[a-zA-Z가-힣]{1,10}$/;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [nickname, setNickname] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    pw: '',
    confirmPw: '',
    nickname: '',
  });

  const validateEmail = (email) => regexEmail.test(email);
  const validatePassword = (pw) => regexPw.test(pw);
  const validateNickname = (nickname) => regexName.test(nickname);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        setErrors(prev => ({
          ...prev,
          email: validateEmail(value) ? '' : '유효한 이메일 주소를 입력하세요.'
        }));
        break;
      case 'pw':
        setPw(value);
        setErrors(prev => ({
          ...prev,
          pw: validatePassword(value) ? '' : '비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.'
        }));
        break;
      case 'confirmPw':
        setConfirmPw(value);
        setErrors(prev => ({
          ...prev,
          confirmPw: value === pw ? '' : '비밀번호가 일치하지 않습니다.'
        }));
        break;
      case 'nickname':
        setNickname(value);
        setErrors(prev => ({
          ...prev,
          nickname: validateNickname(value) ? '' : '닉네임은 1~10자의 한글 또는 영문이어야 합니다.'
        }));
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { ...errors };

    if (!validateEmail(email)) {
      newErrors.email = '유효한 이메일 주소를 입력하세요.';
      isValid = false;
    }

    if (!validatePassword(pw)) {
      newErrors.pw = '비밀번호는 8~16자의 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.';
      isValid = false;
    }

    if (pw !== confirmPw) {
      newErrors.confirmPw = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    if (!validateNickname(nickname)) {
      newErrors.nickname = '닉네임은 1~10자의 한글 또는 영문이어야 합니다.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // 모든 검사가 통과했을 때의 로직을 여기에 추가
      console.log('Form submitted');
      // navigate('/success'); // 성공 시 리디렉션 예시
    }
  };

  return (
    <S.Container>
      <h1>심터</h1>
      <S.Box>
        <S.Left>
          <h6>이메일</h6>
          <input
            name="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </S.Left>
          <FaCircle size={20}/>
      </S.Box>
      <S.Box>
        <S.Left>
          <h6>비밀번호</h6>
            <input 
              name="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={pw}
              onChange={handleChange}
            />
          {errors.pw && <p>{errors.pw}</p>}
        </S.Left>
          <FaCircle size={20}/>
      </S.Box>
      <S.Box>
        <S.Left>
          <h6>비밀번호 재확인</h6>
          <input 
            name="confirmPw"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={confirmPw}
            onChange={handleChange}
          />
          {errors.confirmPw && <p>{errors.confirmPw}</p>}
        </S.Left>
          <FaCircle size={20}/>
      </S.Box>
      <S.Box>
        <S.Left>
          <S.Nickname>
            <h6>닉네임</h6> 
            <h6 style={{color: 'grey'}}> 챗봇이 뭐라고 불러드리면 좋을지 알려주세요!</h6>
          </S.Nickname>
          <input
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={handleChange}
          />
          {errors.nickname && <p>{errors.nickname}</p>}
        </S.Left>
          <FaCircle size={20}/>
      </S.Box>
      <button onClick={handleSubmit}>가입하기</button>
      <S.TermsBox>
        <p>회원가입 하시면</p>
        <button onClick={() => navigate('/terms')}>이용약관</button>
        <p>에 동의하는 것으로 간주됩니다.</p>
      </S.TermsBox>
      <S.Divider/>
      <S.RouteLogin>
        <p>이미 가입한 회원이신가요?</p>
        <button onClick={() => navigate('/')}>로그인 하러 가기</button>
      </S.RouteLogin>
    </S.Container>
  )
}
