import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import Browser from '../../components/Chatbot/ChatbotResult/ChatbotResult'
import Mobile from '../../components/Chatbot/Mobile/Result/ResultMobile.jsx'
export default function ChatbotResultPage() {
  return (
    <div>
      <BrowserView>
        <Browser />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </div>
  )
}
