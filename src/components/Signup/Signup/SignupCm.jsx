import React, { useState } from 'react'
import * as S from "./Signup.style"
import * as T from "../../Login/Login.style"
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import notCheck from '../../../assets/notCheck.png'
import check from '../../../assets/Check.png'

export default function SignupCm() {
  const navigate = useNavigate();
  
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    pw: '',
    confirmPw: '',
  });

  const validateEmail = (email) => regexEmail.test(email);
  const validatePassword = (pw) => regexPw.test(pw);

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
    setErrors(newErrors);

    if (isValid) {
      navigate('/signup/nickname'); 
    }
  };

  return (
    <S.Container>
      <S.Title>
        <img src={logo} alt='로고' />
        <section />
        <p>회원가입</p>
      </S.Title>
      <S.Wrapper>
        <S.Box>
          <S.Input>
            <h6>이메일</h6>
            <input
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </S.Input>
            <S.Check>중복 확인</S.Check>
        </S.Box>
        <S.Box>
          <S.Input>
            <h6>비밀번호</h6>
            <S.PwInputBox>
              <input 
                name="pw"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={pw}
                onChange={handleChange}
              />
              {errors.pw === '' && pw ? (
                <img src={check} alt='check' />
              ) : (
                errors.pw !== '' ? (
                  <img src={notCheck} alt='notCheck' />
                ) : (
                  <S.CheckNull />
                )
              )}
            </S.PwInputBox>
            {errors.pw && <p>{errors.pw}</p>}
          </S.Input>
          
        </S.Box>
        <S.Box>
          <S.Input>
              <h6>비밀번호 재확인</h6>
            <S.PwInputBox>
              <input 
                name="confirmPw"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                value={confirmPw}
                onChange={handleChange}
              />
              {errors.confirmPw === '' && confirmPw ? (
                <img src={check} alt='check' />
              ) : (
                errors.confirmPw !== '' ? (
                  <img src={notCheck} alt='notCheck' />
                ) : (
                  <S.CheckNull />
                )
              )}
            </S.PwInputBox>
            {errors.confirmPw && <p>{errors.confirmPw}</p>}
          </S.Input>
          
        </S.Box>
        <T.LoginButton onClick={handleSubmit}>계속하기</T.LoginButton>
        <S.TermsBox>
          <p>회원가입 하시면</p>
          <button onClick={() => navigate('/terms')}>이용약관</button>
          <p>에 동의하는 것으로 간주됩니다.</p>
        </S.TermsBox>
        <S.Divider/>
        <S.TermsBox>
          <p>회원이신가요?</p>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </S.TermsBox>
      </S.Wrapper>
    </S.Container>
  )
}