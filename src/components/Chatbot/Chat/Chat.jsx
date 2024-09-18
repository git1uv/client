import React from 'react'
import * as S from './Chat.style'
import * as T from '../ChatbotBox/ChatbotBox.style'
import icon from '../../../assets/chatbot/loading_icon.gif' // 나중에 꼭 바꾸기!!!
export default function Chat({message, counseling, loading}) {
  const chatbot = localStorage.getItem('result');

  // 더미데이터
  const dummyData = [
    {
      msg: '안녕 마음이 내가 왔다\n 우하하하하',
      isUser: true
    },
    {
      msg: '와아아~!~! 사용자 방가와!~!',
      isUser: false
    },
    {
      msg: '테스트 함 보쟈',
      isUser: true
    },
    {
      msg: "저는 인공지능이라 졸음을 느끼지 않지만, 여러분 인간들의 피로를 충분히 이해해요. 하루 종일 열심히 활동하셨나 봐요. 이제 휴식이 필요한 시간인 것 같아요.\n\n\"수면은 최고의 명약\"이라는 말이 있죠. 몸이 보내는 신호를 무시하지 마세요. 충분한 수면은 건강과 행복을 위해 정말 중요해요.\n\n잠자리에 들기 전에 간단한 스트레칭이나 명상을 해보는 건 어떨까요? 편안한 음악을 들으며 긴장을 풀어보세요. 그리고 스마트폰이나 밝은 빛은 피하는 게 좋아요.\n\n좋은 꿈 꾸세요. 내일 아침엔 상쾌한 기분으로 일어나실 수 있을 거예요. 편안한 밤 되세요!",
      isUser: false
    },
    {
      msg: '푸르른 달에 맘을 도둑맞듯',
      isUser: true
    },
    {
      msg: '세상에 너와 나 단둘만 같았어',
      isUser: false
    },
    {
      msg: '이 순간이 잠시라면 영원히 멈춰 버리자',
      isUser: true
    },
    {
      msg: '지겨워져도 괜찮아 들어 줘 나의 blue moon',
      isUser: false
    },
  ]


  return (
    <T.Container isChat={true} >
      { // 추후에 dummyData -> message로 바꿔야 함
        dummyData.map((value, index) => {
          return (
            (value.isUser ?
              <S.UserBubble chatbot={chatbot}>{value.msg}</S.UserBubble>
              :  <S.ChatbotBubble key={index}>
              {loading && index === dummyData.length - 1 ? ( // 마지막 응답이 로딩 중일 때
                <img src={icon} alt="loading icon" />
              ) : (
                value.msg
              )}
            </S.ChatbotBubble>
            )
          )
        })
      }
    </T.Container>
  )
}
