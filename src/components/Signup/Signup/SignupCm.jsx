import React, { useState } from 'react'
import * as S from "./Signup.style"
import * as T from "../../Login/Login.style"
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import notCheck from '../../../assets/notCheck.png'
import check from '../../../assets/Check.png'
import { useDispatch } from 'react-redux';
import { setAccount } from '../../../redux/user'
import axios from 'axios';

export default function SignupCm() {
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const validateEmail = (email) => regexEmail.test(email);
  const validatePassword = (pw) => regexPw.test(pw);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        setErrors(prev => ({
          ...prev,
          email: validateEmail(value) ? '' : '유효한 이메일 주소를 입력해주세요.'
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

    if (!validateEmail(email) || !validatePassword(pw) || pw !== confirmPw)
      isValid = false;

    if (isValid) {
      dispatch(setAccount({
        email: email,
        password: pw
      }))
      navigate('/signup/nickname'); 
    }
  };

  const checkEmail = async() => {
    if(validateEmail(email)) {
      try {
        const res = await axios.get(`http://simter.site:8080/api/v1/register/general/check?email=${encodeURIComponent(email)}`)
        if (!res.data.valid) {
          setErrors(prevErrors => ({
            ...prevErrors,
            email: '이미 가입된 이메일입니다.'
          }));
        } else {
          setErrors(prevErrors => ({
            ...prevErrors,
            email: '사용 가능한 이메일입니다.'
          }));
        }
        console.log(res.data);
      } catch(err) {
        console.log(err);
      }
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: '유효한 이메일 주소를 입력해주세요.'
      }));
    }
  }

  return (
    <T.Container>
      <T.Wrapper>
        <T.Title>
          <img src={logo} alt='로고' />
          <section />
          <h1>회원가입</h1>
        </T.Title>
        <S.Box>
          <S.Input>
            <h6>이메일</h6>
            <input
              name="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={handleChange}
            />
            <p>{errors.email}</p>
          </S.Input>
            <S.Check onClick={checkEmail}>중복 확인</S.Check>
        </S.Box>
        <S.Box>
          <S.Input>
            <h6>비밀번호</h6>
            <S.PwInputBox>
              <input 
                name="pw"
                type="password"
                placeholder="비밀번호를 입력해주세요."
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
                placeholder="비밀번호를 다시 입력해주세요."
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
        <T.Null />
        <T.LoginButton onClick={handleSubmit}>계속하기</T.LoginButton>
        <S.TermsBox>
          <h6>회원가입 하시면</h6>
          <button onClick={() => navigate('/terms')}>이용약관</button>
          <h6>에 동의하는 것으로 간주됩니다.</h6>
        </S.TermsBox>
        <S.Divider/>
        <S.TermsBox>
          <h6>회원이신가요?</h6>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </S.TermsBox>
      </T.Wrapper>
    </T.Container>
  )
}
