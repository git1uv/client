import React, { useEffect, useState } from 'react'
import * as T from '../ChatbotBox/ChatbotBox.style'

export default function Chat({sentence, counseling}) {
  const [sentenceList, setIsSentenceList] = useState([]);

  useEffect(() => {
    setIsSentenceList((chats => [...chats, sentence]))
    console.log(sentenceList)
  }, [sentence])

  return (
    <T.Container>
        <T.Title>
            <h1>{sentence}</h1>
            
          </T.Title>
    </T.Container>
  )
}
