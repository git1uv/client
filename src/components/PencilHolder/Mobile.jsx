import React from 'react'
import * as T from "./PencilHolder.style"

export default function Mobile() {
  return (
    <T.Container>
        <T.Title>
            <h1>익명의 심터러에게 편지를 보내보세요!</h1>
          <p>편지는 익명으로 보내지며, 랜덤의 사용자에게 전송됩니다! </p>
          <p>익명의 편지로 따뜻한 마음을 전해주세요~</p>
        </T.Title>
        <T.Letter>
        <T.WriteBox>
              <h3>표시할 이름</h3>
              <input placeholder='표시할 이름을 적어주세요! (최대 10자)'
                ></input>
            </T.WriteBox>
        </T.Letter>
    </T.Container>
  )
}
