import React, { useEffect, useState } from 'react'
import * as T from '../ChatbotBox/ChatbotBox.style'

export default function Chat({sentence}) {
  const [sentenceList, setIsSentenceList] = useState([]);

  useEffect(() => {
    setIsSentenceList((chats => [...chats, sentenceList]))
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
