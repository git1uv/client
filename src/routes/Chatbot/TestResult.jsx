import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Simmaeum from '../../assets/chatbot/chatStart/Simmaeum.png'
import Banbani from '../../assets/chatbot/chatStart/Banbani.png'
import Neuranee from '../../assets/chatbot/chatStart/Neuranee.png'

export default function TestResult() {
    const test = useSelector((state) => state.test);
    const score = test.score;
    console.log(score)
    const result = localStorage.getItem('result')

  return (
    <>
        <h1>.</h1>
        <h1>.</h1>
        <h1>{result}</h1>
        {result >= 60 
        ? <h1>뉴러니</h1>
        : result >= 30 ? <h1>반바니</h1>
        : <h1>심마음</h1>}
        {result >= 60 
        ? <img src={Neuranee} alt='chatbot' />
        : result >= 30 ? <img src={Banbani} alt='chatbot' /> 
        : <img src={Simmaeum} alt='chatbot' />  }
        
    </>
  )
}
