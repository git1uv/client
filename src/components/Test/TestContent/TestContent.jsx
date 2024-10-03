import React, { useEffect, useState } from 'react'
import * as S from '../TestContent/TestContent.style'
import * as T from '../TestStart/Test.style'
import 'bootstrap/dist/css/bootstrap.min.css';
import { titles, questions, answerF, answerT } from '../../../datas/question';

import profile from '../../../assets/chatbot/test/profile.png.webp'
import loading from '../../../assets/chatbot/test/loading.webp'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearScore, setScore } from '../../../redux/test';

export default function TestContent() {
  const isTestStart = true;
  const [progress, setProgress] = useState(0);
  const [number, setNumber] = useState(0);
  const [buttonText1, setButtonText1] = useState('');
  const [buttonText2, setButtonText2] = useState('');

  const test = useSelector((state) => state.test);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveLocalStorage = () => {
    test.score >= 70 
      ? localStorage.setItem('result', 'Neuranee')
      : test.score >= 40 ? localStorage.setItem('result', 'Banbani')
      : localStorage.setItem('result', 'Simmaeum');
    localStorage.setItem('score', test.score);
  }

  useEffect(() => {
    if (number < answerF.length) {
      const isFirstButtonFromF = Math.random() > 0.5;
      if (isFirstButtonFromF) {
        setButtonText1(answerF[number]);
        setButtonText2(answerT[number]);
      } else {
        setButtonText1(answerT[number]);
        setButtonText2(answerF[number]);
      }
    }
  }, [number]);
  
  /* 진행도 측정 */
  const handleProgress = (selectedButton) => {
    if (progress !== 90) {
      setNumber(number+1)
    }
    setProgress(progress + 10);
    if (selectedButton === 'answerT') {
      dispatch(setScore(test.score + 10))
      // T문항 선택했을 때만
    }
  }

  /* 로딩창 띄움 */
  useEffect(() => {
    if (progress === 100) {
      console.log(test.score);
      saveLocalStorage()
      const timer = setTimeout(() => {
        navigate('/test/result');
      }, 3000)
    }
  }, [progress])

  useEffect(() => { 
    dispatch(clearScore())
  }, [])
  return (
    <div>
      <T.App isTestStart={isTestStart}>
        <T.Container isTestStart={isTestStart}>
          <S.ProgressWrapper>
            <S.ProgressBarContainer progress={progress} >
              <S.CustomProgressBar now={progress} max={100}/>
            </S.ProgressBarContainer>
            <p>{progress}%</p>
          </S.ProgressWrapper>
        <S.Container>
          <S.Question>
            <h1>{titles[number]}</h1>
          </S.Question>
          <S.Content progress={progress}>
            <img src={profile} alt="프로필" />
            <div>{questions[number]}</div>
          </S.Content>
          {progress === 70 && <S.Plus><div>'저게 맞는 말 같은데,,'</div></S.Plus>}
        </S.Container>
        <T.BtnBox>
          <button 
            onClick={() => handleProgress(
              buttonText1 === answerT[number] ? 'answerT' : 'answerF'
            )}>{buttonText1}
          </button>
          <button 
            onClick={() => handleProgress(
              buttonText2 === answerT[number] ? 'answerT' : 'answerF'
            )}>{buttonText2}
          </button>
        </T.BtnBox>
        </T.Container>
      </T.App>
      { progress === 100 && (
        <S.Loading>
          <img src={loading} alt='로딩창'/>
        </S.Loading>
      )}
    </div>
  )
}
