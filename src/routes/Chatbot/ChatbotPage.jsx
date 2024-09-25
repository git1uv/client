import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import Browser from '../../components/Chatbot/Browser/Chatbot/Chatbot.jsx'
import Mobile from '../../components/Chatbot/Mobile/Chat/ChatbotMobile.jsx'

export default function ChatbotPage() {
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
