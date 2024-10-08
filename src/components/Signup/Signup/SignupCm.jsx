import React, { useEffect, useState } from 'react'
import * as S from "./Signup.style"
import * as T from "../../Login/Login.style"
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.webp'
import notCheck from '../../../assets/notCheck.webp'
import check from '../../../assets/Check.webp'
import { useDispatch, useSelector } from 'react-redux';
import { setAccount, setLoginType } from '../../../redux/user'
import axios from 'axios';
import MockModal from '../../Modal/MockModal';
import Resizer from 'react-image-file-resizer';
import backgroundImg from "../../../assets/backgroundImg.avif"

export default function SignupCm() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
  
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isValidEmail, setIsValidEmail] = useState();
  const [isAllValid, setIsAllValid] = useState(false);

  const [isMockModal, setIsMockModal] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');


  const user = useSelector((state) => state.user);

  const [errors, setErrors] = useState({
    email: '',
    pw: '',
    confirmPw: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const resizeImage = (image) => {
    return new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        image,
        800, // 원하는 가로 크기
        600, // 원하는 세로 크기
        "avif", // 변환할 포맷
        100, // 품질
        0, // 회전
        (uri) => {
          resolve(uri);
        },
        "base64" // 반환 형식
      );
    });
  };
  const processImage = async () => {
    // AVIF 파일을 이미지 객체로 생성
    const img = new Image();
    img.src = backgroundImg; // AVIF 파일 경로
  
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Canvas의 데이터를 Blob으로 변환
      canvas.toBlob(async (blob) => {
        if (blob) {
          const resizedImage = await resizeImage(blob); // 리사이즈 실행
          setBackgroundImage(resizedImage); // 상태 업데이트
          // resizedImage를 사용하여 배경으로 설정할 수 있음
        }
      }, 'image/png', 1);
    };
  };

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

    if (isAllValid) {
      dispatch(setAccount({
        email: email,
        password: pw
      }))
      dispatch(setLoginType('general'))

      setTimeout(() => {
        navigate('/signup/nickname'); 
      }, 100); // 약간의 딜레이 추가
    }
  };

  useEffect(() => {
    if (validateEmail(email) && validatePassword(pw) && pw == confirmPw && isValidEmail)
      setIsAllValid(true);
  }, [email, pw, confirmPw, isValidEmail]);
  useEffect(() => {
    processImage(); // 컴포넌트가 마운트될 때 이미지 처리
  }, []);
  const checkEmail = async() => {
    if(validateEmail(email)) {
      try {
        const res = await axios.get(`${serverURL}/api/v1/register/general/check?email=${encodeURIComponent(email)}`)
        // setIsValidEmail(res.data.data.valid);
        const valid = res.data.data.valid; 
        setIsValidEmail(valid); 
        if (!valid) {
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
        // console.log(res.data);

      } catch(err) {
        // console.log(err);
      }
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: '유효한 이메일 주소를 입력해주세요.'
      }));
    }
  }

  return (
  <>
    <T.Container bgImage={backgroundImage}>
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
        <T.LoginButton 
          disabled={!isAllValid}
          onClick={handleSubmit}>계속하기</T.LoginButton>
        <S.TermsBox>
          <h6>회원가입 하시면</h6>
          <button onClick={() => setIsMockModal(true)}>이용약관</button>
          <h6>에 동의하는 것으로 간주됩니다.</h6>
        </S.TermsBox>
        <S.Divider/>
        <S.TermsBox>
          <h6>회원이신가요?</h6>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </S.TermsBox>
      </T.Wrapper>
    </T.Container>
    <MockModal
      isVisible={isMockModal}
      onClose={() => setIsMockModal(false)}  
    />
    </>
  )
}
